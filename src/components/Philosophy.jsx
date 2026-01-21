import React from 'react';
import './Philosophy.css';
import { Heart, ShieldCheck, Ruler } from 'lucide-react';

const PhilosophyFeature = ({ icon: Icon, title, description }) => (
    <div className="philosophy__feature">
        <div className="philosophy__icon-wrapper">
            <Icon size={28} className="philosophy__icon" strokeWidth={1.5} />
        </div>
        <h3 className="philosophy__feature-title">{title}</h3>
        <p className="philosophy__feature-desc">{description}</p>
    </div>
);

const Philosophy = () => {
    return (
        <section id="philosophy" className="section philosophy">
            <div className="container">
                <div className="philosophy__header">
                    <h2 className="philosophy__title">Our Philosophy</h2>
                    <p className="philosophy__subtitle">
                        We believe that orthodontic care should be as comfortable as it is transformative.
                        Every treatment plan is crafted with precision, ethics, and a deep understanding of your unique facial aesthetics.
                    </p>
                </div>

                <div className="philosophy__grid">
                    <PhilosophyFeature
                        icon={Ruler}
                        title="Clinically Precise"
                        description="Utilizing state-of-the-art digital imaging and evidence-based techniques for predictable, stable results."
                    />
                    <PhilosophyFeature
                        icon={Heart}
                        title="Emotionally Warm"
                        description="A boutique experience where you are heard, understood, and cared for at every step of the journey."
                    />
                    <PhilosophyFeature
                        icon={ShieldCheck}
                        title="Ethical Practice"
                        description="We recommend only what you need. No unnecessary interventions, just honest, transparent care."
                    />
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
