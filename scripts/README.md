# Quick Reference: Sync UI Edits to Source Files

## 🚀 Quick Steps

1. **Edit your text via UI** (enable edit mode, make changes, save)

2. **Export saved content** from browser console:
   ```javascript
   const content = {};
   for (let i = 0; i < localStorage.length; i++) {
     const key = localStorage.key(i);
     if (key && !key.startsWith('hasbaraQuizProgress') && !key.startsWith('editMode')) {
       content[key] = localStorage.getItem(key);
     }
   }
   console.log(JSON.stringify(content, null, 2));
   ```
   Copy the output and save as `saved-content.json` in project root.

3. **Run sync script**:
   ```bash
   node scripts/sync-content.js saved-content.json
   ```

4. **Verify changes**:
   ```bash
   git diff src/pages/
   ```

5. **Test**:
   ```bash
   npm run dev
   ```

6. **Commit**:
   ```bash
   git add src/pages/
   git commit -m "Update source files with UI edits"
   git push
   ```

## 📚 Full Guide

See `SYNC_GUIDE.md` for detailed instructions.


