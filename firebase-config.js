// Firebase Configuration
// TODO: Replace with your Firebase project configuration
// Get this from: Firebase Console → Project Settings → Your apps → Web app

const firebaseConfig = {
  apiKey: "AIzaSyADfSOuQk7jblnL11I-PV5hRTyghuWhmwc",
  authDomain: "lituk-db.firebaseapp.com",
  projectId: "lituk-db",
  storageBucket: "lituk-db.firebasestorage.app",
  messagingSenderId: "1059650682484",
  appId: "1:1059650682484:web:e3829e43d0fed634d59b21"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore with offline persistence
const db = firebase.firestore();
db.enablePersistence()
  .catch((err) => {
    if (err.code == 'failed-precondition') {
      console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
    } else if (err.code == 'unimplemented') {
      console.warn('The current browser does not support all of the features required for persistence');
    }
  });

// Initialize Auth
const auth = firebase.auth();

