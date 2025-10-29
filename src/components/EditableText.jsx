import { useState, useEffect, useRef } from 'react';
import { useEditMode } from '../contexts/EditModeContext';
import { saveContent, loadContent } from '../services/contentService';

export default function EditableText({ 
  value: initialValue, 
  onSave, 
  tag: Tag = 'span',
  className = '',
  placeholder = 'Click to edit...',
  storageKey,
  ...props 
}) {
  const { isEditMode } = useEditMode();
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const textareaRef = useRef(null);

  // Load saved value from Firestore if storageKey is provided
  useEffect(() => {
    const loadSavedValue = async () => {
      if (storageKey) {
        setIsLoading(true);
        try {
          const saved = await loadContent(storageKey);
          if (saved) {
            setValue(saved);
            setTempValue(saved);
          } else {
            setValue(initialValue);
            setTempValue(initialValue);
          }
        } catch (error) {
          console.error('Error loading content:', error);
          setValue(initialValue);
          setTempValue(initialValue);
        } finally {
          setIsLoading(false);
        }
      } else {
        setValue(initialValue);
        setTempValue(initialValue);
      }
    };
    
    loadSavedValue();
  }, [initialValue, storageKey]);

  // Auto-resize textarea
  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [isEditing, tempValue]);

  const handleClick = () => {
    if (isEditMode && !isEditing) {
      setIsEditing(true);
      setTempValue(value);
    }
  };

  const handleSave = async () => {
    setValue(tempValue);
    setIsEditing(false);
    
    // Save to Firestore if storageKey is provided
    if (storageKey) {
      try {
        await saveContent(storageKey, tempValue);
      } catch (error) {
        console.error('Error saving content:', error);
      }
    }
    
    // Call parent's onSave if provided
    if (onSave) {
      onSave(tempValue);
    }
  };

  const handleCancel = () => {
    setTempValue(value);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.metaKey) { // Cmd+Enter to save
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (!isEditMode) {
    return <Tag className={className} {...props}>{isLoading ? 'Loading...' : value}</Tag>;
  }

  if (isEditing) {
    return (
      <div className={`inline-block w-full ${className}`}>
        <textarea
          ref={textareaRef}
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          className="w-full bg-yellow-900/20 border-2 border-yellow-500 rounded px-2 py-1 text-white resize-none focus:outline-none focus:border-yellow-400"
          placeholder={placeholder}
          autoFocus
        />
        <div className="text-xs text-gray-400 mt-1">
          Press Cmd+Enter to save, Escape to cancel
        </div>
      </div>
    );
  }

  return (
    <Tag
      className={`cursor-pointer hover:bg-yellow-900/20 hover:outline hover:outline-2 hover:outline-yellow-500 rounded px-1 transition-all ${className}`}
      onClick={handleClick}
      title="Click to edit"
      {...props}
    >
      {value || <span className="text-gray-500 italic">{placeholder}</span>}
    </Tag>
  );
}

