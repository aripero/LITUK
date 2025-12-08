# Firebase Setup Guide

This guide will walk you through setting up Firebase for user authentication and data storage.

## Prerequisites

- A Google account (same one you'll use for Firebase)
- Access to Firebase Console: https://console.firebase.google.com

---

## Step 1: Create Firebase Project

1. Go to https://console.firebase.google.com
2. Click **"Add project"** or **"Create a project"**
3. Enter project name: `Life in the UK Test Prep` (or any name you prefer)
4. Click **"Continue"**
5. **Disable Google Analytics** (optional, not needed for this app) or enable if you want analytics
6. Click **"Create project"**
7. Wait for project creation (30-60 seconds)
8. Click **"Continue"**

---

## Step 2: Enable Authentication

1. In the Firebase Console, click **"Authentication"** in the left sidebar
2. Click **"Get started"** (if first time)
3. Click the **"Sign-in method"** tab
4. Click on **"Google"** provider
5. Toggle **"Enable"** to ON
6. Enter a **Project support email** (your email)
7. Click **"Save"**

---

## Step 3: Create Firestore Database

1. In the Firebase Console, click **"Firestore Database"** in the left sidebar
2. Click **"Create database"**
3. Select **"Start in test mode"** (we'll add security rules next)
4. Choose a **Cloud Firestore location** (choose closest to your users, e.g., `europe-west` or `us-central`)
5. Click **"Enable"**
6. Wait for database creation (30-60 seconds)

---

## Step 4: Set Up Security Rules

1. In Firestore Database, click the **"Rules"** tab
2. Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Whitelist configuration (read-only for all authenticated users)
    match /config/authorizedUsers {
      allow read: if request.auth != null;
      allow write: if false; // Only admins can write via console
    }
    
    // User data (users can only access their own data)
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      
      match /{document=**} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }
  }
}
```

3. Click **"Publish"**

---

## Step 5: Create Authorized Users Whitelist

1. In Firestore Database, click the **"Data"** tab
2. Click **"Start collection"**
3. Collection ID: `config`
4. Click **"Next"**
5. Document ID: `authorizedUsers`
6. Click **"Next"**
7. Add a field:
   - Field: `emails`
   - Type: `array`
   - Value: Click **"Add item"** and add email addresses (one per line):
     ```
     your-email@gmail.com
     family-member@example.com
     ```
8. Click **"Save"**

**Important:** Add all email addresses that should have access to the app. Email addresses are case-insensitive (automatically converted to lowercase).

---

## Step 6: Get Firebase Configuration

1. In Firebase Console, click the **gear icon** ⚙️ next to "Project Overview"
2. Click **"Project settings"**
3. Scroll down to **"Your apps"** section
4. Click the **"Web"** icon (`</>`)
5. Register app:
   - App nickname: `Life in the UK Web App`
   - (Don't check "Also set up Firebase Hosting")
   - Click **"Register app"**
6. Copy the `firebaseConfig` object that appears

---

## Step 7: Update firebase-config.js

1. Open `firebase-config.js` in your project
2. Replace the placeholder values with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

3. Save the file

---

## Step 8: Configure Authorized Domains (for GitHub Pages)

1. In Firebase Console → **Authentication** → **Settings** tab
2. Scroll to **"Authorized domains"**
3. Click **"Add domain"**
4. Add: `aripero.github.io`
5. Click **"Add"**

This allows Firebase authentication to work on your GitHub Pages domain.

---

## Step 9: Test the Setup

1. Open your app in a browser
2. You should see the login screen
3. Click **"Sign in with Google"**
4. Sign in with a Google account that's in your whitelist
5. You should be logged in and see the app
6. Try signing out and signing in with a non-whitelisted email
7. You should see an "Access Denied" message

---

## Managing Authorized Users

### Adding a New User

1. Go to Firebase Console → **Firestore Database** → **Data** tab
2. Navigate to `config` → `authorizedUsers` document
3. Click on the `emails` array field
4. Click **"Add item"**
5. Enter the new email address
6. Click **"Update"**

### Removing a User

1. Go to Firebase Console → **Firestore Database** → **Data** tab
2. Navigate to `config` → `authorizedUsers` document
3. Click on the email you want to remove in the `emails` array
4. Click the **trash icon** to delete
5. Click **"Update"**

---

## Troubleshooting

### "Access Denied" even with whitelisted email
- Check that the email in Firestore is exactly the same (case-insensitive)
- Make sure you saved the `authorizedUsers` document correctly
- Check browser console for errors

### Authentication popup blocked
- Allow popups for your domain
- Check browser settings

### "Firebase: Error (auth/popup-blocked)"
- Browser is blocking the popup
- Try clicking the login button again
- Check browser popup settings

### Data not syncing
- Check browser console for errors
- Verify Firestore security rules are published
- Check that user is authenticated (check Firebase Console → Authentication → Users)

---

## Firebase Free Tier Limits

The Firebase free tier (Spark plan) includes:
- **Authentication**: Unlimited
- **Firestore**: 
  - 50,000 reads/day
  - 20,000 writes/day
  - 20,000 deletes/day
  - 1 GB storage

This should be more than enough for personal/family use. If you exceed limits, Firebase will notify you.

---

## Security Notes

1. **Never commit `firebase-config.js` with real credentials to public repositories**
   - Consider using environment variables or keeping it private
   - For GitHub Pages, the config will be visible in the browser (this is normal and safe)
   - Firebase security rules protect your data

2. **Keep your whitelist secure**
   - Only add trusted email addresses
   - Regularly review who has access

3. **Monitor usage**
   - Check Firebase Console regularly for unusual activity
   - Review authentication logs in Firebase Console → Authentication → Users

---

## Next Steps

Once Firebase is set up:
1. Test login/logout functionality
2. Test data sync across devices
3. Add family members' emails to the whitelist
4. Deploy to GitHub Pages

Your app is now ready with user authentication! 🎉

