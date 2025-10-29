import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mapping of storageKeys to their source files and how to find them
const storageKeyMap = {
  // Landing Page
  'landing-title-start': { file: 'src/pages/Landing.jsx', pattern: 'storageKey="landing-title-start"' },
  'landing-title-end': { file: 'src/pages/Landing.jsx', pattern: 'storageKey="landing-title-end"' },
  'landing-quote': { file: 'src/pages/Landing.jsx', pattern: 'storageKey="landing-quote"' },
  'landing-para-1': { file: 'src/pages/Landing.jsx', pattern: 'storageKey="landing-para-1"' },
  'landing-hasbara-term': { file: 'src/pages/Landing.jsx', pattern: 'storageKey="landing-hasbara-term"' },
  'landing-para-2': { file: 'src/pages/Landing.jsx', pattern: 'storageKey="landing-para-2"' },
  'landing-para-3': { file: 'src/pages/Landing.jsx', pattern: 'storageKey="landing-para-3"' },
  'landing-about-para-1': { file: 'src/pages/Landing.jsx', pattern: 'storageKey="landing-about-para-1"' },
  'landing-about-para-2': { file: 'src/pages/Landing.jsx', pattern: 'storageKey="landing-about-para-2"' },
  
  // About Page
  'about-title': { file: 'src/pages/AboutPage.jsx', pattern: 'storageKey="about-title"' },
  'about-purpose-title': { file: 'src/pages/AboutPage.jsx', pattern: 'storageKey="about-purpose-title"' },
  'about-purpose-1': { file: 'src/pages/AboutPage.jsx', pattern: 'storageKey="about-purpose-1"' },
  'about-purpose-2': { file: 'src/pages/AboutPage.jsx', pattern: 'storageKey="about-purpose-2"' },
  'about-hasbara-title': { file: 'src/pages/AboutPage.jsx', pattern: 'storageKey="about-hasbara-title"' },
  'about-creator-title': { file: 'src/pages/AboutPage.jsx', pattern: 'storageKey="about-creator-title"' },
  'about-creator-text': { file: 'src/pages/AboutPage.jsx', pattern: 'storageKey="about-creator-text"' },
  
  // Language Page
  'language-title': { file: 'src/pages/LanguagePage.jsx', pattern: 'storageKey="language-title"' },
  'language-quote': { file: 'src/pages/LanguagePage.jsx', pattern: 'storageKey="language-quote"' },
  'language-intro-1': { file: 'src/pages/LanguagePage.jsx', pattern: 'storageKey="language-intro-1"' },
  'language-intro-2': { file: 'src/pages/LanguagePage.jsx', pattern: 'storageKey="language-intro-2"' },
  'language-instruction': { file: 'src/pages/LanguagePage.jsx', pattern: 'storageKey="language-instruction"' },
  'language-comparison-title': { file: 'src/pages/LanguagePage.jsx', pattern: 'storageKey="language-comparison-title"' },
  'language-insight': { file: 'src/pages/LanguagePage.jsx', pattern: 'storageKey="language-insight"' },
  
  // Media Page
  'media-title': { file: 'src/pages/MediaPage.jsx', pattern: 'storageKey="media-title"' },
  'media-quote': { file: 'src/pages/MediaPage.jsx', pattern: 'storageKey="media-quote"' },
  'media-intro-1': { file: 'src/pages/MediaPage.jsx', pattern: 'storageKey="media-intro-1"' },
  'media-intro-2': { file: 'src/pages/MediaPage.jsx', pattern: 'storageKey="media-intro-2"' },
  'media-instruction': { file: 'src/pages/MediaPage.jsx', pattern: 'storageKey="media-instruction"' },
  'media-ecosystem-title': { file: 'src/pages/MediaPage.jsx', pattern: 'storageKey="media-ecosystem-title"' },
  'media-literacy-intro': { file: 'src/pages/MediaPage.jsx', pattern: 'storageKey="media-literacy-intro"' },
  
  // Analysis Page
  'analysis-title': { file: 'src/pages/AnalysisPage.jsx', pattern: 'storageKey="analysis-title"' },
  'analysis-quote': { file: 'src/pages/AnalysisPage.jsx', pattern: 'storageKey="analysis-quote"' },
  'analysis-intro-1': { file: 'src/pages/AnalysisPage.jsx', pattern: 'storageKey="analysis-intro-1"' },
  'analysis-intro-2': { file: 'src/pages/AnalysisPage.jsx', pattern: 'storageKey="analysis-intro-2"' },
  'analysis-intro-3': { file: 'src/pages/AnalysisPage.jsx', pattern: 'storageKey="analysis-intro-3"' },
  'analysis-insight-1': { file: 'src/pages/AnalysisPage.jsx', pattern: 'storageKey="analysis-insight-1"' },
  'analysis-insight-2': { file: 'src/pages/AnalysisPage.jsx', pattern: 'storageKey="analysis-insight-2"' },
  
  // Interactive Page
  'interactive-title': { file: 'src/pages/InteractivePage.jsx', pattern: 'storageKey="interactive-title"' },
  'interactive-intro-1': { file: 'src/pages/InteractivePage.jsx', pattern: 'storageKey="interactive-intro-1"' },
  'interactive-intro-2': { file: 'src/pages/InteractivePage.jsx', pattern: 'storageKey="interactive-intro-2"' },
  'interactive-reflection-1': { file: 'src/pages/InteractivePage.jsx', pattern: 'storageKey="interactive-reflection-1"' },
  'interactive-reflection-2': { file: 'src/pages/InteractivePage.jsx', pattern: 'storageKey="interactive-reflection-2"' },
  'interactive-tip': { file: 'src/pages/InteractivePage.jsx', pattern: 'storageKey="interactive-tip"' },
};

