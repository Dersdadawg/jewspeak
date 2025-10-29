import { createContext, useContext, useState, useEffect } from 'react';

const EditModeContext = createContext();

export function EditModeProvider({ children }) {
  const [isEditMode, setIsEditMode] = useState(false);

  // Load edit mode state from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('editMode');
    if (saved === 'true') {
      setIsEditMode(true);
    }
  }, []);

  // Save edit mode state to localStorage
  useEffect(() => {
    localStorage.setItem('editMode', isEditMode.toString());
  }, [isEditMode]);

  const toggleEditMode = () => {
    setIsEditMode(prev => !prev);
  };

  return (
    <EditModeContext.Provider value={{ isEditMode, toggleEditMode }}>
      {children}
    </EditModeContext.Provider>
  );
}

export function useEditMode() {
  const context = useContext(EditModeContext);
  if (!context) {
    throw new Error('useEditMode must be used within EditModeProvider');
  }
  return context;
}

