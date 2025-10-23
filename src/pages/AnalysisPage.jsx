import { motion } from 'framer-motion';
import { propagandaTechniques, propagandaKeywords } from '../data/hasbaraExamples';

function TechniqueCard({ technique, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      className="card mb-6"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 w-12 h-12 bg-hasbara-red rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
          {index + 1}
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white mb-1">{technique.technique}</h3>
          <div className="text-sm text-hasbara-red mb-3 font-mono">
            Orwellian Concept: {technique.orwellianConcept}
          </div>
          <p className="text-orwell-light mb-3">{technique.description}</p>
          <div className="bg-orwell-dark p-3 rounded">
            <div className="text-sm font-semibold text-gray-400 mb-2">Examples:</div>
            <ul className="text-sm text-orwell-light space-y-1">
              {technique.examples.map((ex, i) => (
                <li key={i}>• {ex}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function KeywordBar({ keyword, maxFrequency }) {
  const percentage = (keyword.frequency / maxFrequency) * 100;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-white font-semibold text-sm">{keyword.word}</span>
        <span className="text-hasbara-red text-sm">{keyword.frequency}</span>
      </div>
      <div className="w-full bg-orwell-dark rounded-full h-6 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-hasbara-red h-full flex items-center justify-end pr-2"
        >
          <span className="text-xs text-white">{percentage.toFixed(0)}%</span>
        </motion.div>
      </div>
      <p className="text-xs text-gray-400 mt-1">{keyword.context}</p>
    </motion.div>
  );
}

export default function AnalysisPage() {
  const maxFrequency = Math.max(...propagandaKeywords.map(k => k.frequency));

  return (
    <div className="page-container">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title">Doublethink and Narrative Control</h1>

          <div className="orwell-quote mb-12">
            "Doublethink means the power of holding two contradictory beliefs in one's mind simultaneously, 
            and accepting both of them."
            <span className="block text-sm mt-2 text-gray-400">— George Orwell, 1984</span>
          </div>

          <div className="mb-12 text-orwell-light max-w-4xl">
            <p className="mb-4 text-lg">
              Propaganda isn't just about what's said—it's about creating a framework where contradictions 
              can coexist without cognitive dissonance.
            </p>
            <p className="mb-4">
              How can Israel be "defending itself" while occupying? How can it be "the only democracy in the Middle East" 
              while millions live under military rule? How can bombing civilians be justified as "human shields"?
            </p>
            <p className="text-hasbara-red font-semibold">
              This is doublethink in action—and it's the foundation of modern Hasbara.
            </p>
          </div>

          {/* Propaganda Techniques */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Six Core Hasbara Techniques
            </h2>
            {propagandaTechniques.map((technique, index) => (
              <TechniqueCard key={technique.id} technique={technique} index={index} />
            ))}
          </section>

          {/* Keyword Analysis */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Most Common Propaganda Keywords
            </h2>
            <p className="text-orwell-light mb-6">
              Frequency analysis of Israeli government and media statements (Oct 2023 - Present)
            </p>
            <div className="bg-orwell-gray p-6 rounded-lg">
              {propagandaKeywords.map((keyword, index) => (
                <KeywordBar key={index} keyword={keyword} maxFrequency={maxFrequency} />
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-4 italic">
              * Data represents frequency in official Israeli government statements, IDF briefings, and coordinated social media campaigns.
            </p>
          </section>

          {/* Doublethink Examples */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Modern Doublethink in Action
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card border-l-4 border-hasbara-red">
                <h3 className="text-xl font-bold text-white mb-3">
                  "Israel wants peace"
                </h3>
                <p className="text-orwell-light mb-2">...while building settlements</p>
                <p className="text-orwell-light mb-2">...while demolishing Palestinian homes</p>
                <p className="text-orwell-light mb-2">...while maintaining a 17-year blockade</p>
                <p className="text-orwell-light">...while rejecting every peace proposal that doesn't grant total control</p>
              </div>

              <div className="card border-l-4 border-hasbara-red">
                <h3 className="text-xl font-bold text-white mb-3">
                  "We value every life"
                </h3>
                <p className="text-orwell-light mb-2">...35,000+ Palestinians killed in Gaza</p>
                <p className="text-orwell-light mb-2">...Hospitals, schools, and refugee camps bombed</p>
                <p className="text-orwell-light mb-2">...2 million people displaced</p>
                <p className="text-orwell-light">...while referring to them as "human animals"</p>
              </div>

              <div className="card border-l-4 border-hasbara-red">
                <h3 className="text-xl font-bold text-white mb-3">
                  "We're defending democracy"
                </h3>
                <p className="text-orwell-light mb-2">...millions live under military occupation</p>
                <p className="text-orwell-light mb-2">...separate legal systems for Jews and Palestinians</p>
                <p className="text-orwell-light mb-2">...no right to vote for those under occupation</p>
                <p className="text-orwell-light">...indefinite detention without trial</p>
              </div>

              <div className="card border-l-4 border-hasbara-red">
                <h3 className="text-xl font-bold text-white mb-3">
                  "We only target terrorists"
                </h3>
                <p className="text-orwell-light mb-2">...70% of casualties are women and children</p>
                <p className="text-orwell-light mb-2">...journalists killed in record numbers</p>
                <p className="text-orwell-light mb-2">...entire families erased</p>
                <p className="text-orwell-light">...residential buildings, schools, and hospitals destroyed</p>
              </div>
            </div>
          </section>

          {/* Information Control */}
          <section className="bg-orwell-gray p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              The Ministry of Truth: Information Control
            </h2>
            <div className="text-orwell-light space-y-3">
              <p>
                <strong className="text-hasbara-red">Journalist Casualties:</strong> Over 100 journalists 
                killed in Gaza since October 2023—the deadliest period for press in decades. Israel restricts 
                independent journalist access, controlling the narrative.
              </p>
              <p>
                <strong className="text-hasbara-red">Social Media Manipulation:</strong> Apps like Act.IL 
                coordinate thousands of users to flood social media with pro-Israel messaging, report critical 
                posts, and manipulate algorithms.
              </p>
              <p>
                <strong className="text-hasbara-red">Labeling Dissent:</strong> Criticism is systematically 
                labeled as "antisemitism," conflating legitimate political critique with racism to silence opposition.
              </p>
              <p>
                <strong className="text-hasbara-red">Academic Suppression:</strong> Scholars critical of Israel 
                face harassment, firing, and blacklisting. Students face disciplinary action for pro-Palestinian advocacy.
              </p>
            </div>
          </section>

          {/* Key Insight */}
          <div className="bg-hasbara-red bg-opacity-10 border-2 border-hasbara-red p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-hasbara-red">💡 Breaking Through Doublethink</h3>
            <p className="text-orwell-light mb-3">
              Orwell warned that doublethink makes resistance impossible—not through violence, but through confusion. 
              If you can't name what's happening, you can't oppose it.
            </p>
            <p className="text-orwell-light">
              <strong>The antidote?</strong> Precise language. Call occupation "occupation." Call ethnic cleansing 
              "ethnic cleansing." Call genocide "genocide." When someone tries to muddy the waters with euphemisms, 
              ask: "What does that actually mean?" Force clarity. That's how you resist doublethink.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}



