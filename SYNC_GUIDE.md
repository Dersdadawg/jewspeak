# 🔄 Sync UI Edits to Source Files (One-Time)

This guide helps you take all your UI edits and make them the default in your source files.

## Step-by-Step Process

### Step 1: Export Your Saved Content

**Option A: Using Browser Console (Recommended)**

1. **Open your site** in the browser (with your edited content visible)
2. **Open browser console** (F12 → Console tab)
3. **Copy and paste this code**, then press Enter:

```javascript
// Export all saved content
const content = {};
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  if (key && !key.startsWith('hasbaraQuizProgress') && !key.startsWith('editMode')) {
    content[key] = localStorage.getItem(key);
  }
}
console.log(JSON.stringify(content, null, 2));
// Copy the output below
```

4. **Copy the JSON output** that appears in the console
5. **Save it** as `saved-content.json` in your project root folder

**Option B: Download Script**

1. Open your site in browser
2. Open browser console (F12)
3. Copy the contents of `scripts/export-content.js` and paste into console
4. It will download `saved-content.json` automatically

### Step 2: Run the Sync Script

```bash
node scripts/sync-content.js saved-content.json
```

This will:
- Read all your saved values
- Find the matching `storageKey` in each source file
- Update the `value` prop with your edited text
- Save the updated files

### Step 3: Verify Changes

```bash
# Check what changed
git diff src/pages/

# Or review individual files
git diff src/pages/AboutPage.jsx
```

### Step 4: Test

```bash
npm run dev
```

Visit your site and verify that:
- ✅ Your edited text appears (even without localStorage)
- ✅ You can still edit via UI if needed
- ✅ Everything looks correct

### Step 5: Commit Your Changes

```bash
git add src/pages/
git commit -m "Update source files with UI edits"
git push
```

## Troubleshooting

**Problem:** Script says "Could not find storageKey"
- The storageKey in the saved content might not match exactly
- Check for typos or extra spaces
- Some dynamic keys (like `landing-section-0-title`) need manual handling

**Problem:** Text looks wrong after sync
- Check that quotes/escapes are correct
- Some special characters might need escaping
- Review the diff (`git diff`) to see what changed

**Problem:** Some values didn't sync
- Check the console output for warnings
- You may need to manually update those specific ones

## Manual Alternative

If the script doesn't work, you can manually update:

1. **Open the JSON file** (`saved-content.json`)
2. **For each entry**, find the corresponding `EditableText` in the source file
3. **Update the `value` prop** with the new text
4. **Keep the `storageKey` the same**

Example:
```jsx
// Before
<EditableText
  value="Old text"
  storageKey="about-title"
/>

// After (from saved-content.json)
<EditableText
  value="Your edited text from UI"
  storageKey="about-title"
/>
```

---

**After syncing:** Your source files will have your edited content as the default, and new visitors will see those values (unless they've saved their own edits).

