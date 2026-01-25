import React, { useState, useEffect } from 'react';
import './CaseGallery.css';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { caseGalleryData, caseCategories } from '../data/caseGalleryData';
import DisclaimerModal from '../components/DisclaimerModal';
import CaseCard from '../components/CaseCard';
import CaseDetailModal from '../components/CaseDetailModal';
import SEO from '../components/SEO';

const CaseGallery = () => {
    const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedCase, setSelectedCase] = useState(null);

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
    const filteredCases = activeFilter === 'all'
        ? caseGalleryData
        : caseGalleryData.filter(c => c.category === activeFilter);

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
                            "No smile is too complex, no case is too small."
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
