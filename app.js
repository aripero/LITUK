// Main application logic
let currentTest = null;
let testResults = [];
let failedQuestions = [];
let currentQuestionIndex = 0;
let testStartTime = null;
let timerInterval = null;
let currentChapter = null;

// Practice mode variables
let currentPractice = null;
let practiceQuestionIndex = 0;

// Authentication state
let isUserAuthenticated = false;
let currentUserId = null;
let userDataUnsubscribe = null;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    // Ensure app container is hidden and login screen is visible
    const appContainer = document.getElementById('app-container');
    const loginScreen = document.getElementById('login-screen');
    
    // Force hide app container (multiple ways to ensure it's hidden)
    if (appContainer) {
        appContainer.style.display = 'none';
        appContainer.setAttribute('data-hidden', 'true');
    }
    
    // Force show login screen
    if (loginScreen) {
        loginScreen.style.display = 'flex';
        loginScreen.style.zIndex = '10000'; // Very high z-index
    }
    
    // Wait for Firebase to initialize, then set up auth listener
    setTimeout(() => {
        // Check if Firebase is loaded
        if (typeof firebase === 'undefined') {
            console.error('Firebase is not loaded. Check if Firebase SDK scripts are loading correctly.');
            const loginError = document.getElementById('login-error');
            if (loginError) {
                loginError.textContent = 'Error loading Firebase. Please refresh the page.';
                loginError.style.display = 'block';
            }
            return;
        }
        
        // Check if auth is available
        if (typeof auth === 'undefined') {
            console.error('Firebase Auth is not initialized. Check firebase-config.js');
            const loginError = document.getElementById('login-error');
            if (loginError) {
                loginError.textContent = 'Error initializing authentication. Please refresh the page.';
                loginError.style.display = 'block';
            }
            return;
        }
        
        console.log('Setting up auth listener...');
        setupAuthListener();
    }, 500); // Increased timeout to ensure Firebase scripts are loaded
});

function initializeApp() {
    // Load chapters
    displayChapters();
    
    // Check for failed questions
    if (failedQuestions.length > 0) {
        document.getElementById('failed-questions-section').style.display = 'block';
    }
}

function setupNavigation() {
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const section = tab.getAttribute('data-section');
            showSection(section);
        });
    });
}

function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionName).classList.add('active');
    
    // Update nav tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-section') === sectionName) {
            tab.classList.add('active');
        }
    });
    
    // Section-specific initialization
    if (sectionName === 'progress') {
        displayProgress();
    } else if (sectionName === 'learn') {
        showChapterList();
    } else if (sectionName === 'practice') {
        // Reset practice view if needed
        if (!currentPractice) {
            document.getElementById('practice-start').style.display = 'block';
            document.getElementById('practice-active').style.display = 'none';
            document.getElementById('practice-results').style.display = 'none';
        }
    }
}

// Learning Section
function displayChapters() {
    const chapterList = document.getElementById('chapter-list');
    chapterList.innerHTML = '';
    
    content.chapters.forEach(chapter => {
        const chapterItem = document.createElement('div');
        chapterItem.className = 'chapter-item';
        chapterItem.innerHTML = `<h3>Chapter ${chapter.id}: ${chapter.title}</h3>`;
        chapterItem.addEventListener('click', () => showChapter(chapter));
        chapterList.appendChild(chapterItem);
    });
}

function showChapterList() {
    document.getElementById('chapter-list').style.display = 'block';
    document.getElementById('chapter-content').style.display = 'none';
}

function showChapter(chapter) {
    currentChapter = chapter;
    document.getElementById('chapter-list').style.display = 'none';
    const chapterContent = document.getElementById('chapter-content');
    chapterContent.style.display = 'block';
    
    let html = `<h2>Chapter ${chapter.id}: ${chapter.title}</h2>`;
    
    chapter.sections.forEach(section => {
        html += `<h3>${section.title}</h3>`;
        html += `<div class="section-content">${formatContent(section.content)}</div>`;
    });
    
    // Add "Back to Chapters" button at the end
    html += `<div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #e0e0e0;">
        <button class="back-btn" onclick="showChapterList()">← Back to Chapters</button>
    </div>`;
    
    document.getElementById('chapter-text').innerHTML = html;
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function formatContent(text) {
    // Convert line breaks and lists to HTML
    const lines = text.split('\n');
    let html = '';
    let inList = false;
    
    lines.forEach(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith('-')) {
            if (!inList) {
                html += '<ul>';
                inList = true;
            }
            html += `<li>${trimmed.substring(1).trim()}</li>`;
        } else {
            if (inList) {
                html += '</ul>';
                inList = false;
            }
            if (trimmed === '') {
                html += '<br>';
            } else {
                html += `<p>${trimmed}</p>`;
            }
        }
    });
    
    if (inList) {
        html += '</ul>';
    }
    
    return html;
}

