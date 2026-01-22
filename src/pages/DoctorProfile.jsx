import React from 'react';
import '../styles/pages.css';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { Award, BookOpen, Briefcase, GraduationCap, Heart, MapPin, Music, Star, User } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

const DoctorProfile = () => {
    const { openBooking } = useBooking();

    const experience = [
        {
            role: "Aligner Planning Specialist",
            org: "MakeO Pvt Ltd, Mumbai",
            period: "2025-10 - Current",
            type: "current"
        },
        {
            role: "Consultant Orthodontist",
            org: "Universal Dental Clinic, Mumbai",
            period: "2025-08 - Current",
            type: "current"
        },
        {
            role: "Orthodontist and Dental Surgeon",
            org: "Dr. Mayekar's Oral Care Center, Walkeshwar",
            period: "2024-09 - Current",
            type: "current"
        },
        {
            role: "Certified Invisalign Provider",
            org: "Invisalign, Mumbai",
            period: "2024-06 - Current",
            type: "current"
        },
        {
            role: "Consultant Orthodontist",
            org: "Lion Tarachand Bapa Hospital And Research Centre",
            period: "2023-11 - Current",
            type: "current"
        },
        {
            role: "Consultant Orthodontist",
            org: "Nagpada Police Hospital, Mumbai",
            period: "2023-10 - Current",
            type: "current"
        },
        {
            role: "Visiting Orthodontist",
            org: "Zenta Denta, Dental House, Caredent Clinic",
            period: "2023-04 - Current",
            type: "current"
        },
        {
            role: "Associate Orthodontist",
            org: "Bombay Hospital, Mumbai",
            period: "2022-09 - 2025-01",
            type: "past"
        }
    ];

    const education = [
        {
            degree: "Master of Dental Surgery: Orthodontics",
            school: "CSMSS Dental College And Hospital",
            period: "2019-06 - 2022-09",
            details: "Cleared Indian Board of Orthodontics (IBO) Phase II Board Certificate exam."
        },
        {
            degree: "Bachelor of Dental Surgery",
            school: "Government Dental College And Hospital, Mumbai",
            period: "2013-06 - 2018-09",
            details: "Stood First in Pathology and Microbiology exams conducted by MUHS."
        }
    ];

    const skills = [
        "Diagnosis & Treatment Planning",
        "Preventive & Interceptive Orthodontics",
        "Clear Aligner Therapy",
        "Functional Orthopaedics",
        "TMJ Disorders & Sleep Apnea",
        "Snoring Correction",
        "Restoration of Caries"
    ];

    const achievements = [
        "Won First Prize in Scientific Poster Presentation at 58th Maharashtra State Dental Conference (2019)",
        "Won Third Prize in Competitive Table Clinic Competition at 24th Indian Orthodontic PG Convention (2020)",
        "Paper Presentation in Competitive Oral Presentation Category at Ortho Byte 2020",
        "Essay Presentation on Oral Hygiene Day at CSMSS Dental College 2020",
        "Won 2nd prize in Singing competition organized by Indian Dental Association (2021)"
    ];

    const doctorSchema = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": {
            "@type": "Person",
            "name": "Dr. Krutika Patankar",
            "jobTitle": "Orthodontist",
            "description": "An ardent Orthodontist with expertise in providing care to children, adolescent and adults.",
            "image": "https://heartstringsbraces.com/images/dr-krutika-bg.png",
            "brand": {
                "@type": "MedicalBusiness",
                "name": "Heartstrings & Braces"
            }
        }
    };

    return (
        <motion.div
            className="page doctor-profile-page"
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <SEO
                title="Dr. Krutika Patankar | Orthodontist Profile"
                description="Meet Dr. Krutika Patankar, Lead Orthodontist at Heartstrings & Braces. View her extensive experience, education, and achievements."
                keywords="dr krutika patankar cv, orthodontist biography, invisalign provider mumbai, dental surgeon walkeshwar"
                schema={doctorSchema}
            />

            {/* Hero Section */}
            <section className="section page-header" style={{ paddingBottom: '40px' }}>
                <div className="container">
                    <div className="profile-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
                        <motion.div className="profile-image-container" variants={fadeInUp}>
                            <div style={{
                                position: 'relative',
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                aspectRatio: '3/4',
                                boxShadow: 'var(--shadow-xl)'
                            }}>
                                <img
                                    src="/images/dr-krutika-bg.png"
                                    alt="Dr. Krutika Patankar"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </motion.div>

                        <motion.div className="profile-intro" variants={fadeInUp}>
                            <h1 className="page-title" style={{ marginBottom: '10px' }}>Dr. Krutika Patankar</h1>
                            <p className="page-subtitle" style={{ color: 'var(--color-primary-action)', fontWeight: '600', marginBottom: '20px' }}>
                                Orthodontist & Dentofacial Orthopaedician
                            </p>
                            <div className="bio-text" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-secondary)', marginBottom: '30px' }}>
                                <p>
                                    An ardent Orthodontist with expertise in providing care to children, adolescents, and adults including
                                    Habit breaking appliance, Removable and Fixed Orthodontic therapy, Functional Orthopaedics, Clear Aligner therapy,
                                    TMD and sleep apnea correction.
                                </p>
                                <p style={{ marginTop: '15px' }}>
                                    Known for building a large clientele through effective communication, honesty, and dedication to excellence.
                                </p>
                            </div>
                            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                                <Button variant="primary" onClick={() => openBooking("Doctor Profile Page")}>
                                    Book Appointment
                                </Button>
                                <Button variant="outline" onClick={() => window.open('mailto:smile@hsb.care')}>
                                    Email Doc
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Body */}
            <section className="section bg-light">
                <div className="container">
                    <div className="profile-content-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '60px' }}>

                        {/* Left Column: Experience & Education */}
                        <div className="main-info">

                            {/* Experience */}
                            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: '60px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                                    <Briefcase size={28} className="text-teal" style={{ marginRight: '15px' }} />
                                    <h2 className="section-title" style={{ margin: 0, fontSize: '2rem' }}>Experience</h2>
                                </div>

                                <div className="timeline">
                                    {experience.map((job, idx) => (
                                        <motion.div key={idx} variants={fadeInUp} className="timeline-item" style={{
                                            paddingLeft: '20px',
                                            position: 'relative',
                                            borderLeft: '2px solid var(--color-border)',
                                            paddingBottom: '30px'
                                        }}>
                                            <div style={{
                                                position: 'absolute',
                                                left: '-6px',
                                                top: '0',
                                                width: '10px',
                                                height: '10px',
                                                borderRadius: '50%',
                                                background: job.type === 'current' ? 'var(--color-primary-action)' : 'var(--color-text-light)'
                                            }} />
                                            <h3 style={{ fontSize: '1.2rem', fontWeight: '600' }}>{job.role}</h3>
                                            <p style={{ color: 'var(--color-text-secondary)', fontWeight: '500' }}>{job.org}</p>
                                            <span style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', background: 'var(--color-bg-light)', padding: '2px 8px', borderRadius: '4px' }}>
                                                {job.period}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Education */}
                            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                                    <GraduationCap size={28} className="text-teal" style={{ marginRight: '15px' }} />
                                    <h2 className="section-title" style={{ margin: 0, fontSize: '2rem' }}>Education</h2>
                                </div>
                                {education.map((edu, idx) => (
                                    <motion.div key={idx} variants={fadeInUp} className="education-card" style={{
                                        background: 'white',
                                        padding: '25px',
                                        borderRadius: 'var(--radius-md)',
                                        marginBottom: '20px',
                                        boxShadow: 'var(--shadow-sm)'
                                    }}>
                                        <h3 style={{ fontSize: '1.3rem', color: 'var(--color-primary-action)' }}>{edu.degree}</h3>
                                        <p style={{ fontWeight: '600', marginBottom: '5px' }}>{edu.school}</p>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginBottom: '10px' }}>{edu.period}</p>
                                        <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>{edu.details}</p>
                                    </motion.div>
                                ))}
                            </motion.div>

                        </div>

                        {/* Right Column: Skills, Interests, Contact */}
                        <div className="sidebar-info">

                            {/* Skills */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                style={{ marginBottom: '50px' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                    <Star size={24} className="text-teal" style={{ marginRight: '10px' }} />
                                    <h3 style={{ margin: 0 }}>Core Competencies</h3>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {skills.map((skill, idx) => (
                                        <span key={idx} style={{
                                            background: 'var(--color-bg-white)',
                                            border: '1px solid var(--color-border)',
                                            padding: '8px 12px',
                                            borderRadius: '20px',
                                            fontSize: '0.9rem',
                                            fontWeight: '500'
                                        }}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Achievements */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                style={{ marginBottom: '50px' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                    <Award size={24} className="text-teal" style={{ marginRight: '10px' }} />
                                    <h3 style={{ margin: 0 }}>Honors & Awards</h3>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {achievements.map((award, idx) => (
                                        <li key={idx} style={{ marginBottom: '15px', display: 'flex', fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>
                                            <span style={{ color: 'var(--color-accent-teal)', marginRight: '10px' }}>•</span>
                                            {award}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Interests */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                    <Heart size={24} className="text-teal" style={{ marginRight: '10px' }} />
                                    <h3 style={{ margin: 0 }}>Beyond Dentistry</h3>
                                </div>
                                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '15px' }}>
                                    When not designing smiles, Dr. Krutika expresses her creativity through music and arts.
                                </p>
                                <div style={{ display: 'flex', gap: '15px', color: 'var(--color-text-primary)' }}>
                                    <span style={{ display: 'flex', alignItems: 'center' }}><BookOpen size={16} style={{ marginRight: '5px' }} /> Writing</span>
                                    <span style={{ display: 'flex', alignItems: 'center' }}><Music size={16} style={{ marginRight: '5px' }} /> Singing</span>
                                    <span style={{ display: 'flex', alignItems: 'center' }}><Music size={16} style={{ marginRight: '5px' }} /> Ukulele</span>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default DoctorProfile;
