import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizData } from '../data/hasbaraExamples';
import EditableText from '../components/EditableText';

export default function InteractivePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [shuffledQuiz, setShuffledQuiz] = useState([]);

  useEffect(() => {
    // Shuffle quiz on mount
    const shuffled = [...quizData].sort(() => Math.random() - 0.5);
    setShuffledQuiz(shuffled);
    
    // Load saved progress
    const saved = localStorage.getItem('hasbaraQuizProgress');
    if (saved) {
      const { score: savedScore, currentQuestion: savedQuestion } = JSON.parse(saved);
      if (savedQuestion < quizData.length) {
        setScore(savedScore);
        setCurrentQuestion(savedQuestion);
      }
    }
  }, []);

  useEffect(() => {
    // Save progress
    if (!quizComplete) {
      localStorage.setItem('hasbaraQuizProgress', JSON.stringify({
        score,
        currentQuestion
      }));
    }
  }, [score, currentQuestion, quizComplete]);

  const handleAnswer = (answer) => {
    if (selectedAnswer !== null) return; // Already answered
    
    setSelectedAnswer(answer);
    const isCorrect = answer === shuffledQuiz[currentQuestion].isHasbara;
    
    if (isCorrect) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }
    
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion < shuffledQuiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
      localStorage.removeItem('hasbaraQuizProgress');
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore({ correct: 0, incorrect: 0 });
    setSelectedAnswer(null);
    setShowExplanation(false);
    setQuizComplete(false);
    const shuffled = [...quizData].sort(() => Math.random() - 0.5);
    setShuffledQuiz(shuffled);
    localStorage.removeItem('hasbaraQuizProgress');
  };

  if (shuffledQuiz.length === 0) {
    return <div className="page-container">Loading...</div>;
  }

  if (quizComplete) {
    const percentage = Math.round((score.correct / shuffledQuiz.length) * 100);
    const totalQuestions = shuffledQuiz.length;

    return (
      <div className="page-container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Quiz Complete!
            </h1>

            <div className="card mb-8">
              <div className="text-6xl mb-4">
                {percentage >= 80 ? '🎯' : percentage >= 60 ? '👍' : '🤔'}
              </div>
              <h2 className="text-3xl font-bold text-hasbara-red mb-4">
                {score.correct} / {totalQuestions} Correct
              </h2>
              <div className="text-2xl text-orwell-light mb-2">
                {percentage}% Accuracy
              </div>
              
              <div className="mt-6 text-left">
                <p className="text-orwell-light mb-3">
                  {percentage >= 80 && "Excellent work! You have a strong ability to identify propaganda techniques."}
                  {percentage >= 60 && percentage < 80 && "Good job! You're developing critical media literacy skills."}
                  {percentage < 60 && "Keep learning! Recognizing propaganda takes practice and awareness."}
                </p>
              </div>
            </div>

            <div className="bg-hasbara-red bg-opacity-10 border-2 border-hasbara-red p-6 rounded-lg mb-8 text-left">
              <h3 className="text-xl font-bold mb-3 text-hasbara-red">
                💭 Final Reflection
              </h3>
              <p className="text-orwell-light mb-3">
                <EditableText
                  value="Propaganda controls what questions you're allowed to ask."
                  storageKey="interactive-reflection-1"
                  className="text-orwell-light"
                  tag="span"
                />
              </p>
              <p className="text-orwell-light mb-3">
                <EditableText
                  value="When you see news about Israel/Palestine, don't just ask 'Is this true?' Ask:"
                  storageKey="interactive-reflection-2"
                  className="text-orwell-light"
                  tag="span"
                />
              </p>
              <ul className="text-orwell-light space-y-2 ml-4">
                <li>• Who benefits from this framing?</li>
                <li>• What's being left out?</li>
                <li>• What would I think if the countries were reversed?</li>
                <li>• Am I being asked to accept contradictions?</li>
                <li>• Does this language obscure violence or responsibility?</li>
              </ul>
              <p className="text-orwell-light mt-4 italic">
                "In a time of deceit, telling the truth is a revolutionary act." — Often attributed to Orwell
              </p>
            </div>

            <button onClick={handleRestart} className="btn-primary text-lg">
              Take Quiz Again
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  const question = shuffledQuiz[currentQuestion];
  const progress = ((currentQuestion + 1) / shuffledQuiz.length) * 100;

  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title text-center">
            <EditableText
              value="Can You Spot the Hasbara?"
              storageKey="interactive-title"
              className="text-white"
              tag="span"
            />
          </h1>

          <div className="mb-8 text-center text-orwell-light">
            <p className="text-lg mb-4">
              <EditableText
                value="Test your ability to distinguish between propaganda and factual statements."
                storageKey="interactive-intro-1"
                className="text-orwell-light"
                tag="span"
              />
            </p>
            <p className="text-sm text-gray-400">
              <EditableText
                value="Not all uncomfortable facts are propaganda, and not all comfortable statements are true."
                storageKey="interactive-intro-2"
                className="text-gray-400"
                tag="span"
              />
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-orwell-light mb-2">
              <span>Question {currentQuestion + 1} of {shuffledQuiz.length}</span>
              <span>Score: {score.correct} correct, {score.incorrect} incorrect</span>
            </div>
            <div className="w-full bg-orwell-dark rounded-full h-3">
              <motion.div
                className="bg-hasbara-red h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="card mb-6"
            >
              <div className="text-xl text-white leading-relaxed mb-6 p-4 bg-orwell-dark rounded">
                "{question.statement}"
              </div>

              {/* Answer Buttons */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  onClick={() => handleAnswer(true)}
                  disabled={selectedAnswer !== null}
                  className={`p-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    selectedAnswer === null
                      ? 'bg-orwell-gray text-white hover:bg-hasbara-red hover:scale-105'
                      : selectedAnswer === true
                      ? question.isHasbara
                        ? 'bg-green-600 text-white'
                        : 'bg-red-600 text-white'
                      : 'bg-orwell-gray text-gray-500 opacity-50'
                  }`}
                >
                  This is Hasbara
                  {selectedAnswer === true && (
                    <div className="text-2xl mt-2">
                      {question.isHasbara ? '✓' : '✗'}
                    </div>
                  )}
                </button>

                <button
                  onClick={() => handleAnswer(false)}
                  disabled={selectedAnswer !== null}
                  className={`p-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    selectedAnswer === null
                      ? 'bg-orwell-gray text-white hover:bg-blue-600 hover:scale-105'
                      : selectedAnswer === false
                      ? !question.isHasbara
                        ? 'bg-green-600 text-white'
                        : 'bg-red-600 text-white'
                      : 'bg-orwell-gray text-gray-500 opacity-50'
                  }`}
                >
                  This is Not Hasbara
                  {selectedAnswer === false && (
                    <div className="text-2xl mt-2">
                      {!question.isHasbara ? '✓' : '✗'}
                    </div>
                  )}
                </button>
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className={`p-6 rounded-lg ${
                      selectedAnswer === question.isHasbara
                        ? 'bg-green-900 bg-opacity-30 border-2 border-green-600'
                        : 'bg-red-900 bg-opacity-30 border-2 border-red-600'
                    }`}>
                      <h3 className="text-xl font-bold mb-3 text-white">
                        {selectedAnswer === question.isHasbara ? '✓ Correct!' : '✗ Incorrect'}
                      </h3>
                      <p className="text-orwell-light mb-4">{question.explanation}</p>
                      
                      <div className="bg-orwell-dark p-4 rounded">
                        <div className="text-sm font-semibold text-hasbara-red mb-2">
                          Key Indicators:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {question.indicators.map((indicator, i) => (
                            <span
                              key={i}
                              className="text-xs bg-orwell-gray px-3 py-1 rounded-full text-orwell-light"
                            >
                              {indicator}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleNext}
                      className="btn-primary w-full mt-4"
                    >
                      {currentQuestion < shuffledQuiz.length - 1 ? 'Next Question →' : 'See Results'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>

          {/* Help Box */}
          {!showExplanation && (
            <div className="bg-orwell-gray p-4 rounded text-sm text-orwell-light">
              <strong className="text-hasbara-red">💡 Tip:</strong> <EditableText
                value="Consider the source, emotional appeal, omissions, and whether verifiable facts are provided."
                storageKey="interactive-tip"
                className="text-orwell-light"
                tag="span"
              />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}