// Test Section
function startNewTest() {
    // Clear any existing timer
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    
    // Generate random 24 questions
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    currentTest = {
        questions: shuffled.slice(0, 24),
        answers: [],
        startTime: Date.now(),
        endTime: null
    };
    
    currentQuestionIndex = 0;
    testStartTime = Date.now();
    
    // Start timer
    startTimer();
    
    // Show test interface
    document.getElementById('test-start').style.display = 'none';
    document.getElementById('test-active').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';
    
    displayQuestion();
}

function displayQuestion() {
    const question = currentTest.questions[currentQuestionIndex];
    const questionNum = currentQuestionIndex + 1;
    const totalQuestions = currentTest.questions.length;
    
    // Update progress
    document.getElementById('current-question-num').textContent = questionNum;
    document.getElementById('total-questions').textContent = totalQuestions;
    const progress = (questionNum / totalQuestions) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    
    // Display question
    document.getElementById('question-text').textContent = question.question;
    
    // Display options
    const optionsContainer = document.getElementById('answer-options');
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'answer-option';
        optionDiv.textContent = option;
        optionDiv.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(optionDiv);
    });
    
    // Hide feedback and reset next button
    document.getElementById('question-feedback').style.display = 'none';
    const nextBtn = document.getElementById('next-question-btn');
    nextBtn.style.display = 'none';
    nextBtn.textContent = 'Next Question';
    nextBtn.onclick = nextQuestion;
}

function selectAnswer(selectedIndex) {
    const question = currentTest.questions[currentQuestionIndex];
    const options = document.querySelectorAll('.answer-option');
    
    // Disable all options
    options.forEach(opt => opt.style.pointerEvents = 'none');
    
    // Mark selected answer
    options[selectedIndex].classList.add('selected');
    
    // Check if correct
    const isCorrect = selectedIndex === question.correct;
    
    // Mark correct answer
    options[question.correct].classList.add('correct');
    
    // Update failed questions list based on answer
    const failedQIndex = failedQuestions.findIndex(fq => fq.id === question.id);
    
    if (isCorrect) {
        // If answered correctly, remove from failed questions list
        if (failedQIndex !== -1) {
            failedQuestions.splice(failedQIndex, 1);
        }
    } else {
        // If answered incorrectly, add or update in failed questions list
        options[selectedIndex].classList.add('incorrect');
        if (failedQIndex === -1) {
            // Not in list, add it
            failedQuestions.push({
                ...question,
                timesFailed: 1,
                lastFailed: Date.now()
            });
        } else {
            // Already in list, update it
            const failedQ = failedQuestions[failedQIndex];
            failedQ.timesFailed++;
            failedQ.lastFailed = Date.now();
        }
    }
    
    // Store answer
    currentTest.answers[currentQuestionIndex] = {
        questionId: question.id,
        selected: selectedIndex,
        correct: isCorrect
    };
    
    // Show feedback
    showFeedback(question, isCorrect, false);
    
    // Save progress and update failed questions display if on progress page
    saveProgress();
    if (document.getElementById('progress').classList.contains('active')) {
        displayFailedQuestions();
    }
}

function getPDFTextForQuestion(question) {
    // Get the relevant text from content.js based on chapter and section
    if (!question.chapter) return null;
    
    const chapter = content.chapters.find(c => c.id === question.chapter);
    if (!chapter) return null;
    
    // Find the section that matches
    let sectionText = null;
    if (question.section) {
        const section = chapter.sections.find(s => s.title === question.section);
        if (section) {
            sectionText = section.content;
        }
    }
    
    // If no exact section match, get all sections from the chapter
    if (!sectionText && chapter.sections.length > 0) {
        sectionText = chapter.sections.map(s => `${s.title}\n\n${s.content}`).join('\n\n');
    }
    
    return sectionText;
}

