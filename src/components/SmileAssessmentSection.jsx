import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import { useBooking } from '../context/BookingContext';
import './SmileAssessmentSection.css';

const SmileAssessmentSection = () => {
    const { openQuiz } = useBooking();

    return (
        <section className="smile-assessment-section">
            <div className="container">
                <div className="assessment-card">
                    <div className="assessment-content">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="assessment-badge">
                                <Sparkles size={16} /> Free Self-Evaluation
                            </div>
                            <h2>Not sure which treatment is right for you?</h2>
                            <p>Take our 30-second "Smile Quiz" to find out if you are a better candidate for <strong>Invisible Aligners</strong> or <strong>Advanced Braces</strong>.</p>

                            <Button variant="primary" onClick={openQuiz} className="btn-assessment">
                                Start Assessment <ArrowRight size={18} />
                            </Button>
                        </motion.div>
                    </div>

                    {/* Decorative visual on the right (handled by CSS background or simple shape) */}
                    <div className="assessment-visual">
                        <div className="visual-circle"></div>
                        <div className="visual-icon">?</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SmileAssessmentSection;