function updateSourceFile(filePath, storageKey, newValue) {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.error(`❌ File not found: ${filePath}`);
    return false;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  const escapedKey = storageKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  // Pattern 1: Simple quoted value on same line
  // Matches: value="text" storageKey="key"
  const quoteChar = '["\'`]';
  const nonQuotes = '[^"\'`]*?';
  let pattern = new RegExp(
    `(value=${quoteChar})(${nonQuotes})(${quoteChar}\\s+storageKey=${quoteChar}${escapedKey}${quoteChar})`,
    's'
  );
  
  let match = content.match(pattern);
  
  if (!match) {
    // Pattern 2: Value on separate line
    // Matches: value="text"\n  storageKey="key"
    pattern = new RegExp(
      `(value=${quoteChar})(${nonQuotes})(${quoteChar}[^\\n]*?\\n[^\\n]*?storageKey=${quoteChar}${escapedKey}${quoteChar})`,
      's'
    );
    match = content.match(pattern);
  }
  
  if (!match) {
    // Pattern 3: Template literal으 String.raw
    // Matches: value={String.raw`text`} storageKey="key"
    const backtick = '`';
    pattern = new RegExp(
      `(value=\\{[^}]*String\\.raw\\${backtick}[^\\${backtick}]*?\\${backtick}[^}]*\\}\\s+storageKey=${quoteChar}${escapedKey}${quoteChar})`,
      's'
    );
    match = content.match(pattern);
    
    if (match) {
      // Replace with template literal
      const escaped = newValue.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
      content = content.replace(match[0], `value={\`${escaped}\`} storageKey="${storageKey}"`);
      fs.writeFileSync(fullPath, content, 'utf8');
      return true;
    }
  }
  
  if (!match) {
    console.warn(`⚠️  Could not find storageKey "${storageKey}" in ${filePath}`);
    return false;
  }
  
  // Determine quote type and escape accordingly
  const quoteType = match[1].includes('"') ? '"' : match[1].includes("'") ? "'" : "`";
  let escapedValue = newValue;
  
  // Escape based on quote type
  if (quoteType === '"') {
    escapedValue = newValue.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
  } else if (quoteType === "'") {
    escapedValue = newValue.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
  } else {
    escapedValue = newValue.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
  }
  
  // Replace the value
  content = content.replace(pattern, `$1${escapedValue}$3`);
  
  fs.writeFileSync(fullPath, content, 'utf8');
  return true;
}

// Main function
function syncContentToSource(savedContentPath) {
  const fullPath = path.join(__dirname, '..', savedContentPath);
  
  if (!fs.existsSync(fullPath)) {
    console.error(`❌ Saved content file not found: ${savedContentPath}`);
    console.log('\n📋 Steps:');
    console.log('1. Open your site in browser');
    console.log('2. Open browser console (F12)');
    console.log('3. Copy and run the script from scripts/export-content.js');
    console.log('4. Save the downloaded JSON file in the project root');
    console.log('5. Run this script again with: node scripts/sync-content.js saved-content.json');
    return;
  }
  
  const savedContent = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  
  console.log('🔄 Syncing saved content to source files...\n');
  
  let updated = 0;
  let skipped = 0;
  let errors = 0;
  
  for (const [storageKey, newValue] of Object.entries(savedContent)) {
    let mapping = storageKeyMap[storageKey];
    
    if (!mapping) {
      // Handle dynamic keys (like landing-section-0-title)
      if (storageKey.startsWith('landing-section-')) {
        const sectionMatch = storageKey.match(/landing-section-(\d+)-(title|desc)/);
        if (sectionMatch) {
          mapping = { file: 'src/pages/Landing.jsx', pattern: `storageKey={\`landing-section-\\$\\{index\\}-${sectionMatch[2]}\`}` };
        }
      }
      
      if (!mapping) {
        console.warn(`⚠️  No mapping found for: ${storageKey}`);
        skipped++;
        continue;
      }
    }
    
    if (updateSourceFile(mapping.file, storageKey, newValue)) {
      console.log(`✅ Updated ${storageKey} in ${mapping.file}`);
      updated++;
    } else {
      errors++;
    }
  }
  
  console.log(`\n✨ Done! Updated: ${updated}, Skipped: ${skipped}, Errors: ${errors}`);
}

// Run if called directly
const savedContentPath = process.argv[2] || 'saved-content.json';
syncContentToSource(savedContentPath);

