import React from 'react';
import './Education.css';
import { MessageCircle, FileText, Smile, CheckCircle } from 'lucide-react';

const Step = ({ number, title, desc, icon: Icon }) => (
    <div className="education__step">
        <div className="education__icon-wrapper">
            <Icon size={24} />
        </div>
        <span className="education__number">0{number}</span>
        <h3 className="education__step-title">{title}</h3>
        <p className="education__step-desc">{desc}</p>
    </div>
);

const Education = () => {
    return (
        <section className="section education">
            <div className="container">
                <div className="education__header">
                    <h2 className="education__title">Your Journey With Us</h2>
                    <p className="education__subtitle">Simple, transparent, and guided at every step.</p>
                </div>

                <div className="education__timeline">
                    {/* Connecting line */}
                    <div className="education__line"></div>

                    <Step
                        number="1"
                        title="Consultation"
                        desc="We listen to your concerns, examine your smile, and discuss your goals."
                        icon={MessageCircle}
                    />
                    <Step
                        number="2"
                        title="Custom Plan"
                        desc="Digital scans and precise planning to map out your perfect smile."
                        icon={FileText}
                    />
                    <Step
                        number="3"
                        title="Active Care"
                        desc="Regular, comfortable visits to gently guide your teeth into position."
                        icon={Smile}
                    />
                    <Step
                        number="4"
                        title="Retention"
                        desc="We provide retainers and follow-up to ensure your smile lasts forever."
                        icon={CheckCircle}
                    />
                </div>
            </div>
        </section>
    );
};

export default Education;
