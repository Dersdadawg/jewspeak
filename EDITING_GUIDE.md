# 📝 Guide: Editing Text in Source Files

## How EditableText Works

Each `EditableText` component has:
- **`value`** - The default/initial text (what you edit in source files)
- **`storageKey`** - A unique identifier for saving edits

## ⚠️ Important: Two Ways to Edit Text

### 1. **Edit in Source Files** (What you're asking about)
- Edit the `value` prop in the `.jsx` files
- This sets the **default/fallback** text
- Changes only appear if:
  - No saved version exists in Firestore/localStorage
  - OR someone clears their browser storage

### 2. **Edit via UI** (In edit mode)
- Changes are saved to Firestore with the `storageKey`
- Saved edits **override** the source file `value`
- This is why your source file changes might not show up!

## ✅ How to Edit Text Safely

### Step 1: Find the Text You Want to Edit

All editable text is in the page files:
- `src/pages/Landing.jsx` - Homepage
- `src/pages/AboutPage.jsx` - About page  
- `src/pages/LanguagePage.jsx` - Language examples
- `src/pages/MediaPage.jsx` - Media examples
- `src/pages/AnalysisPage.jsx` - Analysis page
- `src/pages/InteractivePage.jsx` - Quiz page

### Step 2: Locate the EditableText Component

Look for lines like this:
```jsx
<EditableText
  value="Your text here"
  storageKey="unique-key-name"
  className="..."
  tag="span"
/>
```

### Step 3: Edit the `value` Prop

Change the text inside the quotes:
```jsx
// BEFORE
<EditableText
  value="About This Project"
  storageKey="about-title"
/>

// AFTER
<EditableText
  value="About This Amazing Project"
  storageKey="about-title"
/>
```

### Step 4: Clear Saved Edits (If Needed)

If you've edited text via the UI before, you need to clear the saved version:

**Option A: Clear in Browser Console**
1. Open your browser's developer console (F12)
2. Run: `localStorage.clear()`
3. Refresh the page

**Option B: Clear Specific Key**
```javascript
// In browser console, clear a specific storageKey:
localStorage.removeItem('about-title');
```

**Option C: Clear Firestore Data** (if using Firebase)
- Go to Firebase Console → Firestore
- Delete documents in the `content` collection

## 📋 Example: Editing AboutPage.jsx

**Current code (line 47):**
```jsx
<EditableText
  value="About This Project"
  storageKey="about-title"
  className="text-white"
  tag="span"
/>
```

**To change the title:**
```jsx
<EditableText
  value="About This Educational Project"
  storageKey="about-title"  // ← DON'T CHANGE THIS!
  className="text-white"
  tag="span"
/>
```

**What NOT to change:**
- ❌ `storageKey` - This must stay the same!
- ❌ `className` - Unless you want to change styling
- ❌ `tag` - Unless you want to change HTML element

**What TO change:**
- ✅ `value` - This is the text content

## 🎯 Best Practices

1. **Keep `storageKey` values consistent** - They're used to sync across pages
2. **Use quotes correctly** - Simple strings use `"text"`, but if you need special characters, use template literals:
   ```jsx
   value={`Text with "quotes" and 'apostrophes'`}
   ```
3. **Preserve formatting** - Keep line breaks and spacing as you want them displayed
4. **Test after editing** - Make sure your changes appear correctly

## 🔄 Making Source Changes Override Saved Edits

If you want your source file changes to always be the default:

1. **Clear all saved content** (see Step 4 above)
2. **OR** update the source file AND manually clear the specific `storageKey` in localStorage/Firestore

## 📍 Quick Reference: Finding Text by Page

### Landing Page (`src/pages/Landing.jsx`)
- Title: lines 45, 52
- Quote: line 61
- Paragraphs: lines 72, 87, 95
- Section titles: line 128 (dynamic)
- Section descriptions: line 136 (dynamic)

### About Page (`src/pages/AboutPage.jsx`)
- Title: line 47
- Purpose title: line 58
- Purpose paragraphs: lines 67, 75
- Hasbara title: line 126
- Creator title: line 217
- Creator text: line 225

### Other Pages
- Check the grep results above for exact line numbers of all EditableText components

## 🚨 Troubleshooting

**Problem:** Changed source file but text didn't update
**Solution:** Clear the saved version with that `storageKey`

**Problem:** Text keeps reverting
**Solution:** Someone is editing via the UI - check Firestore for saved versions

**Problem:** Want to reset to source file defaults
**Solution:** Clear all `storageKey` entries from localStorage/Firestore

---

**Tip:** After editing source files, you can run `npm run dev` to see your changes immediately.


