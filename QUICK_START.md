# ⚡ Quick Start Guide

## Run Locally (Right Now!)

```bash
# You're already here, just run:
npm run dev
```

Then open: **http://localhost:5173**

---

## What You Have

✅ **Complete React website** with 6 pages  
✅ **Interactive features**: Flip cards, quiz, filtering  
✅ **Beautiful Orwellian design**: Dark theme, red accents  
✅ **Fully responsive**: Works on mobile, tablet, desktop  
✅ **Ready to deploy**: GitHub Pages, Netlify, Vercel  
✅ **Educational content**: Examples, analysis, sources  

---

## File Structure

```
src/
├── components/
│   └── Layout.jsx           # Header, nav, footer
├── pages/
│   ├── Landing.jsx          # Homepage with Orwell quote
│   ├── LanguagePage.jsx     # Interactive flip cards
│   ├── MediaPage.jsx        # Social media examples
│   ├── AnalysisPage.jsx     # Techniques & analysis
│   ├── InteractivePage.jsx  # Quiz game
│   └── AboutPage.jsx        # Sources & disclaimer
├── data/
│   └── hasbaraExamples.js   # All content data
└── index.css                # Styles & theme
```

---

## Customize Content

### Add More Examples

Edit `src/data/hasbaraExamples.js`:

```js
// Add to languageExamples array:
{
  id: 9,
  hasbaraTerm: "Your New Term",
  orwellEquivalent: "Plain Language",
  realMeaning: "What it actually means",
  explanation: "Why this is propaganda"
}

// Add to mediaExamples array:
{
  id: 9,
  platform: "Twitter/X",
  theme: "Your Theme",
  caption: "The propaganda post",
  explanation: "How it manipulates",
  emotionalAppeal: "What emotion",
  omissions: "What's left out"
}

// Add to quizData array:
{
  id: 11,
  statement: "Statement to evaluate",
  isHasbara: true, // or false
  explanation: "Why this is/isn't propaganda",
  indicators: ["Indicator 1", "Indicator 2"]
}
```

### Change Colors

Edit `src/index.css`:

```css
@theme {
  --color-hasbara-red: #e63946;  /* Main accent */
  --color-orwell-dark: #1a1a1a;  /* Background */
  --color-orwell-gray: #2d2d2d;  /* Card background */
  --color-orwell-light: #cccccc; /* Text color */
}
```

---

## Deploy in 5 Minutes

### GitHub Pages (Easiest)

1. **Create GitHub repo** (name it anything, e.g., "ministry-of-hasbara")

2. **Update `vite.config.js`**:
   ```js
   base: '/your-repo-name/',
   ```

3. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/repo.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to repo **Settings → Pages**
   - Source: **GitHub Actions**
   - Wait 2 minutes

5. **Done!** 
   - Your site: `https://username.github.io/repo-name/`

---

## What Each Page Does

### 🏠 Landing Page
- Welcome message with Orwell quote
- Links to all sections
- Educational disclaimer

### 📝 Language Page
- **8 flip cards** showing Hasbara terms
- Click to reveal real meaning
- Comparison table: Newspeak vs. Hasbara

### 📱 Media Page
- **8 social media post examples**
- Filter by theme
- Click "Show Analysis" for explanation
- Shows emotional appeals & omissions

### 📊 Analysis Page
- **6 propaganda techniques** explained
- **10 keyword frequency bars**
- Doublethink examples
- Information control section

### 🎮 Interactive Quiz
- **10 questions** to test propaganda recognition
- Immediate feedback with explanations
- Saves progress to localStorage
- Final reflection message

### ℹ️ About Page
- Project purpose & ethics
- Comprehensive sources
- Further reading links
- Disclaimer

---

## Features

### Interactive Elements
- ✅ Flip cards (hover/click)
- ✅ Expandable explanations
- ✅ Theme filters
- ✅ Progress tracking quiz
- ✅ Score calculation
- ✅ Local storage persistence

### Design
- ✅ Dark Orwellian theme
- ✅ Red accent colors (#e63946)
- ✅ Smooth page transitions
- ✅ Hover effects
- ✅ Mobile-responsive
- ✅ Monospace Orwell quotes

### Technical
- ✅ React 18 + Vite
- ✅ React Router (HashRouter)
- ✅ Framer Motion animations
- ✅ TailwindCSS v4
- ✅ No backend needed
- ✅ Static site generation

---

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

---

## Troubleshooting

### Port already in use?
```bash
npm run dev -- --port 3000
```

### Styles not updating?
- Hard refresh: `Ctrl/Cmd + Shift + R`
- Or clear cache

### Build errors?
```bash
rm -rf node_modules dist
npm install
npm run build
```

---

## Next Steps

1. ✅ **Test locally**: `npm run dev`
2. 📝 **Customize content**: Edit `data/hasbaraExamples.js`
3. 🎨 **Adjust colors**: Edit `index.css`
4. 🚀 **Deploy**: Follow GitHub Pages steps above
5. 📢 **Share**: Post on social media with #FreeP Palestine

---

## Need Help?

- Read `README.md` for detailed info
- Read `DEPLOYMENT.md` for deployment options
- Check Vite docs: https://vitejs.dev
- Check React Router docs: https://reactrouter.com

---

**Ready to expose propaganda. Let's go. 🇵🇸**


