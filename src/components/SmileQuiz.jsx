import React, { useState } from 'react';
import { X, ChevronRight, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import './SmileQuiz.css';

const QUESTIONS = [
    {
        id: 'patient_type',
        text: "Who are we transforming today?",
        options: [
            { label: "Myself (Adult/Teen)", value: 'adult', tags: ['aligner', 'braces'] },
            { label: "My Child (Under 12)", value: 'child', tags: ['child'] }
        ]
    },
    {
        id: 'concern',
        text: "What is your main concern?",
        options: [
            { label: "Crowded / Crooked Teeth", value: 'crowding', tags: ['aligner', 'braces'] },
            { label: "Gaps / Spacing", value: 'gaps', tags: ['aligner', 'braces'] },
            { label: "Bite Issues (Overbite/Underbite)", value: 'bite', tags: ['braces', 'aligner'] },
            { label: "Just want a Perfect Smile", value: 'cosmetic', tags: ['aligner'] }
        ]
    },
    {
        id: 'visibility',
        text: "How important is 'invisibility' to you?",
        options: [
            { label: "Very Important (Nobody should know)", value: 'invisible', tags: ['aligner'] },
            { label: "Somewhat (Ceramic is okay)", value: 'somewhat', tags: ['braces', 'aligner'] },
            { label: "Not Important (Results matter most)", value: 'visible', tags: ['braces'] }
        ]
    },
    {
        id: 'lifestyle',
        text: "Will you remember to wear trays for 22 hours/day?",
        options: [
            { label: "Yes, I am very disciplined", value: 'disciplined', tags: ['aligner'] },
            { label: "Honestly, I might forget/lose them", value: 'forgetful', tags: ['braces'] }
        ]
    }
];

const SmileQuiz = ({ isOpen, onClose, onBook }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState(null);

    const handleAnswer = (option) => {
        const newAnswers = { ...answers, [QUESTIONS[currentIndex].id]: option };
        setAnswers(newAnswers);

        // Child Logic: Immediate Exit
        if (QUESTIONS[currentIndex].id === 'patient_type' && option.value === 'child') {
            setResult({
                title: "Early Orthodontics",
                description: "For children under 12, we recommend a growth checkup to catch issues early. Simple interceptive treatments can work wonders now!",
                treatment: "Kids Orthodontics"
            });
            setShowResult(true);
            return;
        }

        if (currentIndex < QUESTIONS.length - 1) {
            setTimeout(() => setCurrentIndex(currentIndex + 1), 300);
        } else {
            calculateResult(newAnswers);
        }
    };

    const calculateResult = (finalAnswers) => {
        let alignerScore = 0;
        let bracesScore = 0;

        // Simply tallying based on previous logic maps
        // Visibility
        if (finalAnswers.visibility?.value === 'invisible') alignerScore += 2;
        if (finalAnswers.visibility?.value === 'visible') bracesScore += 2;

        // Lifestyle
        if (finalAnswers.lifestyle?.value === 'disciplined') alignerScore += 2;
        if (finalAnswers.lifestyle?.value === 'forgetful') bracesScore += 3; // strong weight

        // Concern
        if (finalAnswers.concern?.value === 'bite') bracesScore += 1;

        let outcome = {};
        if (bracesScore > alignerScore) {
            outcome = {
                title: "Ceramic / Metal Braces",
                description: "Based on your lifestyle and goals, fixed braces might be the most efficient path to your perfect smile. We offer modern, aesthetic options!",
                treatment: "Aesthetic Braces"
            };
        } else {
            outcome = {
                title: "Clear Aligners",
                description: "You are a great candidate for Invisible Aligners! Enjoy the freedom of removable trays while achieving that dream smile.",
                treatment: "Clear Aligners"
            };
        }
        setResult(outcome);
        setShowResult(true);
    };

    const resetQuiz = () => {
        setCurrentIndex(0);
        setAnswers({});
        setShowResult(false);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="quiz-overlay">
                <motion.div
                    className="quiz-container"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, y: 50 }}
                >
                    <button className="quiz-close" onClick={onClose}><X /></button>

                    {!showResult ? (
                        <div className="quiz-content">
                            <div className="quiz-progress-bar">
                                <div
                                    className="quiz-progress-fill"
                                    style={{ width: `${((currentIndex + 1) / QUESTIONS.length) * 100}%` }}
                                ></div>
                            </div>

                            <motion.div
                                key={currentIndex}
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -20, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="quiz-question">{QUESTIONS[currentIndex].text}</h2>
                                <div className="quiz-options">
                                    {QUESTIONS[currentIndex].options.map((option, idx) => (
                                        <button
                                            key={idx}
                                            className="quiz-option-btn"
                                            onClick={() => handleAnswer(option)}
                                        >
                                            {option.label} <ChevronRight size={16} />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ) : (
                        <div className="quiz-result">
                            <div className="result-icon"><Sparkles size={40} /></div>
                            <h3>We Recommend:</h3>
                            <h1 className="result-title">{result.title}</h1>
                            <p className="result-description">{result.description}</p>

                            <Button
                                variant="primary"
                                onClick={() => {
                                    onBook(`Quiz Result: ${result.treatment}`);
                                    onClose();
                                }}
                                className="w-full"
                            >
                                Book Free Consultation
                            </Button>

                            <button className="quiz-reset" onClick={resetQuiz}>Start Over</button>
                        </div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default SmileQuiz;
