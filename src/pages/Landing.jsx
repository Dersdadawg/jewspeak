import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import EditableText from '../components/EditableText';

export default function Landing() {
  const sections = [
    {
      title: 'Language',
      path: '/language',
      description: 'Explore how Newspeak lives on in modern propaganda',
      icon: '📝'
    },
    {
      title: 'Media',
      path: '/media',
      description: 'See real examples of manufactured consent',
      icon: '📱'
    },
    {
      title: 'Analysis',
      path: '/analysis',
      description: 'Understand the mechanisms of narrative control',
      icon: '📊'
    },
    {
      title: 'Interactive',
      path: '/interactive',
      description: 'Test your ability to spot propaganda',
      icon: '🎮'
    }
  ];

  return (
    <div className="page-container">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
            <EditableText
              value="Welcome to the Ministry of"
              storageKey="landing-title-start"
              className="text-white"
              tag="span"
            />
            {' '}
            <EditableText
              value="Hasbara"
              storageKey="landing-title-end"
              className="text-hasbara-red"
              tag="span"
            />
          </h1>

          <div className="orwell-quote max-w-3xl mx-auto mb-8 text-orwell-light">
            <EditableText
              value="Who controls the past controls the future; who controls the present controls the past."
              storageKey="landing-quote"
              className="block"
              tag="div"
            />
            <span className="block text-sm mt-2 text-gray-400">— George Orwell, 1984</span>
          </div>

          <div className="max-w-3xl mx-auto text-lg text-orwell-light mb-12 leading-relaxed">
            <p className="mb-4">
              <EditableText
                value="In George Orwell's 1984, the Ministry of Truth controlled reality by controlling language and information. The regime didn't just lie—it made truth impossible to express."
                storageKey="landing-para-1"
                className="text-orwell-light"
                tag="span"
              />
            </p>
            <p className="mb-4">
              <EditableText
                value="Hasbara"
                storageKey="landing-hasbara-term"
                className="text-hasbara-red font-bold"
                tag="strong"
              />
              {' '}
              <EditableText
                value={(String.raw`(Hebrew: הסברה‎) means "explanation" but refers to Israel's public relations and propaganda apparatus. Like Orwell's Ministry, it doesn't just tell a story—it controls what story can be told.`)}
                storageKey="landing-para-2"
                className="text-orwell-light"
                tag="span"
              />
            </p>
            <p>
              <EditableText
                value="This exhibit explores the propaganda techniques used to shape public perception of Israel's actions, particularly in Gaza, through the lens of Orwell's warnings about language and power."
                storageKey="landing-para-3"
                className="text-orwell-light"
                tag="span"
              />
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link to="/language" className="btn-primary inline-block text-lg">
              Begin Exhibit →
            </Link>
          </motion.div>
        </motion.div>

        {/* Section Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <Link to={section.path}>
                <div className="card hover:border-2 hover:border-hasbara-red transition-all duration-300">
                  <div className="text-4xl mb-3">{section.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    <EditableText
                      value={section.title}
                      storageKey={`landing-section-${index}-title`}
                      className="text-white font-bold"
                      tag="span"
                    />
                  </h3>
                  <p className="text-orwell-light">
                    <EditableText
                      value={section.description}
                      storageKey={`landing-section-${index}-desc`}
                      className="text-orwell-light"
                      tag="span"
                    />
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Warning/Context Box */}
        <motion.div
          className="bg-orwell-gray border-l-4 border-hasbara-red p-6 rounded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-3 text-hasbara-red">⚠️ About This Exhibit</h3>
          <p className="text-orwell-light mb-2">
            <EditableText
              value="This is an educational project about propaganda techniques and media literacy. It examines how language is used to shape perception of the Israeli-Palestinian conflict, particularly regarding Gaza."
              storageKey="landing-about-para-1"
              className="text-orwell-light"
              tag="span"
            />
          </p>
          <p className="text-orwell-light">
            <EditableText
              value="All examples are presented for critical analysis under fair use. This project does not endorse violence by any party. It advocates for honest language, media literacy, and recognition of all human lives."
              storageKey="landing-about-para-2"
              className="text-orwell-light"
              tag="span"
            />
          </p>
        </motion.div>
      </div>
    </div>
  );
}

