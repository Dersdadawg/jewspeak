# 🚀 Deployment Instructions

## Quick Start

Before deploying, update the `base` path in `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Change this!
})
```

---

## Option 1: GitHub Pages (Recommended)

### Prerequisites
- GitHub account
- Repository created

### Steps

1. **Update Repository Name in Config**
   
   In `vite.config.js`, change the `base` to match your repo name:
   ```js
   base: '/1984hasbara/', // Replace with your repo name
   ```

2. **Initialize Git and Push**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: The Ministry of Hasbara"
   git branch -M main
   git remote add origin https://github.com/Dersdadawg/jewspeak.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Build and deployment**:
     - **Source**: Select "GitHub Actions"
   - The included `.github/workflows/deploy.yml` will automatically deploy

4. **Wait for Deployment**
   - Go to **Actions** tab to watch the deployment
   - Once complete, your site will be live at:
     ```
     https://yourusername.github.io/your-repo-name/
     ```

### Updating the Site
Simply push to the `main` branch:
```bash
git add .
git commit -m "Update content"
git push
```

The GitHub Action will automatically rebuild and deploy.

---

## Option 2: Netlify

### Steps

1. **Update Config**
   
   In `vite.config.js`, change base to `/`:
   ```js
   base: '/',
   ```

2. **Update Router**
   
   In `src/App.jsx`, change from `HashRouter` to `BrowserRouter`:
   ```js
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
   ```

3. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Configure:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click "Deploy site"

4. **Custom Domain** (Optional)
   - In Netlify: Site settings → Domain management
   - Add your custom domain

---

## Option 3: Vercel

### Steps

1. **Update Config** (same as Netlify)
   
   In `vite.config.js`:
   ```js
   base: '/',
   ```

2. **Update Router** (same as Netlify)
   
   In `src/App.jsx`:
   ```js
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
   ```

3. **Deploy**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

---

## Option 4: Manual Deployment

### Build Locally
```bash
npm run build
```

This creates a `dist/` folder with all static files.

### Upload to Any Static Host
- **AWS S3**: Upload `dist/` contents to S3 bucket (enable static website hosting)
- **DigitalOcean Spaces**: Similar to S3
- **Traditional Web Hosting**: Upload `dist/` contents via FTP

---

## Customization Tips

### Change Colors
Edit `src/index.css` in the `@theme` section:
```css
@theme {
  --color-hasbara-red: #e63946;  /* Change this */
  --color-orwell-dark: #1a1a1a;
  --color-orwell-gray: #2d2d2d;
  --color-orwell-light: #cccccc;
}
```

### Add More Content
Edit `src/data/hasbaraExamples.js` to add:
- New language examples
- More media posts
- Additional quiz questions
- More propaganda techniques

### Change Fonts
Edit `src/index.css`:
```css
@theme {
  --font-mono: 'Your Font', monospace;
}
```

And add font imports in `index.html`:
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=YourFont&display=swap">
```

---

## Troubleshooting

### 404 Errors on Refresh (GitHub Pages)
✅ **Already solved** - Project uses `HashRouter` which works with GitHub Pages

If you switch to Netlify/Vercel, you can use `BrowserRouter` instead.

### Build Fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styling Issues
```bash
# Tailwind not updating? Force rebuild
rm -rf dist
npm run build
```

### Custom Domain (GitHub Pages)
1. Add a `CNAME` file to the `public/` folder with your domain:
   ```
   yourdomain.com
   ```
2. Configure DNS:
   - Add A records pointing to GitHub Pages IPs
   - Or CNAME record pointing to `yourusername.github.io`

---

## Environment Variables (Optional)

If you want to add analytics or other services:

1. Create `.env`:
   ```
   VITE_ANALYTICS_ID=your-analytics-id
   ```

2. Access in code:
   ```js
   const analyticsId = import.meta.env.VITE_ANALYTICS_ID;
   ```

3. For GitHub Pages, add secrets:
   - Settings → Secrets and variables → Actions
   - Add your environment variables

---

## Performance Optimization

### Already Included:
✅ Code splitting (automatic with Vite)
✅ CSS minification
✅ Tree shaking
✅ Framer Motion for smooth animations

### Optional Enhancements:
- Add image optimization for any images you include
- Enable service worker for offline support
- Add CDN (Cloudflare) in front of deployment

---

## Security Notes

### What's Included:
- No backend = no server vulnerabilities
- Static site = minimal attack surface
- No user data collection = no privacy issues

### Content Safety:
- No graphic imagery displayed
- Educational fair use applied
- Ethical disclaimers included

---

## Support

If you encounter issues:
1. Check the [Vite documentation](https://vitejs.dev/)
2. Check [React Router documentation](https://reactrouter.com/)
3. Check deployment platform docs (GitHub/Netlify/Vercel)

---

**Ready to share truth. 🇵🇸**



