# User Authentication & Multi-User Support - Implementation Plan

## 📋 Overview

Add Google authentication and user-specific data storage to ensure each user's progress, test history, and failed questions are isolated and synchronized across devices.

---

## 🎯 Goals

1. **User Authentication**: Google OAuth login/logout
2. **User-Specific Data**: Each user's data stored separately
3. **Cross-Device Sync**: Access data from any device when logged in
4. **Backward Compatibility**: Handle users who aren't logged in (optional guest mode)
5. **Data Migration**: Preserve existing localStorage data for logged-in users

---

## 🏗️ Architecture

### Recommended Solution: **Firebase (Google Cloud)**

**Why Firebase?**
- ✅ Native Google OAuth integration (one-click setup)
- ✅ Real-time database (Firestore) for user data
- ✅ Free tier is generous (50K reads/day, 20K writes/day)
- ✅ No server management required
- ✅ Works seamlessly with static hosting (GitHub Pages)
- ✅ Built-in security rules for data access control
- ✅ Offline support with Firestore SDK

**Alternative Options:**
- Supabase (open-source Firebase alternative)
- Custom backend (Node.js/Express + MongoDB/PostgreSQL)
- Serverless functions (Vercel/Netlify Functions + database)

---

## 📦 Implementation Components

### 1. **Firebase Setup**

**Files to create:**
- `firebase-config.js` - Firebase initialization and configuration
- `firebase-auth.js` - Authentication logic (login, logout, user state)
- `firebase-db.js` - Database operations (save/load user data)

**Firebase Services Needed:**
- **Authentication**: Google OAuth provider
- **Firestore Database**: 
  - `config/authorizedUsers` - Collection of whitelisted email addresses
  - `users/{userId}/testResults` - Array of test results
  - `users/{userId}/failedQuestions` - Array of failed questions
  - `users/{userId}/profile` - User profile data (name, email, createdAt, lastLogin)

### 2. **Frontend Changes**

**Modified Files:**
- `index.html` - Add login/logout UI, user profile display
- `app.js` - Replace localStorage with Firebase calls, add auth state management
- `styles.css` - Add styles for login UI, user profile

**New UI Elements:**
- Login button/modal in header
- User profile display (avatar, name)
- Logout button
- Loading states during auth/data sync
- Error handling for offline/network issues

### 3. **Data Structure**

**Current localStorage structure:**
```javascript
{
  testResults: [...],
  failedQuestions: [...],
  lastUpdated: timestamp
}
```

**New Firestore structure:**
```
users/{userId}/
  ├── profile/
  │   ├── email: string
  │   ├── displayName: string
  │   ├── photoURL: string
  │   ├── createdAt: timestamp
  │   └── lastLogin: timestamp
  ├── testResults: array
  │   └── [{ testId, date, score, answers, ... }]
  └── failedQuestions: array
      └── [{ questionId, timesFailed, lastFailed, ... }]
```

---

## 🔄 Data Flow

### **Authentication Flow:**
1. User clicks "Sign in with Google"
2. Firebase handles OAuth redirect
3. User authorizes with Google
4. Firebase returns user object (uid, email, name, photo)
5. App stores auth state, loads user data from Firestore

### **Data Sync Flow:**
1. **On Login**: Load user data from Firestore → populate app state
2. **On Data Change**: Save to Firestore + update local state
3. **On Logout**: Clear local state, optionally keep cached data
4. **Offline**: Use Firestore offline persistence → sync when online

---

## 📝 Implementation Steps

### **Phase 1: Firebase Setup**
1. Create Firebase project at https://console.firebase.google.com
2. Enable Authentication → Google provider
3. Create Firestore database
4. Configure security rules (users can only read/write their own data)
5. Get Firebase config (API keys, project ID)
6. Add Firebase SDK to project

### **Phase 2: Authentication UI**
1. Add login/logout buttons to header
2. Create login modal/flow
3. Display user profile (avatar, name) when logged in
4. Handle auth state changes (login/logout)

### **Phase 3: Database Integration**
1. Create `firebase-db.js` with CRUD functions:
   - `saveUserProgress(userId, data)`
   - `loadUserProgress(userId)`
   - `saveTestResult(userId, testResult)`
   - `updateFailedQuestions(userId, questions)`
2. Replace `saveProgress()` and `loadProgress()` calls
3. Add real-time listeners for data updates

### **Phase 4: Email Whitelist Check**
1. After successful Google login, check user's email against whitelist
2. Query Firestore `config/authorizedUsers` collection
3. If email is whitelisted → proceed to load user data
4. If email is NOT whitelisted → show "Access Denied" message, sign out user
5. Clear localStorage on login (start fresh)

### **Phase 5: Offline Support**
1. Enable Firestore offline persistence
2. Handle offline/online state changes
3. Show sync status indicator
4. Queue writes when offline, sync when online

### **Phase 6: Testing & Polish**
1. Test login/logout flow
2. Test data sync across devices
3. Test offline functionality
4. Add error handling and user feedback
5. Update service worker if needed

---

## 🔒 Security Rules (Firestore)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only access their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      
      match /{document=**} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }
  }
}
```

---

## ✅ Decisions Made

### **1. Guest Mode**
- ❌ **No guest mode** - Users **must** login with Google to access the app

### **2. Email Whitelist**
- ✅ **Whitelist required** - After Google login, check if email is in authorized whitelist
- ✅ If email is whitelisted → allow access
- ✅ If email is NOT whitelisted → show "Access Denied" message, prevent app usage
- Whitelist stored in Firestore: `config/authorizedUsers` collection

### **3. Data Migration**
- ✅ **Option B: Start Fresh** - Clear localStorage on login, start with empty data
- No migration of existing localStorage data

### **4. Multiple Accounts**
- ✅ **Treat as new user** - Each Google account is a separate user
- Clear localStorage when switching accounts

### **5. Offline Behavior**
- ✅ **Fully offline** - Once logged in, app works completely offline
- Firestore offline persistence enabled
- Login requires internet, but after that, full offline support

### **6. User Management**
- ✅ **No admin UI needed** - Direct database access is sufficient
- Admin can manage whitelist directly in Firestore console

### **7. Privacy & Terms**
- ✅ **Not needed for now** - Can be added later if required

### **8. Firebase Account**
- ✅ User has Google account and database experience
- Will create Firebase project during setup

---

## 📊 Estimated Complexity

- **Setup Time**: 2-3 hours
- **Implementation Time**: 4-6 hours
- **Testing Time**: 1-2 hours
- **Total**: ~8-12 hours

---

## 🚀 Next Steps

Once you answer the questions above, I can:
1. Set up the Firebase project structure
2. Create the authentication flow
3. Implement the database integration
4. Add the UI components
5. Handle data migration
6. Test and deploy

---

## 📚 Resources

- Firebase Documentation: https://firebase.google.com/docs
- Firebase Auth: https://firebase.google.com/docs/auth
- Firestore: https://firebase.google.com/docs/firestore
- Firebase Free Tier: https://firebase.google.com/pricing

