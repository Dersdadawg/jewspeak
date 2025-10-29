import { motion } from 'framer-motion';
import { propagandaTechniques } from '../data/hasbaraExamples';
import EditableText from '../components/EditableText';

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

export default function AnalysisPage() {
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
              value="Doublethink and Narrative Control"
              storageKey="analysis-title"
              className="text-white"
              tag="span"
            />
          </h1>

          <div className="orwell-quote mb-12">
            <EditableText
              value="Doublethink means the power of holding two contradictory beliefs in one's mind simultaneously, and accepting both of them."
              storageKey="analysis-quote"
              className="block"
              tag="div"
            />
            <span className="block text-sm mt-2 text-gray-400">— George Orwell, 1984</span>
          </div>

          <div className="mb-12 text-orwell-light max-w-4xl">
            <p className="mb-4 text-lg">
              <EditableText
                value="Propaganda isn't just about what's said—it's about creating a framework where contradictions can coexist without cognitive dissonance."
                storageKey="analysis-intro-1"
                className="text-orwell-light"
                tag="span"
              />
            </p>
            <p className="mb-4">
              <EditableText
                value="How can Israel be 'defending itself' while occupying? How can it be 'the only democracy in the Middle East' while millions live under military rule? How can bombing civilians be justified as 'human shields'?"
                storageKey="analysis-intro-2"
                className="text-orwell-light"
                tag="span"
              />
            </p>
            <p className="text-hasbara-red font-semibold">
              <EditableText
                value="This is doublethink in action—and it's the foundation of modern Hasbara."
                storageKey="analysis-intro-3"
                className="text-hasbara-red font-semibold"
                tag="span"
              />
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
        </motion.div>
      </div>
    </div>
  );
}



