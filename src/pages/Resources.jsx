import React from 'react';
import '../components/Treatments.css'; // Shared styles
import '../styles/pages.css';
import Card from '../components/ui/Card';
import { BookOpen, HelpCircle, UserPlus, Clock } from 'lucide-react';

const ResourceItem = ({ icon: Icon, title, desc }) => (
    <Card className="resource-card">
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', color: 'var(--color-primary-action)' }}>
            <Icon size={24} style={{ marginRight: '12px' }} />
            <h3 style={{ margin: 0, fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>{title}</h3>
        </div>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{desc}</p>
        <span style={{ display: 'block', marginTop: '16px', color: 'var(--color-accent-teal)', fontSize: '0.9rem', fontWeight: 'bold', cursor: 'pointer' }}>Read More →</span>
    </Card>
);

const Resources = () => {
    return (
        <div className="page resources-page">
            <section className="section page-header">
                <div className="container">
                    <h1 className="page-title">Patient Resources</h1>
                    <p className="page-subtitle">Everything you need to know about your journey to a perfect smile.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="resources-grid">
                        <ResourceItem
                            icon={BookOpen}
                            title="Life with Braces"
                            desc="Tips on eating, brushing, and flossing. Learn how to care for your appliances and keep your smile healthy during treatment."
                        />
                        <ResourceItem
                            icon={UserPlus}
                            title="Your First Visit"
                            desc="What to expect during your initial consultation. From digital scans to discussing financial options, we walk you through it all."
                        />
                        <ResourceItem
                            icon={HelpCircle}
                            title="Orthodontist vs. Dentist"
                            desc="Understanding the difference. Did you know orthodontists complete 2-3 years of additional specialized training?"
                        />
                        <ResourceItem
                            icon={Clock}
                            title="Emergency Care"
                            desc="Guidance for poking wires or loose brackets. Most issues can be managed at home, but we are here if you need us."
                        />
                    </div>
                </div>
            </section>

            <section className="section bg-warm">
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '40px', fontFamily: 'var(--font-serif)' }}>Frequently Asked Questions</h2>
                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ marginBottom: '8px', color: 'var(--color-primary-action)' }}>How much do braces cost?</h4>
                        <p>Costs vary depending on the complexity of the case. We offer flexible payment plans to make treatment accessible.</p>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ marginBottom: '8px', color: 'var(--color-primary-action)' }}>Do braces hurt?</h4>
                        <p>You may feel slight discomfort after adjustments, but modern appliances are designed for maximum comfort.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resources;
