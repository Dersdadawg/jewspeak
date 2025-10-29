import { useState } from 'react';
import { motion } from 'framer-motion';
import { languageExamples } from '../data/hasbaraExamples';
import EditableText from '../components/EditableText';

function FlipCard({ example }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-64 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full bg-orwell-gray rounded-lg p-6 shadow-lg border-2 border-orwell-light"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden"
          }}
        >
          <div className="flex flex-col justify-center h-full">
            <div className="text-sm text-gray-400 mb-2">HASBARA TERM</div>
            <h3 className="text-2xl font-bold text-white mb-4">{example.hasbaraTerm}</h3>
            <div className="text-sm text-orwell-light italic mt-auto">
              Click to reveal the reality →
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full bg-hasbara-red rounded-lg p-6 shadow-lg"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="flex flex-col h-full text-white">
            <div className="text-sm text-gray-200 mb-2">REAL MEANING</div>
            <h3 className="text-xl font-bold mb-3">{example.realMeaning}</h3>
            <p className="text-sm mb-3 flex-grow">{example.explanation}</p>
            <div className="text-xs text-gray-200 italic border-t border-gray-200 pt-2">
              1984 Equivalent: "{example.orwellEquivalent}"
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function LanguagePage() {
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
              value="The Language of Hasbara - Newspeak in the 21st Century"
              storageKey="language-title"
              className="text-white"
              tag="span"
            />
          </h1>

          <div className="orwell-quote mb-12">
            <EditableText
              value="Don't you see that the whole aim of Newspeak is to narrow the range of thought? In the end we shall make thoughtcrime literally impossible, because there will be no words in which to express it."
              storageKey="language-quote"
              className="block"
              tag="div"
            />
            <span className="block text-sm mt-2 text-gray-400">— George Orwell, 1984</span>
          </div>

          <div className="mb-12 text-orwell-light max-w-4xl">
            <p className="mb-4 text-lg">
              <EditableText
                value={String.raw`Wittgenstein said "the limits of my language mean the limits of my world."
Newspeak was designed to enforce these limits and make certain thoughts (or thoughtcrimes) impossible to think (or commit). Hasbara and modern propaganda, however, is different in how it operates. Hasbarists do not seek to eliminate entire words from usage. However, they subtly change their meaning and encode a pro-Israel bias within them.`}
                storageKey="language-intro-1"
                className="text-orwell-light"
                tag="span"
              />
            </p>
            <p className="mb-4">
              <EditableText
                value="Specifically, hasbara employs euphemisms, reframings, and loaded language to justify their genocide."
                storageKey="language-intro-2"
                className="text-orwell-light"
                tag="span"
              />
            </p>
            <p className="text-hasbara-red font-semibold">
              <EditableText
                value="Click each card to reveal what the propaganda language actually means."
                storageKey="language-instruction"
                className="text-hasbara-red font-semibold"
                tag="span"
              />
            </p>
          </div>

          {/* Interactive Flip Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {languageExamples.map((example, index) => (
              <motion.div
                key={example.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <FlipCard example={example} />
              </motion.div>
            ))}
          </div>

          {/* Comparison Section */}
          <div className="bg-orwell-gray p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6 text-white">
              <EditableText
                value="Orwell's Newspeak vs. Modern Hasbara"
                storageKey="language-comparison-title"
                className="text-white"
                tag="span"
              />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-hasbara-red pl-4">
                <h3 className="text-xl font-semibold mb-3 text-white">1984: Newspeak Principles</h3>
                <ul className="space-y-2 text-orwell-light">
                  <li>• Make unorthodox thoughts inexpressible</li>
                  <li>• Eliminate words that could express rebellion</li>
                  <li>• Narrow vocabulary to control thinking</li>
                  <li>• Make past atrocities undescribable</li>
                  <li>• Create doubletalk for contradictions</li>
                </ul>
              </div>
              <div className="border-l-4 border-hasbara-red pl-4">
                <h3 className="text-xl font-semibold mb-3 text-white">2024: Hasbara Principles</h3>
                <ul className="space-y-2 text-orwell-light">
                  <li>• Make criticism sound like antisemitism</li>
                  <li>• Sanitize violence with technical terms</li>
                  <li>• Frame occupation as self-defense</li>
                  <li>• Erase Palestinian narrative and history</li>
                  <li>• Present contradictions as balance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Insight Box */}
          <div className="bg-hasbara-red bg-opacity-10 border-2 border-hasbara-red p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-hasbara-red">💡 The Power of Language</h3>
            <p className="text-orwell-light">
              <EditableText
                value={String.raw`A key trick hasbarists have up their sleeves is calling out any opposition and labelling it "antisemitism." We can compare this with Orwell's concept of Thoughtcrime in 1984, where even thinking something contrary to the party doctrine can land you in jail. Some are refusing to speak out against the Israeli government's genocide for fear of being labelled as an antisemite, but if that's the case, they've already won.`}
                storageKey="language-insight"
                className="text-orwell-light"
                tag="span"
              />
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

