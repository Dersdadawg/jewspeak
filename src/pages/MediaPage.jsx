import { useState } from 'react';
import { motion } from 'framer-motion';
import { mediaExamples } from '../data/hasbaraExamples';
import EditableText from '../components/EditableText';

function MediaCard({ example, index }) {
  const [showExplanation, setShowExplanation] = useState(false);

  const themeColors = {
    'Humanitarian Framing': 'border-blue-500',
    'Victimhood Framing': 'border-purple-500',
    'Defensive Framing': 'border-yellow-500',
    'Dehumanization': 'border-red-500',
    'Moral Superiority': 'border-green-500',
    'False Equivalence': 'border-gray-500',
    'Evidence Manipulation': 'border-orange-500',
    'Strawman Argument': 'border-pink-500'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      className={`card border-l-4 ${themeColors[example.theme] || 'border-hasbara-red'}`}
    >
      {/* Platform Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold px-3 py-1 bg-hasbara-red text-white rounded-full">
          {example.platform}
        </span>
        <span className="text-xs text-gray-400">{example.theme}</span>
      </div>

      {/* Mock Social Media Post */}
      <div className="bg-orwell-dark p-4 rounded mb-4 border border-gray-600">
        <p className="text-white italic">{example.caption}</p>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setShowExplanation(!showExplanation)}
        className="w-full btn-secondary text-sm mb-3"
      >
        {showExplanation ? 'Hide Analysis ▲' : 'Show Analysis ▼'}
      </button>

      {/* Analysis Section */}
      <motion.div
        initial={false}
        animate={{
          height: showExplanation ? 'auto' : 0,
          opacity: showExplanation ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="bg-hasbara-red bg-opacity-10 p-4 rounded border border-hasbara-red">
          <h4 className="font-bold text-white mb-2">How This Shapes Opinion:</h4>
          <p className="text-orwell-light text-sm mb-3">{example.explanation}</p>
          
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="font-semibold text-hasbara-red">Emotional Appeal:</span>
              <p className="text-orwell-light">{example.emotionalAppeal}</p>
            </div>
            <div>
              <span className="font-semibold text-hasbara-red">Key Omissions:</span>
              <p className="text-orwell-light">{example.omissions}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function MediaPage() {
  const [selectedTheme, setSelectedTheme] = useState('All');
  
  const themes = ['All', ...new Set(mediaExamples.map(ex => ex.theme))];
  
  const filteredExamples = selectedTheme === 'All' 
    ? mediaExamples 
    : mediaExamples.filter(ex => ex.theme === selectedTheme);

  return (
    <div className="page-container">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title">
            <EditableText
              value="Manufacturing Consent"
              storageKey="media-title"
              className="text-white"
              tag="span"
            />
          </h1>

          <div className="orwell-quote mb-12">
            <EditableText
              value="The Ministry of Peace concerns itself with war, the Ministry of Truth with lies, the Ministry of Love with torture and the Ministry of Plenty with starvation. These contradictions are not accidental, nor do they result from from ordinary hypocrisy: they are deliberate exercises in doublethink."
              storageKey="media-quote"
              className="block"
              tag="div"
            />
            <span className="block text-sm mt-2 text-gray-400">— George Orwell, 1984</span>
          </div>

          <div className="mb-8 text-orwell-light max-w-4xl">
            <p className="mb-4 text-lg">
              <EditableText
                value="Modern propaganda doesn't just happen on state TV. It's in your social media feed, shaped by coordinated campaigns, talking points, and strategic framing."
                storageKey="media-intro-1"
                className="text-orwell-light"
                tag="span"
              />
            </p>
            <p className="mb-4">
              <EditableText
                value="These examples show how Hasbara operates on social media: using emotional appeals, selective framing, omission of context, and linguistic manipulation to shape how people understand Israel's actions in Gaza."
                storageKey="media-intro-2"
                className="text-orwell-light"
                tag="span"
              />
            </p>
            <p className="text-hasbara-red font-semibold">
              <EditableText
                value="Click 'Show Analysis' on each post to see the propaganda technique at work."
                storageKey="media-instruction"
                className="text-hasbara-red font-semibold"
                tag="span"
              />
            </p>
          </div>

          {/* Theme Filter */}
          <div className="mb-8">
            <h3 className="text-white font-semibold mb-3">Filter by Theme:</h3>
            <div className="flex flex-wrap gap-2">
              {themes.map(theme => (
                <button
                  key={theme}
                  onClick={() => setSelectedTheme(theme)}
                  className={`px-4 py-2 rounded transition-all duration-200 text-sm ${
                    selectedTheme === theme
                      ? 'bg-hasbara-red text-white'
                      : 'bg-orwell-gray text-orwell-light hover:bg-gray-600'
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>

          {/* Media Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {filteredExamples.map((example, index) => (
              <MediaCard key={example.id} example={example} index={index} />
            ))}
          </div>

          {/* Educational Box */}
          <div className="bg-orwell-gray p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">
              <EditableText
                value="Understanding the Propaganda Ecosystem"
                storageKey="media-ecosystem-title"
                className="text-white"
                tag="span"
              />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-orwell-light">
              <div>
                <h3 className="font-bold text-hasbara-red mb-2">1. Coordination</h3>
                <p className="text-sm">
                  Israel's Ministry of Foreign Affairs coordinates messaging with apps like Act.IL, 
                  where volunteers are directed to specific posts to comment, share, and amplify.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-hasbara-red mb-2">2. Talking Points</h3>
                <p className="text-sm">
                  Officials, influencers, and advocates all use the same phrases ("most moral army," 
                  "human shields") because they're distributed through coordinated networks.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-hasbara-red mb-2">3. Volume & Repetition</h3>
                <p className="text-sm">
                  The same narratives flood social media, creating an illusion of consensus and 
                  making alternative perspectives seem marginal or extremist.
                </p>
              </div>
            </div>
          </div>

          {/* Key Insight */}
          <div className="bg-hasbara-red bg-opacity-10 border-2 border-hasbara-red p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-hasbara-red">💡 Media Literacy Reminder</h3>
            <p className="text-orwell-light mb-3">
              <EditableText
                value="Ask yourself when you see social media about Israel/Palestine:"
                storageKey="media-literacy-intro"
                className="text-orwell-light"
                tag="span"
              />
            </p>
            <ul className="text-orwell-light space-y-2">
              <li>• <strong>Who is the source?</strong> Are they government-affiliated?</li>
              <li>• <strong>What's omitted?</strong> What context or information is missing?</li>
              <li>• <strong>What's the emotional appeal?</strong> Fear? Pity? Outrage?</li>
              <li>• <strong>What power dynamics are obscured?</strong> Who has the power here?</li>
              <li>• <strong>Would I accept this framing if the countries were reversed?</strong></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}