function showFeedback(question, isCorrect, isPractice = false) {
    const feedbackDiv = document.getElementById(isPractice ? 'practice-question-feedback' : 'question-feedback');
    feedbackDiv.className = 'question-feedback ' + (isCorrect ? 'correct' : 'incorrect');
    
    const feedbackId = isPractice ? 'practice-feedback-' + practiceQuestionIndex : 'feedback-' + currentQuestionIndex;
    
    let html = `<h4>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</h4>`;
    
    if (isCorrect) {
        // For correct answers, show "Show more" button
        html += `<a href="#" class="show-more-link" data-feedback-id="${feedbackId}">Show more</a>`;
        html += `<div id="${feedbackId}-details" class="feedback-details" style="display: none;">`;
        html += `<p><strong>Explanation:</strong> ${question.explanation}</p>`;
        
        // Add PDF text excerpt
        const pdfText = getPDFTextForQuestion(question);
        if (pdfText) {
            html += `<div class="pdf-text-excerpt">`;
            html += `<h5>📖 From the Official Guide:</h5>`;
            html += `<div>${formatContent(pdfText)}</div>`;
            html += `</div>`;
        }
        
        if (question.chapter) {
            html += `<p><small>See Chapter ${question.chapter}: ${question.section || 'Related content'}</small></p>`;
        }
        html += `</div>`;
    } else {
        // For incorrect answers, show everything by default
        html += `<p><strong>Correct answer:</strong> ${question.options[question.correct]}</p>`;
        html += `<p><strong>Explanation:</strong> ${question.explanation}</p>`;
        
        // Add PDF text excerpt
        const pdfText = getPDFTextForQuestion(question);
        if (pdfText) {
            html += `<div class="pdf-text-excerpt">`;
            html += `<h5>📖 From the Official Guide:</h5>`;
            html += `<div>${formatContent(pdfText)}</div>`;
            html += `</div>`;
        }
        
        if (question.chapter) {
            html += `<p><small>See Chapter ${question.chapter}: ${question.section || 'Related content'}</small></p>`;
        }
    }
    
    feedbackDiv.innerHTML = html;
    feedbackDiv.style.display = 'block';
    
    // Attach event listener to show more link if it exists
    const showMoreLink = feedbackDiv.querySelector('.show-more-link');
    if (showMoreLink) {
        showMoreLink.addEventListener('click', function(e) {
            e.preventDefault();
            toggleFeedbackDetails(feedbackId, this);
        });
    }
    
    if (!isPractice) {
        // Show next button for regular test
        const totalQuestions = currentTest ? currentTest.questions.length : 24;
        if (currentQuestionIndex < totalQuestions - 1) {
            document.getElementById('next-question-btn').style.display = 'block';
        } else {
            // Last question - show finish button
            const nextBtn = document.getElementById('next-question-btn');
            nextBtn.textContent = 'Finish Test';
            nextBtn.onclick = finishTest;
            nextBtn.style.display = 'block';
        }
    }
}

function toggleFeedbackDetails(feedbackId, linkElement) {
    const detailsDiv = document.getElementById(feedbackId + '-details');
    
    if (detailsDiv && detailsDiv.style.display === 'none') {
        detailsDiv.style.display = 'block';
        linkElement.textContent = 'Show less';
    } else if (detailsDiv) {
        detailsDiv.style.display = 'none';
        linkElement.textContent = 'Show more';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < 24) {
        displayQuestion();
    } else {
        finishTest();
    }
}

function finishTest() {
    clearInterval(timerInterval);
    
    currentTest.endTime = Date.now();
    const duration = Math.floor((currentTest.endTime - currentTest.startTime) / 1000);
    
    // Calculate score
    const correctCount = currentTest.answers.filter(a => a.correct).length;
    const score = Math.round((correctCount / 24) * 100);
    const passed = score >= 75;
    
    // Save test result
    const testResult = {
        date: Date.now(),
        score: score,
        correct: correctCount,
        incorrect: 24 - correctCount,
        passed: passed,
        duration: duration,
        questions: currentTest.questions.map(q => q.id)
    };
    
    testResults.push(testResult);
    saveProgress();
    
    // Display results
    document.getElementById('test-active').style.display = 'none';
    document.getElementById('test-results').style.display = 'block';
    
    document.getElementById('final-score').textContent = score;
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('incorrect-count').textContent = 24 - correctCount;
    
    const passFail = document.getElementById('pass-fail');
    if (passed) {
        passFail.textContent = '✓ Passed!';
        passFail.style.color = 'var(--success-color)';
    } else {
        passFail.textContent = '✗ Not Passed';
        passFail.style.color = 'var(--error-color)';
    }
    
    updateHomeStats();
}

