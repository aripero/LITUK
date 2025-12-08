// Firebase Database Operations

// Save user progress (test results and failed questions)
async function saveUserProgress(userId, testResults, failedQuestions) {
  try {
    const userRef = db.collection('users').doc(userId);
    
    await userRef.set({
      testResults: testResults,
      failedQuestions: failedQuestions,
      lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    
    return true;
  } catch (error) {
    console.error('Error saving user progress:', error);
    throw error;
  }
}

// Load user progress
async function loadUserProgress(userId) {
  try {
    const userRef = db.collection('users').doc(userId);
    const doc = await userRef.get();
    
    if (!doc.exists) {
      // User doesn't exist yet, return empty data
      return {
        testResults: [],
        failedQuestions: []
      };
    }
    
    const data = doc.data();
    return {
      testResults: data.testResults || [],
      failedQuestions: data.failedQuestions || []
    };
  } catch (error) {
    console.error('Error loading user progress:', error);
    throw error;
  }
}

// Save a single test result
async function saveTestResult(userId, testResult) {
  try {
    const userRef = db.collection('users').doc(userId);
    const userDoc = await userRef.get();
    
    let testResults = [];
    if (userDoc.exists) {
      testResults = userDoc.data().testResults || [];
    }
    
    testResults.push(testResult);
    
    await userRef.set({
      testResults: testResults,
      lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    
    return true;
  } catch (error) {
    console.error('Error saving test result:', error);
    throw error;
  }
}

// Update failed questions
async function updateFailedQuestions(userId, failedQuestions) {
  try {
    const userRef = db.collection('users').doc(userId);
    
    await userRef.set({
      failedQuestions: failedQuestions,
      lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    
    return true;
  } catch (error) {
    console.error('Error updating failed questions:', error);
    throw error;
  }
}

// Save or update user profile
async function saveUserProfile(userId, profileData) {
  try {
    const userRef = db.collection('users').doc(userId);
    
    await userRef.set({
      profile: {
        email: profileData.email,
        displayName: profileData.displayName,
        photoURL: profileData.photoURL,
        createdAt: profileData.createdAt || firebase.firestore.FieldValue.serverTimestamp(),
        lastLogin: firebase.firestore.FieldValue.serverTimestamp()
      }
    }, { merge: true });
    
    return true;
  } catch (error) {
    console.error('Error saving user profile:', error);
    throw error;
  }
}

// Real-time listener for user data changes (optional, for multi-device sync)
function subscribeToUserData(userId, callback) {
  const userRef = db.collection('users').doc(userId);
  
  return userRef.onSnapshot((doc) => {
    if (doc.exists) {
      const data = doc.data();
      callback({
        testResults: data.testResults || [],
        failedQuestions: data.failedQuestions || []
      });
    } else {
      callback({
        testResults: [],
        failedQuestions: []
      });
    }
  }, (error) => {
    console.error('Error listening to user data:', error);
  });
}

