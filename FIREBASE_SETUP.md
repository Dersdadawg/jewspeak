# Firebase Setup Guide

To enable permanent storage for your edits, you need to set up a Firebase project and configure it.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard (you can disable Google Analytics if you prefer)

## Step 2: Create a Firestore Database

1. In your Firebase project, go to **Firestore Database** in the left sidebar
2. Click **Create database**
3. Choose **Start in test mode** (for now - you can secure it later)
4. Select a location closest to your users
5. Click **Enable**

## Step 3: Get Your Firebase Config

1. In Firebase Console, click the gear icon ⚙️ next to "Project Overview"
2. Select **Project settings**
3. Scroll down to **Your apps** section
4. Click the web icon `</>` to add a web app
5. Register your app (name it anything, e.g., "1984 Hasbara")
6. Copy the `firebaseConfig` object

## Step 4: Configure Your App

1. Open `src/config/firebase.js`
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

## Step 5: Secure Your Firestore (Optional but Recommended)

For production, you should secure your Firestore:

1. Go to **Firestore Database** > **Rules**
2. Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to all content
    match /content/{document=**} {
      allow read: if true;
      allow write: if request.auth != null; // Only authenticated users can write
    }
  }
}
```

**For testing without authentication**, you can temporarily use:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /content/{document=**} {
      allow read, write: if true;
    }
  }
}
```

⚠️ **Warning**: The open rules above allow anyone to read/write. Only use this for testing!

## Step 6: Test It

1. Start your dev server: `npm run dev`
2. Click the "✏️ Edit" button
3. Edit some text and save
4. Check Firebase Console > Firestore Database to see your content saved
5. Refresh the page - your edits should persist!

## Troubleshooting

- **"Firebase config not found"**: Make sure you've added your Firebase config to `src/config/firebase.js`
- **"Permission denied"**: Check your Firestore security rules
- **Changes not saving**: Check browser console for errors

## Notes

- Content is stored in Firestore under the `content` collection
- Each editable text has a unique `storageKey` that maps to a Firestore document
- The system falls back to localStorage if Firestore is unavailable (for offline support)