function reviewTest() {
    // Show test review with all questions and answers
    showSection('progress');
    // Could implement a detailed review view here
}

function startTimer() {
    let timeLeft = 45 * 60; // 45 minutes in seconds
    
    timerInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('timer').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            finishTest();
        }
    }, 1000);
}

// Progress Section
function displayProgress() {
    updateReadinessIndicator();
    displayFailedQuestions();
    displayTestHistory();
}

function updateReadinessIndicator() {
    if (testResults.length === 0) {
        document.getElementById('readiness-text').textContent = 
            'Start taking practice tests to assess your readiness';
        document.getElementById('readiness-bar-fill').style.width = '0%';
        return;
    }
    
    // Calculate readiness based on recent test performance
    const recentTests = testResults.slice(-5); // Last 5 tests
    const avgScore = recentTests.reduce((sum, t) => sum + t.score, 0) / recentTests.length;
    const passedCount = recentTests.filter(t => t.passed).length;
    
    let readiness = 0;
    let readinessText = '';
    
    if (recentTests.length >= 3 && avgScore >= 85 && passedCount >= 3) {
        readiness = 100;
        readinessText = 'Excellent! You are ready to take the official exam.';
    } else if (recentTests.length >= 3 && avgScore >= 75 && passedCount >= 2) {
        readiness = 75;
        readinessText = 'Good progress! Consider taking a few more practice tests to build confidence.';
    } else if (recentTests.length >= 2 && avgScore >= 70) {
        readiness = 50;
        readinessText = 'Keep practicing! You\'re making progress but need more consistency.';
    } else {
        readiness = 25;
        readinessText = 'Continue studying and taking practice tests to improve your score.';
    }
    
    document.getElementById('readiness-bar-fill').style.width = readiness + '%';
    document.getElementById('readiness-text').textContent = readinessText;
}

function displayFailedQuestions() {
    const failedList = document.getElementById('failed-questions-list');
    const retakeBtn = document.getElementById('retake-failed-btn');
    document.getElementById('failed-count').textContent = failedQuestions.length;
    
    if (failedQuestions.length === 0) {
        failedList.innerHTML = '<p>No failed questions yet. Great job!</p>';
        retakeBtn.style.display = 'none';
        return;
    }
    
    // Show retake button if there are failed questions
    retakeBtn.style.display = 'block';
    
    // Sort by times failed (most failed first)
    const sortedFailed = [...failedQuestions].sort((a, b) => b.timesFailed - a.timesFailed);
    
    failedList.innerHTML = '';
    sortedFailed.forEach(question => {
        const item = document.createElement('div');
        item.className = 'failed-question-item';
        item.innerHTML = `
            <div>
                <strong>${question.question}</strong>
                <p style="margin-top: 0.5rem; color: var(--text-light); font-size: 0.875rem;">
                    Failed ${question.timesFailed} time${question.timesFailed > 1 ? 's' : ''}
                    ${question.chapter ? ` • Chapter ${question.chapter}` : ''}
                </p>
            </div>
        `;
        item.addEventListener('click', () => {
            // Show explanation and link to chapter
            alert(`${question.question}\n\nCorrect answer: ${question.options[question.correct]}\n\n${question.explanation}`);
            if (question.chapter) {
                if (confirm('Would you like to review the related chapter?')) {
                    showSection('learn');
                    const chapter = content.chapters.find(c => c.id === question.chapter);
                    if (chapter) {
                        showChapter(chapter);
                    }
                }
            }
        });
        failedList.appendChild(item);
    });
}

function retakeFailedQuestions() {
    if (failedQuestions.length === 0) {
        alert('You have no failed questions to retake!');
        return;
    }
    
    // Create a test with all failed questions
    const failedQIds = failedQuestions.map(fq => fq.id);
    const failedQBank = questions.filter(q => failedQIds.includes(q.id));
    
    if (failedQBank.length === 0) {
        alert('No questions available to retake.');
        return;
    }
    
    // Shuffle and use all failed questions (or up to 500)
    const shuffled = [...failedQBank].sort(() => Math.random() - 0.5);
    const questionsToUse = shuffled.slice(0, Math.min(500, shuffled.length));
    
    // Switch to practice section and start
    showSection('practice');
    startPracticeWithQuestions(questionsToUse);
}

