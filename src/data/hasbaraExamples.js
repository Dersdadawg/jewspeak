// Language Examples - Newspeak in the 21st Century
export const languageExamples = [
  {
    id: 1,
    hasbaraTerm: "Precision Strike",
    orwellEquivalent: "Selective Bombing",
    realMeaning: "Bombing campaign that kills civilians alongside claimed military targets",
    explanation: "This euphemism reframes aerial bombardment as surgical and careful, obscuring civilian casualties and widespread destruction."
  },
  {
    id: 2,
    hasbaraTerm: "Human Shields",
    orwellEquivalent: "Civilian Population",
    realMeaning: "Justification for bombing populated areas",
    explanation: "Shifts blame for civilian deaths from the attacker to the defenders, implying that presence of civilians makes military action acceptable."
  },
  {
    id: 3,
    hasbaraTerm: "Mowing the Lawn",
    orwellEquivalent: "Periodic Military Operations",
    realMeaning: "Recurring military campaigns against Gaza's population",
    explanation: "Reduces human lives to weeds to be periodically eliminated, normalizing cyclical violence."
  },
  {
    id: 4,
    hasbaraTerm: "The Only Democracy in the Middle East",
    orwellEquivalent: "Democratic State",
    realMeaning: "Democracy for Jewish citizens while millions live under military occupation",
    explanation: "Emphasizes democratic institutions for some while obscuring the reality of occupation and apartheid conditions."
  },
  {
    id: 5,
    hasbaraTerm: "Self-Defense",
    orwellEquivalent: "Military Response",
    realMeaning: "Military operations in occupied territory against an occupied population",
    explanation: "Frames actions of an occupying power as defensive, reversing the actual power dynamic."
  },
  {
    id: 6,
    hasbaraTerm: "Disputed Territories",
    orwellEquivalent: "Occupied Land",
    realMeaning: "Palestinian land under Israeli military control, recognized as occupied by international law",
    explanation: "Creates false equivalence and uncertainty about internationally recognized occupation."
  },
  {
    id: 7,
    hasbaraTerm: "Neighborhood Procedure",
    orwellEquivalent: "Using Civilians as Human Shields",
    realMeaning: "Forcing Palestinian civilians to enter homes before soldiers during raids",
    explanation: "Bureaucratic language that obscures the practice of using civilians to reduce risk to soldiers."
  },
  {
    id: 8,
    hasbaraTerm: "Administrative Detention",
    orwellEquivalent: "Imprisonment Without Trial",
    realMeaning: "Indefinite detention of Palestinians without charges or trial",
    explanation: "Clinical term that normalizes imprisonment without due process."
  }
];

// Media Examples - Social Media Hasbara
export const mediaExamples = [
  {
    id: 1,
    platform: "Twitter/X",
    theme: "Humanitarian Framing",
    caption: "Israel sends medical aid trucks to Gaza civilians while Hamas hides weapons in hospitals",
    explanation: "Juxtaposes claimed humanitarian action with accusation against Hamas, creating a moral contrast while omitting context of blockade and overall destruction.",
    emotionalAppeal: "Compassion",
    omissions: "Scale of destruction, blockade conditions, verification of claims"
  },
  {
    id: 2,
    platform: "Instagram",
    theme: "Victimhood Framing",
    caption: "Never Again means we will defend ourselves. 🇮🇱 #October7 #NeverForget",
    explanation: "Invokes Holocaust trauma to justify current military actions, positioning Israel as perpetual victim despite being the dominant military power.",
    emotionalAppeal: "Historical trauma, fear",
    omissions: "Context of occupation, power asymmetry, Palestinian casualties"
  },
  {
    id: 3,
    platform: "TikTok",
    theme: "Defensive Framing",
    caption: "What would your country do if thousands of rockets were fired at your cities?",
    explanation: "Rhetorical question that presents Israeli actions as inevitable and reasonable, while removing all context of occupation and blockade.",
    emotionalAppeal: "Empathy through hypothetical",
    omissions: "Military occupation, power imbalance, root causes"
  },
  {
    id: 4,
    platform: "Twitter/X",
    theme: "Dehumanization",
    caption: "IDF eliminates terrorist cell planning attacks on Israeli civilians",
    explanation: "Uses 'eliminates' and 'terrorist cell' to dehumanize victims and justify killings without evidence or trial.",
    emotionalAppeal: "Fear, security",
    omissions: "Identity of victims, evidence, civilian status, due process"
  },
  {
    id: 5,
    platform: "Instagram",
    theme: "Moral Superiority",
    caption: "While Hamas teaches children to hate, Israel educates for peace and coexistence",
    explanation: "Creates binary moral framework that portrays Israel as civilized and Palestinians as barbaric, ignoring Israeli military education and occupation.",
    emotionalAppeal: "Cultural superiority",
    omissions: "Israeli military education, occupation's impact on children, Palestinian peace efforts"
  },
  {
    id: 6,
    platform: "Facebook",
    theme: "False Equivalence",
    caption: "Both sides have suffered. It's time for both sides to want peace.",
    explanation: "Implies equal responsibility and equal suffering, obscuring the massive power imbalance and asymmetric casualties.",
    emotionalAppeal: "Desire for neutrality",
    omissions: "Power dynamics, casualty ratios, occupation status"
  },
  {
    id: 7,
    platform: "Twitter/X",
    theme: "Evidence Manipulation",
    caption: "Satellite images prove Hamas command center under hospital",
    explanation: "Presents images as definitive proof without independent verification, using technology's authority to legitimize claims.",
    emotionalAppeal: "Trust in technology",
    omissions: "Independent verification, alternative explanations, track record of false claims"
  },
  {
    id: 8,
    platform: "Instagram",
    theme: "Strawman Argument",
    caption: "Anti-Zionism is antisemitism. To deny Israel's right to exist is to call for another Holocaust.",
    explanation: "Conflates criticism of state policy with racism, shutting down legitimate political discourse.",
    emotionalAppeal: "Fear of antisemitism",
    omissions: "Distinction between state critique and racism, Jewish anti-Zionist voices"
  }
];

