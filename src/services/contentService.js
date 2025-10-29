import { doc, setDoc, getDoc } from 'firebase/firestore';
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
 * Load all content entries from Firestore
 * @returns {Promise<Object>} - Object with all content entries
 */
export async function loadAllContent() {
  try {
    // We'll load individual docs as needed, but this could be optimized
    // to load all at once if needed
    const keys = Object.keys(localStorage).filter(key => key.startsWith('landing-') || key.startsWith('editMode'));
    const content = {};
    
    for (const key of keys) {
      const value = await loadContent(key);
      if (value) {
        content[key] = value;
      }
    }
    
    return content;
  } catch (error) {
    console.error('Error loading all content:', error);
    return {};
  }
}

