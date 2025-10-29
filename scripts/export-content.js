// Browser script to export all saved EditableText values
// Run this in your browser console (F12 -> Console tab) while on your site

(function exportSavedContent() {
  const content = {};
  
  // Get all localStorage keys that are content-related
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    // Skip system keys
    if (key && !key.startsWith('hasbaraQuizProgress') && !key.startsWith('editMode')) {
      const value = localStorage.getItem(key);
      if (value) {
        content[key] = value;
      }
    }
  }
  
  // Create a downloadable JSON file
  const dataStr = JSON.stringify(content, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'saved-content.json';
  link.click();
  
  console.log('✅ Exported saved content!');
  console.log('📋 Copy this JSON:', content);
  
  return content;
})();


