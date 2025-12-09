// Firebase Authentication Logic
// Note: db and auth are defined in firebase-config.js

let currentUser = null;
let authStateListeners = [];

// Listen for auth state changes
auth.onAuthStateChanged((user) => {
  currentUser = user;
  
  // Always hide loading spinner when auth state changes
  const loginLoading = document.getElementById('login-loading');
  if (loginLoading) {
    loginLoading.style.display = 'none';
  }
  
  if (user) {
    // User is signed in - allow access to anyone with Google account
    console.log('User signed in:', user.email);
    notifyAuthStateChange(user, true);
  } else {
    // User is signed out
    console.log('User signed out');
    notifyAuthStateChange(null, false);
  }
});

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