function displayTestHistory() {
    const historyList = document.getElementById('test-history-list');
    
    if (testResults.length === 0) {
        historyList.innerHTML = '<p>No test history yet. Take your first practice test!</p>';
        return;
    }
    
    // Show last 10 tests
    const recentTests = testResults.slice(-10).reverse();
    
    historyList.innerHTML = '';
    recentTests.forEach((result, displayIndex) => {
        const item = document.createElement('div');
        item.className = 'test-history-item';
        const date = new Date(result.date);
        const dateStr = date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        // Calculate actual index in testResults array
        const actualIndex = testResults.length - 1 - displayIndex;
        
        item.innerHTML = `
            <div style="flex: 1;">
                <strong>Test ${testResults.length - displayIndex}</strong>
                <p style="margin: 0; color: var(--text-light); font-size: 0.875rem;">${dateStr}</p>
            </div>
            <div style="text-align: right; margin-right: 1rem;">
                <div style="font-size: 1.25rem; font-weight: 700; color: ${result.passed ? 'var(--success-color)' : 'var(--error-color)'};">
                    ${result.score}%
                </div>
                <div style="font-size: 0.875rem; color: var(--text-light);">
                    ${result.correct}/24 correct
                </div>
            </div>
            <button class="delete-test-btn" onclick="deleteTest(${actualIndex})" aria-label="Delete test">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
            </button>
        `;
        historyList.appendChild(item);
    });
}

function deleteTest(index) {
    if (confirm('Are you sure you want to delete this test result?')) {
        testResults.splice(index, 1);
        saveProgress();
        displayTestHistory();
        updateHomeStats();
        updateReadinessIndicator();
    }
}

function reviewFailedQuestions() {
    if (failedQuestions.length === 0) {
        alert('You have no failed questions to review!');
        return;
    }
    
    // Create a test with only failed questions (up to 24)
    const failedQIds = failedQuestions.map(fq => fq.id);
    const failedQBank = questions.filter(q => failedQIds.includes(q.id));
    const shuffled = [...failedQBank].sort(() => Math.random() - 0.5);
    
    currentTest = {
        questions: shuffled.slice(0, Math.min(24, shuffled.length)),
        answers: [],
        startTime: Date.now(),
        endTime: null
    };
    
    currentQuestionIndex = 0;
    testStartTime = Date.now();
    startTimer();
    
    showSection('test');
    document.getElementById('test-start').style.display = 'none';
    document.getElementById('test-active').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';
    
    displayQuestion();
}

// Home Stats
function updateHomeStats() {
    document.getElementById('total-tests').textContent = testResults.length;
    
    if (testResults.length > 0) {
        const avgScore = Math.round(testResults.reduce((sum, t) => sum + t.score, 0) / testResults.length);
        document.getElementById('avg-score').textContent = avgScore + '%';
        
        // Update readiness
        const recentTests = testResults.slice(-5);
        if (recentTests.length >= 3) {
            const avg = recentTests.reduce((sum, t) => sum + t.score, 0) / recentTests.length;
            const passed = recentTests.filter(t => t.passed).length;
            if (avg >= 85 && passed >= 3) {
                document.getElementById('readiness').textContent = 'Ready';
                document.getElementById('readiness').style.color = 'var(--success-color)';
            } else if (avg >= 75 && passed >= 2) {
                document.getElementById('readiness').textContent = 'Almost Ready';
                document.getElementById('readiness').style.color = 'var(--warning-color)';
            } else {
                document.getElementById('readiness').textContent = 'Keep Practicing';
                document.getElementById('readiness').style.color = 'var(--error-color)';
            }
        } else {
            document.getElementById('readiness').textContent = 'Not Ready';
            document.getElementById('readiness').style.color = 'var(--text-light)';
        }
    }
}

