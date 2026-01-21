import React from 'react';
import './WhyChooseUs.css';
import { UserCheck, Sliders, Clock, HeartHandshake } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
    <div className="why-us__feature">
        <Icon size={40} className="why-us__icon" strokeWidth={1} />
        <h3 className="why-us__feature-title">{title}</h3>
        <p className="why-us__feature-desc">{desc}</p>
    </div>
);

const WhyChooseUs = () => {
    return (
        <section id="why-us" className="section why-us">
            <div className="container">
                <h2 className="why-us__title">The Heartstrings Standard</h2>
                <div className="why-us__grid">
                    <Feature
                        icon={UserCheck}
                        title="Orthodontist-Led Care"
                        desc="Direct care from a specialist, not assistants. Your smile is monitored by an expert at every visit."
                    />
                    <Feature
                        icon={Sliders}
                        title="Individualised Planning"
                        desc="No cookie-cutter approaches. We design treatment plans that respect your unique facial biology."
                    />
                    <Feature
                        icon={Clock}
                        title="Focus on Stability"
                        desc="We don't just straighten teeth; we plan for long-term stability so your smile lasts a lifetime."
                    />
                    <Feature
                        icon={HeartHandshake}
                        title="Calm Patient Experience"
                        desc="An anxiety-free environment designed to make you feel at home, with zero sales pressure."
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
