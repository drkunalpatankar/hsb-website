import React, { useState, useEffect } from 'react';
import './CaseGallery.css';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { client, urlFor } from '../lib/sanity';
import { caseCategories } from '../data/caseGalleryData';
import DisclaimerModal from '../components/DisclaimerModal';
import CaseCard from '../components/CaseCard';
import CaseDetailModal from '../components/CaseDetailModal';
import SEO from '../components/SEO';

const CaseGallery = () => {
    const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedCase, setSelectedCase] = useState(null);
    const [cases, setCases] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch cases from Sanity
    useEffect(() => {
        const query = `*[_type == "caseStudy"]{
            title,
            category,
            mainImage,
            beforeImage,
            afterImage,
            summary,
            technicalDetails
        }`;

        client.fetch(query)
            .then((data) => {
                // Map Sanity data to our app structure
                const mappedCases = data.map(item => ({
                    id: item._id || item.title, // Fallback ID
                    title: item.title,
                    category: item.category,
                    thumbnail: item.mainImage ? urlFor(item.mainImage).width(600).url() : '',
                    beforeImage: item.beforeImage ? urlFor(item.beforeImage).width(800).url() : null,
                    afterImage: item.afterImage ? urlFor(item.afterImage).width(800).url() : null,
                    summary: item.summary,
                    technicalDetails: item.technicalDetails // Keep as Portable Text blocks
                }));
                console.log('Fetched Cases:', mappedCases);
                setCases(mappedCases);
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    // Check if disclaimer was already accepted this session
    useEffect(() => {
        const accepted = sessionStorage.getItem('caseGalleryDisclaimerAccepted');
        if (accepted === 'true') {
            setDisclaimerAccepted(true);
        }
    }, []);

    const handleAcceptDisclaimer = () => {
        sessionStorage.setItem('caseGalleryDisclaimerAccepted', 'true');
        setDisclaimerAccepted(true);
    };

    // Filter cases
    // Filter cases
    const filteredCases = activeFilter === 'all'
        ? cases
        : cases.filter(c => c.category === activeFilter);

    return (
        <>
            <SEO
                title="Case Gallery | Heartstrings & Braces"
                description="Explore our portfolio of complex orthodontic cases. Educational clinical images showcasing advanced treatment techniques."
            />

            {/* Disclaimer Modal */}
            {!disclaimerAccepted && (
                <DisclaimerModal onAccept={handleAcceptDisclaimer} />
            )}

            <section className="case-gallery">
                <div className="container">
                    {/* Header */}
                    <motion.div
                        className="case-gallery__header"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                    >
                        <span className="case-gallery__tagline">The Unseen Work Behind Every Smile</span>
                        <h1 className="case-gallery__title">Case Gallery</h1>
                        <p className="case-gallery__subtitle">
                            "No smile too complex, No case too small."
                        </p>
                    </motion.div>

                    {/* Filter Tabs */}
                    <div className="case-gallery__filters">
                        {caseCategories.map(cat => (
                            <button
                                key={cat.id}
                                className={`case-gallery__filter-btn ${activeFilter === cat.id ? 'case-gallery__filter-btn--active' : ''}`}
                                onClick={() => setActiveFilter(cat.id)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    {loading ? (
                        <div style={{ textAlign: 'center', padding: '4rem', color: '#999' }}>Loading cases...</div>
                    ) : error ? (
                        <div style={{ textAlign: 'center', padding: '4rem', color: 'red' }}>
                            <p>Error loading cases: {error}</p>
                            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                                (Please ensure 'http://localhost:5173' is added to CORS Origins in your Sanity Dashboard)
                            </p>
                        </div>
                    ) : (
                        <motion.div
                            className="case-gallery__grid"
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                        >
                            {filteredCases.length > 0 ? (
                                filteredCases.map(caseItem => (
                                    <motion.div key={caseItem.id} variants={fadeInUp}>
                                        <CaseCard
                                            caseData={caseItem}
                                            onClick={setSelectedCase}
                                        />
                                    </motion.div>
                                ))
                            ) : (
                                <div className="case-gallery__empty">
                                    <div className="case-gallery__empty-icon">📁</div>
                                    <p className="case-gallery__empty-text">
                                        No cases found in this category yet. More coming soon!
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Detail Modal */}
            {selectedCase && (
                <CaseDetailModal
                    caseData={selectedCase}
                    onClose={() => setSelectedCase(null)}
                />
            )}
        </>
    );
};

export default CaseGallery;
