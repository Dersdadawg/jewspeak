# 🕯️ The Ministry of Hasbara

**An Interactive Educational Exhibit Connecting Orwell's 1984 to Modern Israeli Propaganda**

---

## 📖 About

*"Who controls the past controls the future; who controls the present controls the past."* — George Orwell, *1984*

**The Ministry of Hasbara** is an interactive web exhibition that explores the parallels between George Orwell's dystopian novel *1984* and modern Israeli state propaganda (Hasbara), particularly in the context of the Gaza war. This project is designed to promote media literacy, critical thinking, and awareness of how language shapes our understanding of power and violence.

### What is Hasbara?

**Hasbara** (הסברה‎) means "explanation" in Hebrew but refers to Israel's coordinated public relations and propaganda apparatus. Like Orwell's Ministry of Truth, Hasbara doesn't just tell a story—it controls what story can be told through:

- Euphemistic language that sanitizes violence
- Coordinated social media campaigns
- Suppression of critical voices
- Control of journalist access
- Strategic framing that obscures power dynamics

---

## 🎯 Project Purpose

This is an **educational project** about propaganda techniques and media literacy. It:

✅ Examines how language is weaponized to obscure reality  
✅ Teaches visitors to identify propaganda techniques  
✅ Promotes critical engagement with media narratives  
✅ Advocates for honest language and recognition of all human lives  

❌ This is NOT about "both sides" or false balance  
❌ This does NOT endorse violence by any party  
❌ This is NOT antisemitic (criticism of a state ≠ racism)  

---

## 🏗️ Technical Stack

- **Framework**: React 18 with Vite
- **Routing**: React Router (HashRouter for GitHub Pages)
- **Styling**: TailwindCSS with custom Orwellian theme
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages (or Netlify/Vercel)

---

## 📂 Project Structure

```
1984hasbara/
├── src/
│   ├── components/
│   │   └── Layout.jsx          # Header, navigation, footer
│   ├── pages/
│   │   ├── Landing.jsx          # Welcome page with Orwell quote
│   │   ├── LanguagePage.jsx     # Interactive flip cards for Newspeak examples
│   │   ├── MediaPage.jsx        # Social media propaganda examples
│   │   ├── AnalysisPage.jsx     # Techniques and keyword analysis
│   │   ├── InteractivePage.jsx  # "Spot the Hasbara" quiz
│   │   └── AboutPage.jsx        # Sources and ethical disclaimer
│   ├── data/
│   │   └── hasbaraExamples.js   # All content data
│   ├── index.css                # TailwindCSS + custom styles
│   ├── App.jsx                  # Router configuration
│   └── main.jsx                 # Entry point
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/1984hasbara.git
   cd 1984hasbara
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 🌐 Deployment

### GitHub Pages

1. **Update `vite.config.js`** with your repository name:
   ```js
   base: '/your-repo-name/'
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: GitHub Actions
   - The included `.github/workflows/deploy.yml` will automatically deploy on push to `main`

4. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

Your site will be live at: `https://yourusername.github.io/your-repo-name/`

### Alternative: Netlify or Vercel

1. **Build command**: `npm run build`
2. **Publish directory**: `dist`
3. For these platforms, you can use `BrowserRouter` instead of `HashRouter` in `App.jsx`

---

## 🎨 Features

### 1️⃣ Landing Page
- Orwell quote and project introduction
- Links to all sections
- Contextual warning and educational disclaimer

### 2️⃣ Language Page: "Newspeak in the 21st Century"
- Interactive flip cards revealing the reality behind propaganda terms
- Side-by-side comparison of 1984's Newspeak and Hasbara
- Examples: "precision strike," "human shields," "self-defense"

### 3️⃣ Media Page: "Manufacturing Consent"
- Social media post mockups with propaganda analysis
- Filter by theme (Humanitarian Framing, Victimhood, Dehumanization, etc.)
- Reveals emotional appeals and key omissions

### 4️⃣ Analysis Page: "Doublethink and Narrative Control"
- Six core Hasbara techniques mapped to Orwellian concepts
- Keyword frequency analysis
- Examples of modern doublethink in action

### 5️⃣ Interactive Quiz: "Can You Spot the Hasbara?"
- 10-question quiz testing propaganda recognition
- Immediate feedback with explanations
- Local storage saves progress
- Final reflection on media literacy

### 6️⃣ About Page: Sources & Disclaimer
- Ethical disclaimer and fair use statement
- Comprehensive sources (academic, journalistic, human rights reports)
- Further reading recommendations

---

## 🎨 Design Theme

**Orwellian Aesthetic:**
- Dark grayscale color scheme (#1a1a1a, #2d2d2d)
- Red accents (#e63946) for emphasis
- Monospaced fonts for Orwell quotes
- Subtle glitch and typewriter animations
- Card-based layout with hover effects

**Responsive Design:**
- Mobile-first approach
- Tailwind breakpoints (sm, md, lg)
- Touch-friendly interactive elements
- Collapsible mobile navigation

---

## 📚 Content Sources

All claims are backed by:

- **Human Rights Reports**: Amnesty International, Human Rights Watch, B'Tselem, UN OCHA
- **Academic Works**: Rashid Khalidi, Ilan Pappé, Edward Said, Noam Chomsky
- **Journalism**: Committee to Protect Journalists, Al Jazeera, +972 Magazine, The Intercept
- **Primary Sources**: Israeli government statements, IDF briefings, documented campaigns

Full citations available in the About page.

---

## ⚠️ Content Warning

This project discusses:
- State violence and propaganda
- Occupation and apartheid
- Media manipulation and censorship

**No graphic imagery is displayed.** All content is presented for educational analysis.

---

## 🤝 Contributing

This is an educational open-source project. Contributions are welcome:

- **Corrections**: If you find factual errors, please open an issue with sources
- **Translations**: Help make this accessible in other languages
- **Additional Examples**: Submit well-documented propaganda examples
- **Technical Improvements**: UI/UX enhancements, accessibility improvements

---

## 📄 License

This project is open-source and available under the **MIT License**.

All content is presented under **fair use** for educational and critical analysis purposes.

---

## 🔗 Resources for Further Learning

### Media Literacy
- [News Literacy Project](https://newslit.org/)
- [FAIR - Fairness & Accuracy In Reporting](https://fair.org/)
- [Media Education Foundation](https://mediaed.org/)

### Palestinian Perspectives
- [Electronic Intifada](https://electronicintifada.net/)
- [Mondoweiss](https://mondoweiss.net/)
- [Institute for Middle East Understanding](https://imeu.org/)

### Human Rights Organizations
- [Amnesty International](https://www.amnesty.org/)
- [Human Rights Watch](https://www.hrw.org/)
- [B'Tselem](https://www.btselem.org/) (Israeli HR org)
- [Al-Haq](https://www.alhaq.org/) (Palestinian HR org)

---

## 💬 Contact

Questions or feedback? This project advocates for:
- Freedom for Palestine
- Equality for all people
- Honest language about power and violence
- Media literacy and critical thinking

---

## 🕊️ Final Note

*"If liberty means anything at all, it means the right to tell people what they do not want to hear."*  
— George Orwell

This project exists because Orwell's warnings about language and power are more relevant than ever. Propaganda doesn't work by lying—it works by controlling what questions you're allowed to ask.

**Ask the uncomfortable questions. Use precise language. Resist doublethink.**

---

**Free Palestine. 🇵🇸**
