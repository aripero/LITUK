// Firebase Authentication Logic
// Note: db and auth are defined in firebase-config.js

let currentUser = null;
let authStateListeners = [];

// Listen for auth state changes
let isCheckingWhitelist = false; // Prevent multiple simultaneous checks

auth.onAuthStateChanged(async (user) => {
  // Prevent re-entry while processing
  if (isCheckingWhitelist && user) {
    console.log('Already checking whitelist, skipping...');
    return;
  }
  
  currentUser = user;
  
  // Always hide loading spinner when auth state changes
  const loginLoading = document.getElementById('login-loading');
  if (loginLoading) {
    loginLoading.style.display = 'none';
  }
  
  if (user) {
    // User is signed in
    console.log('User signed in:', user.email);
    isCheckingWhitelist = true;
    
    try {
      const isAuthorized = await checkEmailWhitelist(user.email);
      
      if (isAuthorized) {
        // User is authorized, notify listeners
        console.log('User is authorized, proceeding...');
        isCheckingWhitelist = false;
        notifyAuthStateChange(user, true);
      } else {
        // User is not authorized, sign them out
        console.log('User not authorized:', user.email);
        const errorMsg = sessionStorage.getItem('whitelistError') || 'Your email is not authorized to access this app.';
        await signOut();
        isCheckingWhitelist = false;
        // The signOut will trigger onAuthStateChanged again with user=null, which will show the error
      }
    } catch (error) {
      console.error('Error checking whitelist:', error);
      const errorMsg = sessionStorage.getItem('whitelistError') || 'Error verifying authorization. Please try again.';
      await signOut();
      isCheckingWhitelist = false;
      // The signOut will trigger onAuthStateChanged again with user=null, which will show the error
    }
  } else {
    // User is signed out
    console.log('User signed out');
    isCheckingWhitelist = false;
    
    // Check if we have a pending error message (from whitelist check)
    const lastWhitelistError = sessionStorage.getItem('whitelistError');
    if (lastWhitelistError) {
      sessionStorage.removeItem('whitelistError');
      notifyAuthStateChange(null, false, lastWhitelistError);
    } else {
      notifyAuthStateChange(null, false);
    }
  }
});

// Check if email is in whitelist
async function checkEmailWhitelist(email) {
  try {
    console.log('Checking whitelist for email:', email);
    const whitelistRef = db.collection('config').doc('authorizedUsers');
    
    // Add timeout to prevent hanging
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Whitelist check timeout')), 10000)
    );
    
    const doc = await Promise.race([whitelistRef.get(), timeoutPromise]);
    
    if (!doc.exists) {
      const errorMsg = 'Whitelist document does not exist in Firestore. Please create it at config/authorizedUsers';
      console.warn(errorMsg);
      console.warn('Document structure should be: { emails: ["email1@example.com", "email2@example.com"] }');
      sessionStorage.setItem('whitelistError', 'Whitelist not configured. Please contact administrator.');
      return false;
    }
    
    const data = doc.data();
    const authorizedEmails = data.emails || [];
    
    console.log('Authorized emails:', authorizedEmails);
    console.log('Checking if', email.toLowerCase(), 'is in whitelist');
    
    const isAuthorized = authorizedEmails.includes(email.toLowerCase());
    console.log('Authorization result:', isAuthorized);
    
    if (!isAuthorized) {
      sessionStorage.setItem('whitelistError', 'Your email is not authorized to access this app.');
    }
    
    return isAuthorized;
  } catch (error) {
    console.error('Error checking whitelist:', error);
    console.error('Error details:', error.message, error.code);
    sessionStorage.setItem('whitelistError', 'Error verifying authorization. Please try again.');
    throw error;
  }
}

// Sign in with Google
async function signInWithGoogle() {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    
    const result = await auth.signInWithPopup(provider);
    return result.user;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
}

// Sign out
async function signOut() {
  try {
    // Clear localStorage
    localStorage.removeItem('lifeInUKProgress');
    
    await auth.signOut();
    return true;
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
}

// Get current user
function getCurrentUser() {
  return currentUser;
}

// Check if user is authenticated
function isAuthenticated() {
  return currentUser !== null;
}

// Subscribe to auth state changes
function onAuthStateChange(callback) {
  authStateListeners.push(callback);
  
  // Immediately call with current state
  if (currentUser) {
    callback(currentUser, true);
  } else {
    callback(null, false);
  }
  
  // Return unsubscribe function
  return () => {
    authStateListeners = authStateListeners.filter(cb => cb !== callback);
  };
}

// Notify all listeners of auth state change
function notifyAuthStateChange(user, isAuthorized, errorMessage = null) {
  authStateListeners.forEach(callback => {
    callback(user, isAuthorized, errorMessage);
  });
}

