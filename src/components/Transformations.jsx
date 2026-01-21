import React from 'react';
import './Transformations.css';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Transformations = () => {
    const galleryImages = [
        '/images/smile-1.png',
        '/images/smile-2.png',
        '/images/smile-3.png',
        '/images/smile-1.png', // Reusing for grid fill
        '/images/smile-2.png',
        '/images/smile-3.png'
    ];

    return (
        <section className="section transformations">
            <div className="container">
                <motion.div
                    className="transformations__header"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="transformations__title">Real Stories, Real Smiles</h2>
                    <p className="transformations__subtitle">No exaggerations. Just natural, healthy, confident smiles.</p>
                </motion.div>

                <motion.div
                    className="transformations__grid"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {galleryImages.map((src, index) => (
                        <motion.div
                            key={index}
                            className="gallery-item"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="gallery-image-wrapper">
                                <img src={src} alt={`Smile transformation ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '20px' }} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Transformations;
