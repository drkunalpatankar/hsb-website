import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Treatments.css';
import Card from './ui/Card';
import { Smile, Sparkles, User, RefreshCw, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TreatmentItem = ({ icon: Icon, title, description, onClick, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay }}
    >
        <Card hoverEffect glass tilt glow className="treatment-card">
            <div className="treatment-card__icon">
                <Icon size={32} strokeWidth={1.5} />
            </div>
            <h3 className="treatment-card__title">{title}</h3>
            <p className="treatment-card__desc">{description}</p>
            <div className="treatment-card__link" onClick={onClick} role="button" tabIndex={0}>
                Learn More <ArrowRight size={16} />
            </div>
        </Card>
    </motion.div>
);

const Treatments = () => {
    const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate('/treatments', { state: { scrollTo: id } });
    };

    return (
        <section id="treatments" className="section treatments">
            <div className="container">
                <motion.div
                    className="treatments__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="treatments__title">Crafting Your Signature Smile</h2>
                    <p className="treatments__subtitle">
                        Comprehensive orthodontic solutions tailored to your lifestyle and aesthetic goals.
                    </p>
                </motion.div>

                <div className="treatments__grid">
                    <TreatmentItem
                        icon={Smile}
                        title="Metal & Ceramic Braces"
                        description="Traditional precision meets modern aesthetics. Choose from high-grade metal or discreet ceramic options."
                        onClick={() => handleNavigate('braces')}
                        delay={0.1}
                    />
                    <TreatmentItem
                        icon={Sparkles}
                        title="Clear Aligners"
                        description="Invisible, comfortable, and removable. The modern way to straighten teeth without disrupting your life."
                        onClick={() => handleNavigate('aligners')}
                        delay={0.2}
                    />
                    <TreatmentItem
                        icon={User}
                        title="Adult Orthodontics"
                        description="It's never too late. We specialize in complex adult cases, focusing on aesthetics and functional harmony."
                        onClick={() => handleNavigate('adults')}
                        delay={0.3}
                    />
                    <TreatmentItem
                        icon={RefreshCw}
                        title="Retention & Stability"
                        description="A straighter smile is a lifelong commitment. We ensure your results last with custom retention protocols."
                        onClick={() => handleNavigate('retention')}
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};

export default Treatments;
