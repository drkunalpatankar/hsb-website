import React from 'react';
import './DoctorIntro.css';
import Button from './ui/Button';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

const DoctorIntro = () => {
    return (
        <section id="doctor" className="section doctor-intro">
            <div className="container doctor-intro__container">
                <motion.div
                    className="doctor-intro__image-wrapper"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="doctor-intro__image-frame">
                        <img src="/images/doctor.png" alt="Dr. Ananya Rao" className="doctor-intro__img" />
                    </div>
                </motion.div>

                <motion.div
                    className="doctor-intro__content"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="doctor-intro__title">Meet Dr. Ananya Rao</h2>
                    <p className="doctor-intro__role">Lead Orthodontist & Founder</p>
                    <p className="doctor-intro__bio">
                        "I founded Heartstrings & Braces to bridge the gap between clinical excellence and compassionate care.
                        My goal is not just to straighten teeth, but to craft smiles that enhance your natural beauty and boost your confidence."
                    </p>
                    <div className="doctor-intro__credentials">
                        <p>• M.D.S. Orthodontics & Dentofacial Orthopaedics</p>
                        <p>• Certified Invisalign Provider</p>
                        <p>• 10+ Years of Clinical Experience</p>
                    </div>
                    <Button variant="outline" className="doctor-intro__cta">
                        Read Full Profile
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default DoctorIntro;
