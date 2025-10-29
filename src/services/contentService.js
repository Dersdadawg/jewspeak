import { doc, setDoc, getDoc, collection, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';

/**
 * Check if Firebase is configured
 */
function isFirebaseAvailable() {
  return db !== null;
}

/**
 * Save content to Firestore
 * @param {string} storageKey - Unique key for the content
 * @param {string} content - The content to save
 */
export async function saveContent(storageKey, content) {
  if (!isFirebaseAvailable()) {
    // Fallback to localStorage if Firestore is not configured
    localStorage.setItem(storageKey, content);
    return true;
  }

  try {
    await setDoc(doc(db, 'content', storageKey), {
      value: content,
      updatedAt: new Date().toISOString()
    });
    // Also save to localStorage as backup
    localStorage.setItem(storageKey, content);
    return true;
  } catch (error) {
    console.error('Error saving content to Firestore:', error);
    // Fallback to localStorage if Firestore fails
    localStorage.setItem(storageKey, content);
    return false;
  }
}

/**
 * Load content from Firestore
 * @param {string} storageKey - Unique key for the content
 * @returns {Promise<string|null>} - The saved content or null if not found
 */
export async function loadContent(storageKey) {
  if (!isFirebaseAvailable()) {
    // Fallback to localStorage if Firestore is not configured
    return localStorage.getItem(storageKey);
  }

  try {
    const docRef = doc(db, 'content', storageKey);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const value = docSnap.data().value;
      // Also save to localStorage as backup
      if (value) {
        localStorage.setItem(storageKey, value);
      }
      return value;
    }
    
    // Fallback to localStorage if not in Firestore
    return localStorage.getItem(storageKey);
  } catch (error) {
    console.error('Error loading content from Firestore:', error);
    // Fallback to localStorage if Firestore fails
    return localStorage.getItem(storageKey);
  }
}

/**
 * Subscribe to real-time updates for all content
 * @param {function} callback - Function called with content object whenever content changes
 * @returns {function} - Unsubscribe function
 */
export function subscribeToContentUpdates(callback) {
  if (!isFirebaseAvailable()) {
    // If Firebase not available, no real-time updates
    return () => {};
  }

  try {
    const contentCollection = collection(db, 'content');
    
    // Set up real-time listener
    const unsubscribe = onSnapshot(contentCollection, (snapshot) => {
      const content = {};
      snapshot.forEach((doc) => {
        content[doc.id] = doc.data().value || null;
      });
      callback(content);
    }, (error) => {
      console.error('Error listening to content updates:', error);
    });

    return unsubscribe;
  } catch (error) {
    console.error('Error setting up content listener:', error);
    return () => {};
  }
}