// Interactive Quiz Data
export const quizData = [
  {
    id: 1,
    statement: "Israel has the most moral army in the world, taking unprecedented steps to avoid civilian casualties.",
    isHasbara: true,
    explanation: "This is classic hasbara. The phrase 'most moral army in the world' is a propaganda slogan used to preempt criticism. While framed as fact, it's an unprovable moral claim that serves to deflect accountability.",
    indicators: ["Superlative claim", "Moral framing", "No verifiable metric", "Official talking point"]
  },
  {
    id: 2,
    statement: "The UN reports that over 10,000 children have been killed in Gaza since October 2023.",
    isHasbara: false,
    explanation: "This is a verifiable factual statement from the United Nations, reported by international organizations. Facts that are uncomfortable are not propaganda.",
    indicators: ["Attributable source", "Verifiable data", "Widely reported by independent media"]
  },
  {
    id: 3,
    statement: "Hamas uses Palestinian civilians as human shields, which is why so many die in Israeli operations.",
    isHasbara: true,
    explanation: "While Hamas operates in densely populated areas (Gaza is one of the most densely populated places on Earth), this framing shifts moral responsibility for civilian deaths from the attacker to the defenders. It suggests that civilian presence justifies bombing them.",
    indicators: ["Shifts blame", "Justifies civilian casualties", "Ignores context of geography", "Repeated official narrative"]
  },
  {
    id: 4,
    statement: "Both Israelis and Palestinians deserve to live in peace and security.",
    isHasbara: false,
    explanation: "This is a genuine statement of principle that doesn't advance a specific political narrative or obscure power dynamics. However, similar language CAN be hasbara when used to create false equivalence about suffering or responsibility.",
    indicators: ["Principle statement", "No blame shifting", "Acknowledges both peoples"]
  },
  {
    id: 5,
    statement: "Gaza is an open-air prison where movement, resources, and economy are controlled by Israel.",
    isHasbara: false,
    explanation: "This is a characterization used by human rights organizations, UN officials, and observers to describe the conditions of the 17-year blockade. It's a political statement but based on documented restrictions.",
    indicators: ["Used by human rights organizations", "Describes documented conditions", "Widely verified restrictions"]
  },
  {
    id: 6,
    statement: "Israel withdrew from Gaza in 2005, so there is no occupation. Any problems are Hamas's fault.",
    isHasbara: true,
    explanation: "This talking point ignores that Israel maintains control over Gaza's borders, airspace, waters, population registry, and economy. International law and the UN still consider Gaza occupied. This framing absolves Israel of responsibility.",
    indicators: ["Selective facts", "Ignores continued control", "Absolves responsibility", "Official talking point"]
  },
  {
    id: 7,
    statement: "Palestinians celebrated in the streets after 9/11.",
    isHasbara: true,
    explanation: "This is a propaganda narrative based on a small, decontextualized clip shown repeatedly. It's used to paint Palestinians as inherently hateful, ignoring that Yasser Arafat condemned the attacks and Palestinians donated blood for victims.",
    indicators: ["Decontextualized imagery", "Generalizes entire population", "Ignores contradicting evidence", "Appeals to post-9/11 fears"]
  },
  {
    id: 8,
    statement: "Amnesty International and Human Rights Watch have both published reports documenting Israeli apartheid.",
    isHasbara: false,
    explanation: "This is a verifiable fact. Multiple international human rights organizations have published detailed reports concluding that Israel practices apartheid. One can disagree with their conclusions, but the existence of the reports is factual.",
    indicators: ["Verifiable fact", "Multiple independent sources", "Detailed documentation"]
  },
  {
    id: 9,
    statement: "If Palestinians would just stop teaching their children to hate, there would be peace.",
    isHasbara: true,
    explanation: "This orientalist narrative places sole responsibility on Palestinians while ignoring the occupation, Israeli military education, settler violence, and structural oppression. It suggests the problem is cultural rather than political.",
    indicators: ["One-sided blame", "Cultural essentialism", "Ignores structural issues", "Infantilizes Palestinians"]
  },
  {
    id: 10,
    statement: "This conflict is complicated and has been going on for thousands of years.",
    isHasbara: true,
    explanation: "While often said with good intentions, this is a hasbara talking point. The Israeli-Palestinian conflict began in the 20th century with Zionist colonization. Framing it as ancient and incomprehensible obscures clear historical facts and present realities.",
    indicators: ["False historical framing", "Creates confusion", "Discourages learning", "Deflects from current policies"]
  }
];

