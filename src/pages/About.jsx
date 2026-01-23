import React from 'react';
import '../styles/pages.css';
import '../styles/about.css';
import '../components/Treatments.css';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { Heart, Sliders, Users, Clock, ShieldCheck, Microscope } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
    const aboutSchema = [
        {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Dr. Krutika Patankar",
            "description": "Learn about Dr. Krutika Patankar's evidence-based approach to orthodontics."
        },
        {
            "@context": "https://schema.org",
            "@type": "Physician",
            "name": "Dr. Krutika Patankar",
            "medicalSpecialty": "Orthodontics",
            "description": "Consultant Orthodontist & Dentofacial Orthopedist committed to evidence-based practice and patient-centric care.",
            "url": "https://heartstringsbraces.com/about",
            "worksFor": {
                "@type": "MedicalBusiness",
                "name": "Heartstrings & Braces"
            }
        }
    ];

    return (
        <motion.div
            className="page about-page"
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <SEO
                title="About Dr. Krutika Patankar | Orthodontist"
                description="Learn about Dr. Krutika Patankar's evidence-based approach to orthodontics. Masters in Orthodontics & Dentofacial Orthopedics."
                keywords="dr krutika patankar, orthodontist profile, heartstrings braces doctor, best orthodontist mumbai, dentofacial orthopedics"
                canonical="https://heartstringsbraces.com/about"
                schema={aboutSchema}
            />
            <section className="section page-header">
                <div className="container">
                    <motion.h1 className="page-title" variants={fadeInUp}>Our Philosophy</motion.h1>
                    <motion.p className="page-subtitle" variants={fadeInUp}>
                        Redefining orthodontics through patience, precision, and a deep respect for natural aesthetics.
                    </motion.p>
                </div>
            </section>

            {/* Core Ethos Section */}
            {/* Core Ethos Section (Split Screen) */}
            <section className="section">
                <div className="container">
                    <motion.div
                        className="about-split-section"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Left: Text Manifesto */}
                        <div className="about-split-text">
                            <h2 className="about-header-large">The Art of<br />Slow Dentistry</h2>
                            <p className="about-manifesto">
                                In a world that prioritizes speed, we choose to prioritize meaning.
                            </p>
                            <p className="about-body">
                                "Slow Dentistry" is not about working slowly; it is about taking the time to truly listen,
                                to plan meticulously, and to ensure that every biological boundary is respected.
                            </p>
                            <p className="about-body">
                                We believe that the most stable, beautiful smiles are built on a foundation of health.
                                By allowing teeth to move at their natural pace, we minimize risk, reduce discomfort,
                                and ensure results that last a lifetime.
                            </p>
                            <div style={{ marginTop: '30px', fontFamily: 'cursive', fontSize: '1.5rem', color: 'var(--color-primary-action)' }}>
                                Dr. Krutika Patankar
                            </div>
                        </div>

                        {/* Right: Feature Image */}
                        <div className="about-split-image">
                            <img
                                src="/images/clinic/waiting-area.jpg"
                                alt="Heartstrings & Braces Waiting Area - A Sanctuary of Calm"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Methodology Grid */}
            <section className="section bg-warm">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '50px' }}>
                        <h2 className="about-section-title">Our Methodology</h2>
                        <p className="about-subtitle">Where clinical precision meets human warmth.</p>
                    </div>

                    <motion.div
                        className="methodology-grid"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div className="methodology-card" variants={fadeInUp}>
                            <Sliders className="method-icon" />
                            <h3>Precision Planning</h3>
                            <p>We use advanced digital scanning and 3D simulation to map every millimeter of tooth movement before we even begin.</p>
                        </motion.div>
                        <motion.div className="methodology-card" variants={fadeInUp}>
                            <Microscope className="method-icon" />
                            <h3>Evidence-Based</h3>
                            <p>Our protocols are grounded in current scientific literature. We don't chase fads; we stick to what is proven to work safely.</p>
                        </motion.div>
                        <motion.div className="methodology-card" variants={fadeInUp}>
                            <Users className="method-icon" />
                            <h3>Collaborative Care</h3>
                            <p>For complex cases, we work hand-in-hand with your restorative dentist or periodontist to ensure comprehensive health.</p>
                        </motion.div>
                        <motion.div className="methodology-card" variants={fadeInUp}>
                            <Heart className="method-icon" />
                            <h3>Emotional Safety</h3>
                            <p>We understand that dental visits can be anxiety-inducing. Our environment is designed to be a sanctuary of calm.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* The Promise */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 className="about-section-title text-center">Our Promise to You</h2>
                    <div className="promise-list">
                        <div className="promise-item">
                            <Clock className="promise-icon" />
                            <div>
                                <h4>We Value Your Time</h4>
                                <p>We run on schedule. Your appointment time is reserved exclusively for you.</p>
                            </div>
                        </div>
                        <div className="promise-item">
                            <ShieldCheck className="promise-icon" />
                            <div>
                                <h4>Transparency First</h4>
                                <p>No hidden fees. No comprehensive jargon. Just honest, clear communication about your treatment and costs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default About;