// Authentication Setup
function setupAuthListener() {
    onAuthStateChange((user, isAuthorized, errorMessage) => {
        console.log('Auth state change callback:', { user: user?.email, isAuthorized });
        
        // Always hide loading spinner immediately
        const loginLoading = document.getElementById('login-loading');
        if (loginLoading) {
            loginLoading.style.display = 'none';
        }
        
        if (user) {
            // User is authenticated - allow access to anyone with Google account
            console.log('User authenticated, loading data...');
            isUserAuthenticated = true;
            currentUserId = user.uid;
            
            // Clear localStorage (start fresh)
            localStorage.removeItem('lifeInUKProgress');
            
            // Save user profile (don't wait for it)
            saveUserProfile(user.uid, {
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL
            }).catch(err => console.warn('Error saving user profile:', err));
            
            // Load user data from Firestore with timeout
            const loadPromise = loadUserProgress(user.uid);
            const timeoutPromise = new Promise((_, reject) => 
                setTimeout(() => reject(new Error('Timeout loading user data')), 5000)
            );
            
            Promise.race([loadPromise, timeoutPromise])
                .then((data) => {
                    console.log('User progress loaded successfully');
                    testResults = data.testResults || [];
                    failedQuestions = data.failedQuestions || [];
                    
                    // Set up real-time listener for data changes
                    if (userDataUnsubscribe) {
                        userDataUnsubscribe();
                    }
                    userDataUnsubscribe = subscribeToUserData(user.uid, (data) => {
                        testResults = data.testResults || [];
                        failedQuestions = data.failedQuestions || [];
                        updateHomeStats();
                        displayProgress();
                    });
                    
                    // Initialize app
                    console.log('Showing authenticated UI...');
                    showAuthenticatedUI(user);
                    initializeApp();
                    setupNavigation();
                    updateHomeStats();
                })
                .catch((error) => {
                    console.error('Error loading user progress:', error);
                    // Still show the UI even if loading progress fails
                    console.log('Showing authenticated UI despite error...');
                    showAuthenticatedUI(user);
                    initializeApp();
                    setupNavigation();
                    if (error.message !== 'Timeout loading user data') {
                        showError('Error loading your data. Some features may not work correctly.');
                    }
                });
        } else {
            // User is not authenticated
            console.log('User not authenticated, showing login UI');
            isUserAuthenticated = false;
            currentUserId = null;
            
            // Unsubscribe from data changes
            if (userDataUnsubscribe) {
                userDataUnsubscribe();
                userDataUnsubscribe = null;
            }
            
            // Clear app state
            testResults = [];
            failedQuestions = [];
            
            // Show login screen
            showLoginUI(null);
        }
    });
}

// Show authenticated UI
function showAuthenticatedUI(user) {
    console.log('showAuthenticatedUI called for user:', user?.email);
    
    // Safely get elements and check if they exist
    const loginScreen = document.getElementById('login-screen');
    const appContainer = document.getElementById('app-container');
    const mainNav = document.getElementById('main-nav');
    const loginBtn = document.getElementById('login-btn');
    const loginLoading = document.getElementById('login-loading');
    const loginError = document.getElementById('login-error');
    const authUserInfo = document.getElementById('auth-user-info');
    const userAvatar = document.getElementById('user-avatar');
    const userName = document.getElementById('user-name');
    
    if (loginScreen) loginScreen.style.display = 'none';
    if (appContainer) appContainer.style.display = 'flex'; // Show app content
    if (mainNav) mainNav.style.display = 'flex';
    if (loginBtn) loginBtn.style.display = 'none';
    if (loginLoading) loginLoading.style.display = 'none';
    if (loginError) loginError.style.display = 'none';
    
    if (authUserInfo) {
        authUserInfo.style.display = 'flex';
    }
    if (userAvatar && user) {
        userAvatar.src = user.photoURL || '';
    }
    if (userName && user) {
        userName.textContent = user.displayName || user.email || '';
    }
    
    console.log('showAuthenticatedUI completed');
}

// Show login UI
function showLoginUI(errorMessage) {
    console.log('showLoginUI called with errorMessage:', errorMessage);
    document.getElementById('login-screen').style.display = 'flex';
    document.getElementById('app-container').style.display = 'none'; // Hide app content
    document.getElementById('main-nav').style.display = 'none';
    document.getElementById('auth-user-info').style.display = 'none';
    document.getElementById('login-btn').style.display = 'block';
    document.getElementById('login-loading').style.display = 'none'; // Always hide loading when showing login UI
    
    const loginError = document.getElementById('login-error');
    if (errorMessage) {
        console.log('Displaying error message:', errorMessage);
        loginError.textContent = errorMessage;
        loginError.style.display = 'block';
    } else {
        console.log('No error message, hiding error div');
        loginError.style.display = 'none';
    }
}