// Analysis Page Data
export const propagandaTechniques = [
  {
    id: 1,
    technique: "Euphemistic Language",
    orwellianConcept: "Newspeak",
    description: "Using sanitized terms to make violence and oppression sound acceptable",
    examples: ["'Targeted killings' instead of 'assassinations'", "'Settlements' instead of 'illegal colonies'", "'Conflict' instead of 'occupation'"]
  },
  {
    id: 2,
    technique: "Victimhood Narratives",
    orwellianConcept: "Doublethink",
    description: "Positioning the powerful as victims to justify violence against the powerless",
    examples: ["Invoking Holocaust while committing atrocities", "'Defending ourselves' while occupying", "'Under attack' while being the dominant military power"]
  },
  {
    id: 3,
    technique: "Dehumanization",
    orwellianConcept: "Unpersons",
    description: "Removing humanity from the enemy to make violence acceptable",
    examples: ["'Terrorist' applied to all resistance", "'Human animals'", "Body counts without names or stories"]
  },
  {
    id: 4,
    technique: "Information Control",
    orwellianConcept: "Ministry of Truth",
    description: "Controlling narrative by restricting journalist access and flooding with official narratives",
    examples: ["Killing journalists (100+ in Gaza)", "Restricting foreign press access", "Coordinated social media campaigns"]
  },
  {
    id: 5,
    technique: "Historical Revisionism",
    orwellianConcept: "Memory Hole",
    description: "Erasing or rewriting inconvenient history",
    examples: ["Nakba denial", "'Land without a people for a people without a land'", "Erasing Palestinian villages and histories"]
  },
  {
    id: 6,
    technique: "False Equivalence",
    orwellianConcept: "Doublethink",
    description: "Creating moral equivalence between occupier and occupied, powerful and powerless",
    examples: ["'Both sides' rhetoric", "Equating resistance with occupation", "Comparing casualties as if equal"]
  }
];

// Word frequency data for Analysis page
export const propagandaKeywords = [
  { word: "terrorist/terrorism", frequency: 156, context: "Applied broadly to Palestinian resistance" },
  { word: "self-defense", frequency: 89, context: "Justifying military operations in occupied territory" },
  { word: "human shields", frequency: 67, context: "Justifying civilian casualties" },
  { word: "precision/surgical", frequency: 54, context: "Describing bombing campaigns" },
  { word: "moral army", frequency: 43, context: "Preempting accountability" },
  { word: "right to exist", frequency: 38, context: "Conflating state with people" },
  { word: "complex/complicated", frequency: 34, context: "Discouraging critical analysis" },
  { word: "disputed territories", frequency: 29, context: "Obscuring illegal occupation" },
  { word: "demographic threat", frequency: 22, context: "Justifying discriminatory policies" },
  { word: "Judeo-Christian", frequency: 18, context: "Appealing to Western audiences" }
];

