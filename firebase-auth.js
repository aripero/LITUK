// Firebase Authentication Logic
// Note: db and auth are defined in firebase-config.js

let currentUser = null;
let authStateListeners = [];

// Listen for auth state changes
auth.onAuthStateChanged((user) => {
  currentUser = user;
  
  if (user) {
    // User is signed in
    console.log('User signed in:', user.email);
    checkEmailWhitelist(user.email)
      .then((isAuthorized) => {
        if (isAuthorized) {
          // User is authorized, notify listeners
          notifyAuthStateChange(user, true);
        } else {
          // User is not authorized, sign them out
          console.log('User not authorized:', user.email);
          signOut();
          notifyAuthStateChange(null, false, 'Your email is not authorized to access this app.');
        }
      })
      .catch((error) => {
        console.error('Error checking whitelist:', error);
        signOut();
        notifyAuthStateChange(null, false, 'Error verifying authorization. Please try again.');
      });
  } else {
    // User is signed out
    console.log('User signed out');
    notifyAuthStateChange(null, false);
  }
});

// Check if email is in whitelist
async function checkEmailWhitelist(email) {
  try {
    console.log('Checking whitelist for email:', email);
    const whitelistRef = db.collection('config').doc('authorizedUsers');
    const doc = await whitelistRef.get();
    
    if (!doc.exists) {
      console.warn('Whitelist document does not exist in Firestore. Please create it at config/authorizedUsers');
      console.warn('Document structure should be: { emails: ["email1@example.com", "email2@example.com"] }');
      return false;
    }
    
    const data = doc.data();
    const authorizedEmails = data.emails || [];
    
    console.log('Authorized emails:', authorizedEmails);
    console.log('Checking if', email.toLowerCase(), 'is in whitelist');
    
    const isAuthorized = authorizedEmails.includes(email.toLowerCase());
    console.log('Authorization result:', isAuthorized);
    
    return isAuthorized;
  } catch (error) {
    console.error('Error checking whitelist:', error);
    console.error('Error details:', error.message, error.code);
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

