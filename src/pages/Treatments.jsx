import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../components/Treatments.css'; // Reusing existing css
import Card from '../components/ui/Card';
import { CheckCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { pageTransition, fadeInUp, staggerContainer } from '../utils/animations';
import { treatmentDetails } from '../data/treatmentDetails';

const DetailedSection = ({ id, title, subtitle, icon: Icon, intro, features, idealFor, process }) => (
    <section id={id} className="section treatment-detail-section">
        <div className="container">
            <div className="treatment-header">
                <div className="icon-wrapper-large">
                    <Icon size={48} strokeWidth={1} color="var(--color-primary-action)" />
                </div>
                <h2 className="treatment-title-large">{title}</h2>
                <p className="treatment-subtitle-large">{subtitle}</p>
            </div>

            <div className="treatment-content-grid">
                <div className="treatment-main">
                    <p className="treatment-intro">{intro}</p>

                    <div className="treatment-features">
                        {features.map((f, i) => (
                            <div key={i} className="feature-block">
                                <h4 className="feature-title">{f.title}</h4>
                                <p className="feature-desc">{f.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="treatment-process">
                        <h4 className="section-label">The Process</h4>
                        <p>{process}</p>
                    </div>
                </div>

                <div className="treatment-sidebar">
                    <Card className="ideal-for-card">
                        <h4 className="sidebar-title">Ideal For</h4>
                        <ul className="ideal-list">
                            {idealFor.map((item, idx) => (
                                <li key={idx}><CheckCircle size={16} className="check-icon" /> {item}</li>
                            ))}
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    </section>
);

const TreatmentsPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <motion.div
            className="page treatments-page-rich"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
        >
            <section className="section page-header">
                <div className="container">
                    <motion.h1 className="page-title" variants={fadeInUp}>Our Treatments</motion.h1>
                    <motion.p className="page-subtitle" variants={fadeInUp}>
                        We combine art, science, and technology to design a smile that is uniquely yours.
                        Explore our specialized services below.
                    </motion.p>
                </div>
            </section>

            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
                {treatmentDetails.map((detail) => (
                    <DetailedSection key={detail.id} {...detail} />
                ))}
            </motion.div>

            <section className="section bg-warm" style={{ marginTop: '40px' }}>
                <div className="container text-center">
                    <h3>Not sure what's right for you?</h3>
                    <p style={{ marginBottom: '20px' }}>Book a consultation and let Dr. Rao guide you to the perfect choice.</p>
                </div>
            </section>

        </motion.div>
    );
};

export default TreatmentsPage;
