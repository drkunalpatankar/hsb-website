import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import Button from './ui/Button';
import { motion } from 'framer-motion';

const Hero = () => {
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
                <div className="hero__grid">
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
                            <Link to="/contact">
                                <Button variant="primary">Book Consultation</Button>
                            </Link>
                            <Link to="/treatments">
                                <Button variant="outline">Explore Treatments</Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Desktop Hero Image */}
                    <motion.div
                        className="hero__visual"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="hero__image-frame">
                            <img src="/images/hero-smile.png" alt="Perfect Smile" className="hero__img" />

                            {/* Floating Badge */}
                            <div className="hero__badge">
                                <div className="hero__badge-icon">✨</div>
                                <div>
                                    <span className="hero__badge-title">500+</span>
                                    <span className="hero__badge-desc">Smiles Transformed</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
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