// Handle login
async function handleLogin() {
    const loginLoading = document.getElementById('login-loading');
    const loginError = document.getElementById('login-error');
    
    try {
        console.log('Starting Google sign-in...');
        loginLoading.style.display = 'block';
        loginError.style.display = 'none';
        
        await signInWithGoogle();
        console.log('Google sign-in successful, waiting for auth state change...');
        // Auth state change will be handled by onAuthStateChange listener
        // Loading will be hidden when login screen is hidden in showAuthenticatedUI()
        // or when showLoginUI is called with an error
    } catch (error) {
        console.error('Login error:', error);
        loginLoading.style.display = 'none';
        let errorMessage = 'Failed to sign in. Please try again.';
        if (error.code === 'auth/popup-blocked') {
            errorMessage = 'Popup was blocked. Please allow popups for this site and try again.';
        } else if (error.code === 'auth/popup-closed-by-user') {
            errorMessage = 'Sign-in was cancelled. Please try again.';
        } else if (error.code === 'auth/network-request-failed') {
            errorMessage = 'Network error. Please check your internet connection and try again.';
        }
        loginError.textContent = errorMessage;
        loginError.style.display = 'block';
    }
}

// Handle logout
async function handleLogout() {
    try {
        if (userDataUnsubscribe) {
            userDataUnsubscribe();
            userDataUnsubscribe = null;
        }
        
        await signOut();
        // Auth state change will be handled by onAuthStateChange listener
    } catch (error) {
        console.error('Logout error:', error);
        showError('Failed to sign out. Please try again.');
    }
}

// Show error message
function showError(message) {
    const loginError = document.getElementById('login-error');
    loginError.textContent = message;
    loginError.style.display = 'block';
}

// Save Progress (Firestore)
async function saveProgress() {
    if (!isUserAuthenticated || !currentUserId) {
        console.warn('Cannot save progress: user not authenticated');
        return;
    }
    
    try {
        await saveUserProgress(currentUserId, testResults, failedQuestions);
    } catch (error) {
        console.error('Error saving progress:', error);
        // Don't show error to user, just log it (offline persistence will handle it)
    }
}

// Load Progress (Firestore) - Called on login
async function loadProgress() {
    if (!isUserAuthenticated || !currentUserId) {
        return;
    }
    
    try {
        const data = await loadUserProgress(currentUserId);
        testResults = data.testResults || [];
        failedQuestions = data.failedQuestions || [];
    } catch (error) {
        console.error('Error loading progress:', error);
        throw error;
    }
}

// Open PDF in new tab
function openPDF() {
    // Use encodeURIComponent to handle spaces in filename
    const pdfPath = encodeURI('./Life in the UK- A guide for new residents.pdf');
    window.open(pdfPath, '_blank');
}

// Practice Mode Functions
function startPractice() {
    const questionCountInput = document.getElementById('question-count');
    const questionCount = parseInt(questionCountInput.value) || 50;
    
    if (questionCount < 1 || questionCount > 500) {
        alert('Please enter a number between 1 and 500');
        return;
    }
    
    // Generate random questions
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const questionsToUse = shuffled.slice(0, Math.min(questionCount, questions.length));
    
    startPracticeWithQuestions(questionsToUse);
}

function startPracticeWithQuestions(questionsToUse) {
    currentPractice = {
        questions: questionsToUse,
        answers: [],
        startTime: Date.now()
    };
    
    practiceQuestionIndex = 0;
    
    // Show practice interface
    document.getElementById('practice-start').style.display = 'none';
    document.getElementById('practice-active').style.display = 'block';
    document.getElementById('practice-results').style.display = 'none';
    
    displayPracticeQuestion();
}

function displayPracticeQuestion() {
    const question = currentPractice.questions[practiceQuestionIndex];
    const questionNum = practiceQuestionIndex + 1;
    const totalQuestions = currentPractice.questions.length;
    
    // Update progress
    document.getElementById('practice-current-num').textContent = questionNum;
    document.getElementById('practice-total').textContent = totalQuestions;
    const progress = (questionNum / totalQuestions) * 100;
    document.getElementById('practice-progress-fill').style.width = progress + '%';
    
    // Display question
    document.getElementById('practice-question-text').textContent = question.question;
    
    // Display options
    const optionsContainer = document.getElementById('practice-answer-options');
    optionsContainer.innerHTML = '';
    
    // Check if this question was already answered
    const existingAnswer = currentPractice.answers[practiceQuestionIndex];
    const isAnswered = existingAnswer !== undefined;
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'answer-option';
        optionDiv.textContent = option;
        
        // If already answered, show the previous answer state
        if (isAnswered) {
            if (index === existingAnswer.selected) {
                optionDiv.classList.add('selected');
            }
            if (index === question.correct) {
                optionDiv.classList.add('correct');
            } else if (index === existingAnswer.selected && !existingAnswer.correct) {
                optionDiv.classList.add('incorrect');
            }
            optionDiv.style.pointerEvents = 'none'; // Disable clicking
        } else {
            optionDiv.addEventListener('click', () => selectPracticeAnswer(index));
        }
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // Show/hide previous button
    const prevBtn = document.getElementById('practice-prev-btn');
    if (practiceQuestionIndex > 0) {
        prevBtn.style.display = 'block';
    } else {
        prevBtn.style.display = 'none';
    }
    
    // Hide feedback and reset next button
    document.getElementById('practice-question-feedback').style.display = 'none';
    const nextBtn = document.getElementById('practice-next-btn');
    
    // If already answered, show feedback and next button
    if (isAnswered) {
        showFeedback(question, existingAnswer.correct, true);
        if (practiceQuestionIndex < totalQuestions - 1) {
            nextBtn.style.display = 'block';
        } else {
            nextBtn.textContent = 'Finish Practice';
            nextBtn.onclick = finishPractice;
            nextBtn.style.display = 'block';
        }
    } else {
        nextBtn.style.display = 'none';
        nextBtn.textContent = 'Next Question';
        nextBtn.onclick = nextPracticeQuestion;
    }
}

