import { motion } from 'framer-motion';
import EditableText from '../components/EditableText';

export default function AboutPage() {
  const sources = [
    {
      category: "Books & Academic Works",
      items: [
        "Orwell, George. *1984*",
        "Pappé, Ilan. *The Ethnic Cleansing of Palestine*",
        "Said, Edward. *Covering Islam: How the Media and the Experts Determine How We See the Rest of the World*",
        "Herman, Edward S. and Noam Chomsky. *Manufacturing Consent: The Political Economy of the Mass Media*.",
      ]
    },
    {
      category: "Human Rights Reports",
      items: [
        "Amnesty International. *Israel's Apartheid Against Palestinians*. 2022.",
        "Human Rights Watch. *A Threshold Crossed: Israeli Authorities and the Crimes of Apartheid and Persecution*. 2021.",
        "B'Tselem. *A Regime of Jewish Supremacy from the Jordan River to the Mediterranean Sea: This is Apartheid*. 2021.",
        "United Nations Office for the Coordination of Humanitarian Affairs (OCHA). Various Gaza reports, 2023-2024.",
      ]
    },
    {
      category: "Journalism & Media Analysis",
      items: [
        "Committee to Protect Journalists (CPJ), 2023-2024.",
        "Al Jazeera, BBC, The Guardian, The New York Times",
        "The Intercept. Reporting on Israeli propaganda efforts and U.S. media bias.",
        "+972 Magazine. Israeli and Palestinian journalism on occupation and apartheid",
        "Haaretz. Left-wing Israeli newspaper critical of the government",
      ]
    },
    {
      category: "Hasbara Analysis",
      items: [
        "Media Education Foundation. Various documentaries on media representation of Palestine.",
        "Electronic Intifada. Analysis of Israeli propaganda campaigns and media manipulation.",
        "Documentation of Act.IL app and coordinated social media campaigns.",
        "Academic papers on Israeli public diplomacy and strategic communication.",
      ]
    }
  ];

  return (
    <div className="page-container">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title">
            <EditableText
              value="About This Project"
              storageKey="about-title"
              className="text-white"
              tag="span"
            />
          </h1>

          {/* Purpose Section */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              <EditableText
                value="Purpose & Intent"
                storageKey="about-purpose-title"
                className="text-white"
                tag="span"
              />
            </h2>
            <div className="text-orwell-light space-y-4">
              <p>
                <strong className="text-hasbara-red">The Ministry of Hasbara</strong> <EditableText
                  value="is an educational project about propaganda and the power of language. It examines how Israeli hasbara employs techniques that George Orwell warned about in 1984."
                  storageKey="about-purpose-1"
                  className="text-orwell-light"
                  tag="span"
                />
              </p>
              <p>
                <EditableText
                  value="This project is not about 'both sides' of a 'conflict.' It is about recognizing propaganda when one side has overwhelming power, and uses that power to control the narrative and language."
                  storageKey="about-purpose-2"
                  className="text-orwell-light"
                  tag="span"
                />
              </p>
              <p>
                <strong>This project advocates for:</strong>
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Honest language the genocide</li>
                <li>Media literacy</li>
                <li>Recognition of all human lives as equally valuable</li>
                <li>The right of people to resist oppression</li>
                <li>Freedom for Palestine</li>
              </ul>
            </div>
          </div>

          {/* Ethical Disclaimer */}
          <div className="bg-hasbara-red bg-opacity-10 border-2 border-hasbara-red p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-hasbara-red mb-4">⚠️ Ethical Disclaimer</h2>
            <div className="text-orwell-light space-y-3">
              <p>
                <strong>Content & Fair Use:</strong> All media examples, quotes, and materials are presented 
                for educational and critical analysis purposes under fair use doctrine. No graphic violence or 
                imagery is displayed.
              </p>
              <p>
                <strong>Antisemitism:</strong> This project critiques Israeli state actions and propaganda. 
                Criticism of a state is not racism or hatred. Many of the sources cited are Jewish scholars, journalists, 
                and human rights organizations. Conflating criticism of Israel with antisemitism is itself hasbara.
              </p>
              <p>
                <strong>Violence:</strong> This project does not endorse violence by any party. It recognizes 
                the right to resist occupation while insisting on honest language about who really is killing whom.
              </p>
              <p>
                <strong>Accuracy:</strong> Every effort has been made to ensure factual accuracy. All claims 
                are based on reports from human rights organizations, journalists, and academic sources. 
                Any errors will be corrected upon notification.
              </p>
            </div>
          </div>

          {/* What is Hasbara */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              <EditableText
                value="What is Hasbara?"
                storageKey="about-hasbara-title"
                className="text-white"
                tag="span"
              />
            </h2>
            <div className="text-orwell-light space-y-4">
              <p>
                <strong className="text-hasbara-red">Hasbara</strong> (הסברה‎) is Hebrew for "explanation" 
                but refers to Israel's coordinated public relations and propaganda efforts to shape international 
                perception of its policies and actions.
              </p>
              <p>
                Unlike traditional state media, Hasbara operates through:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Coordinated social media campaigns (e.g., Act.IL app)</li>
                <li>Training programs for students and activists</li>
                <li>Strategic partnerships with tech companies and social media platforms</li>
                <li>Talking points distributed to officials, influencers, and media</li>
                <li>Suppression of critical voices through accusations of antisemitism</li>
                <li>Control of journalist access to conflict zones</li>
              </ul>
            </div>
          </div>

          {/* Sources & Further Reading */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Sources & Further Reading</h2>
            {sources.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="card mb-6"
              >
                <h3 className="text-xl font-bold text-hasbara-red mb-3">{section.category}</h3>
                <ul className="text-orwell-light space-y-2 text-sm">
                  {section.items.map((item, i) => (
                    <li key={i} className="pl-4 border-l-2 border-orwell-light">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Additional Resources */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Learn More</h2>
            <div className="text-orwell-light space-y-3">
              <p>
                <strong className="text-hasbara-red">Media Literacy Resources:</strong>
              </p>
              <ul className="list-disc ml-6 space-y-1 text-sm">
                <li>News Literacy Project (newslit.org)</li>
                <li>FAIR - Fairness & Accuracy In Reporting (fair.org)</li>
                <li>Media Education Foundation (mediaed.org)</li>
              </ul>
              
              <p className="pt-3">
                <strong className="text-hasbara-red">Palestinian Perspectives:</strong>
              </p>
              <ul className="list-disc ml-6 space-y-1 text-sm">
                <li>Electronic Intifada (electronicintifada.net)</li>
                <li>Mondoweiss (mondoweiss.net)</li>
                <li>Palestinian Journalists on social media (follow their direct reporting)</li>
                <li>Institute for Middle East Understanding (imeu.org)</li>
              </ul>

              <p className="pt-3">
                <strong className="text-hasbara-red">Human Rights Organizations:</strong>
              </p>
              <ul className="list-disc ml-6 space-y-1 text-sm">
                <li>Amnesty International</li>
                <li>Human Rights Watch</li>
                <li>B'Tselem (Israeli human rights organization)</li>
                <li>Al-Haq (Palestinian human rights organization)</li>
              </ul>
            </div>
          </div>

          {/* Contact/Contribute */}
          <div className="bg-orwell-gray p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              <EditableText
                value="About the Creator"
                storageKey="about-creator-title"
                className="text-white"
                tag="span"
              />
            </h2>
            <p className="text-orwell-light mb-4">
              <EditableText
                value="This project was created as an educational tool to promote media literacy and critical thinking about propaganda. It is open-source and available for educational use."
                storageKey="about-creator-text"
                className="text-orwell-light"
                tag="span"
              />
            </p>
            <p className="text-sm text-gray-400">
              "If liberty means anything at all, it means the right to tell people what they do not want to hear." 
              — George Orwell
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}



