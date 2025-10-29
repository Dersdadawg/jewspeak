import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { loadContent, saveContent, subscribeToContentUpdates } from '../services/contentService';

const ContentContext = createContext();

export function ContentProvider({ children }) {
  const [content, setContent] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Load all saved content from Firestore/localStorage on mount
  useEffect(() => {
    const loadAllSavedContent = async () => {
      setIsLoading(true);
      try {
        // Start with localStorage as a quick initial load
        const loadedContent = {};
        const allKeys = [];
        
        // Check localStorage for any saved content
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          // Skip system keys, but include content keys
          if (key && !key.startsWith('hasbaraQuizProgress') && !key.startsWith('editMode')) {
            allKeys.push(key);
            // Load from localStorage first for instant display
            const localValue = localStorage.getItem(key);
            if (localValue) {
              loadedContent[key] = localValue;
            }
          }
        }

        // Firestore real-time listener will update this with the latest values
        // Setting initial content from localStorage provides instant UI
        setContent(loadedContent);
      } catch (error) {
        console.error('Error loading all content:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadAllSavedContent();
  }, []);

  // Subscribe to real-time Firestore updates
  useEffect(() => {
    const unsubscribe = subscribeToContentUpdates((updatedContent) => {
      // Merge Firestore updates with local content
      setContent(prev => {
        const merged = { ...prev, ...updatedContent };
        // Also update localStorage with Firestore values
        Object.keys(updatedContent).forEach(key => {
          if (updatedContent[key]) {
            localStorage.setItem(key, updatedContent[key]);
          }
        });
        return merged;
      });
    });

    // Cleanup subscription on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  // Get content for a specific key
  const getContent = useCallback((storageKey) => {
    return content[storageKey] || null;
  }, [content]);

  // Update content and save to Firestore/localStorage
  const updateContent = useCallback(async (storageKey, value) => {
    // Update global state immediately for instant UI update
    setContent(prev => ({
      ...prev,
      [storageKey]: value
    }));

    // Save to Firestore/localStorage in the background
    try {
      await saveContent(storageKey, value);
    } catch (error) {
      console.error('Error saving content:', error);
    }
  }, []);

  // Load content for a specific key (if not already in state)
  const loadContentForKey = useCallback(async (storageKey) => {
    if (content[storageKey]) {
      return content[storageKey];
    }

    try {
      const value = await loadContent(storageKey);
      if (value) {
        setContent(prev => ({
          ...prev,
          [storageKey]: value
        }));
        return value;
      }
    } catch (error) {
      console.error('Error loading content:', error);
    }
    return null;
  }, [content]);

  const value = {
    content,
    getContent,
    updateContent,
    loadContentForKey,
    isLoading
  };

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within ContentProvider');
  }
  return context;
}