function selectPracticeAnswer(selectedIndex) {
    const question = currentPractice.questions[practiceQuestionIndex];
    const options = document.querySelectorAll('#practice-answer-options .answer-option');
    
    // Disable all options
    options.forEach(opt => opt.style.pointerEvents = 'none');
    
    // Mark selected answer
    options[selectedIndex].classList.add('selected');
    
    // Check if correct
    const isCorrect = selectedIndex === question.correct;
    
    // Mark correct answer
    options[question.correct].classList.add('correct');
    
    // Update failed questions list based on answer
    const failedQIndex = failedQuestions.findIndex(fq => fq.id === question.id);
    
    if (isCorrect) {
        // If answered correctly, remove from failed questions list
        if (failedQIndex !== -1) {
            failedQuestions.splice(failedQIndex, 1);
        }
    } else {
        // If answered incorrectly, add or update in failed questions list
        options[selectedIndex].classList.add('incorrect');
        if (failedQIndex === -1) {
            // Not in list, add it
            failedQuestions.push({
                ...question,
                timesFailed: 1,
                lastFailed: Date.now()
            });
        } else {
            // Already in list, update it
            const failedQ = failedQuestions[failedQIndex];
            failedQ.timesFailed++;
            failedQ.lastFailed = Date.now();
        }
    }
    
    // Store answer
    currentPractice.answers[practiceQuestionIndex] = {
        questionId: question.id,
        selected: selectedIndex,
        correct: isCorrect
    };
    
    // Show feedback
    showFeedback(question, isCorrect, true);
    
    // Show next button
    const totalQuestions = currentPractice.questions.length;
    if (practiceQuestionIndex < totalQuestions - 1) {
        document.getElementById('practice-next-btn').style.display = 'block';
    } else {
        // Last question - show finish button
        const nextBtn = document.getElementById('practice-next-btn');
        nextBtn.textContent = 'Finish Practice';
        nextBtn.onclick = finishPractice;
        nextBtn.style.display = 'block';
    }
    
    // Save progress and update failed questions display if on progress page
    saveProgress();
    if (document.getElementById('progress').classList.contains('active')) {
        displayFailedQuestions();
    }
}

function previousPracticeQuestion() {
    if (practiceQuestionIndex > 0) {
        practiceQuestionIndex--;
        displayPracticeQuestion();
    }
}

function nextPracticeQuestion() {
    practiceQuestionIndex++;
    if (practiceQuestionIndex < currentPractice.questions.length) {
        displayPracticeQuestion();
    } else {
        finishPractice();
    }
}

function finishPractice() {
    const totalQuestions = currentPractice.questions.length;
    const correctCount = currentPractice.answers.filter(a => a.correct).length;
    const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    
    // Display results
    document.getElementById('practice-active').style.display = 'none';
    document.getElementById('practice-results').style.display = 'block';
    
    document.getElementById('practice-final-score').textContent = score;
    document.getElementById('practice-correct-count').textContent = correctCount;
    document.getElementById('practice-incorrect-count').textContent = totalQuestions - correctCount;
    document.getElementById('practice-total-answered').textContent = totalQuestions;
    
    // Update failed questions display if on progress page
    if (document.getElementById('progress').classList.contains('active')) {
        displayFailedQuestions();
    }
    
    saveProgress();
}

