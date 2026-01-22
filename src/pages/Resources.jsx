import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { blogs, faqs } from '../data/blogData';
import '../styles/pages.css';
import Card from '../components/ui/Card';
import Accordion from '../components/ui/Accordion';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Resources = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            className="page resources-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title="Patients Resources & Blog | Orthodontic Tips"
                description="Read our latest guides on Life with Braces, Aligner Care, and Orthodontic Health. Frequently asked questions answered by Dr. Patankar."
                keywords="orthodontic blog, braces tips, invisalign guide, life with braces, patient resources, hsb blog"
                canonical="https://heartstringsbraces.com/resources"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "Heartstrings & Braces Resources",
                    "description": "Educational resources and articles about orthodontic care.",
                    "url": "https://heartstringsbraces.com/resources"
                }}
            />
            <section className="section page-header">
                <div className="container">
                    <h1 className="page-title">Patient Resources</h1>
                    <p className="page-subtitle">Expert guides, tips, and answers to support your journey to a perfect smile.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title text-center" style={{ marginBottom: '40px' }}>Patient Guides</h2>
                    <div className="resources-grid">
                        {blogs.map((blog, index) => {
                            const Icon = blog.icon;
                            return (
                                <motion.div
                                    key={blog.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card
                                        className="resource-card"
                                        hoverEffect
                                        onClick={() => navigate(`/resources/${blog.id}`)}
                                        style={{ cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', color: 'var(--color-primary-action)' }}>
                                            <Icon size={28} style={{ marginRight: '12px' }} />
                                            <h3 style={{ margin: 0, fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>{blog.title}</h3>
                                        </div>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '20px', flex: 1 }}>{blog.summary}</p>
                                        <div style={{ display: 'flex', alignItems: 'center', color: 'var(--color-accent-teal)', fontWeight: 'bold', fontSize: '0.9rem' }}>
                                            Read Article <span style={{ marginLeft: '5px' }}>→</span>
                                        </div>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="section bg-warm">
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="text-center" style={{ marginBottom: '40px' }}>
                        <h2 className="section-title">Frequently Asked Questions</h2>
                        <p>Common questions about orthodontic treatment.</p>
                    </div>

                    <Card style={{ padding: '10px 30px' }}>
                        <Accordion items={faqs} />
                    </Card>
                </div>
            </section>
        </motion.div>
    );
};

export default Resources;
