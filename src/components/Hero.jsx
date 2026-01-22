import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import Button from './ui/Button';
import { motion } from 'framer-motion';
import { useBooking } from '../context/BookingContext';

const Hero = () => {
    const { openBooking, openQuiz } = useBooking();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="hero gradient-mesh">
            {/* Simple floating elements - CSS only, no JS */}
            <div className="hero__floating-elements">
                <div className="floating-orb floating-orb--1" />
                <div className="floating-orb floating-orb--2" />
            </div>

            <div className="container hero__container">
                {/* Main Left Content */}
                <motion.div
                    className="hero__content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 className="hero__title" variants={itemVariants}>
                        Because every smile has a <span className="text-highlight">story</span> worth perfecting.
                    </motion.h1>

                    <motion.p className="hero__subtitle" variants={itemVariants}>
                        Evidence-based orthodontics for all ages, delivered with clinical precision and emotional warmth.
                    </motion.p>

                    <motion.div className="hero__actions" variants={itemVariants}>
                        <div onClick={openBooking}>
                            <Button variant="primary">Book Consultation</Button>
                        </div>
                        <div onClick={openQuiz} className="hero__mobile-only-btn">
                            <Button variant="outline">Take Smile Quiz 🧩</Button>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Desktop-only Quiz Teaser Card (Right Side) */}
                <motion.div
                    className="hero__quiz-teaser"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        y: [0, -12, 0]
                    }}
                    transition={{
                        opacity: { delay: 0.5, duration: 0.8 },
                        x: { delay: 0.5, duration: 0.8 },
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                >
                    <div className="teaser-content">
                        <motion.div
                            className="teaser-icon"
                            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            🧩
                        </motion.div>
                        <h3>Not sure what you need?</h3>
                        <p>Take our 30-second assessment to find your perfect match.</p>
                        <button onClick={openQuiz} className="btn-teaser">
                            Start Smile Quiz →
                        </button>
                    </div>
                    <div className="teaser-glow"></div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero__scroll-indicator">
                <div className="scroll-mouse">
                    <div className="scroll-wheel" />
                </div>
                <span>Scroll to explore</span>
            </div>
        </section>
    );
};

export default Hero;
