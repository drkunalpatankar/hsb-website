import React, { useState } from 'react';
import './Transformations.css';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { storiesData } from '../data/storiesData';
import StoryCard from './StoryCard';
import StoryModal from './StoryModal';

const Transformations = () => {
    const [selectedStory, setSelectedStory] = useState(null);

    return (
        <section className="section transformations" id="real-stories">
            <div className="container">
                <motion.div
                    className="transformations__header"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="transformations__title">Real Stories, Real Smiles</h2>
                    <p className="transformations__subtitle">
                        Slide to reveal the precision. Discover the science behind the smile.
                    </p>
                </motion.div>

                <motion.div
                    className="transformations__grid"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {storiesData.map((story) => (
                        <motion.div
                            key={story.id}
                            className="transformations__item"
                            variants={fadeInUp}
                        >
                            <StoryCard
                                story={story}
                                onViewDetails={setSelectedStory}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {selectedStory && (
                <StoryModal
                    story={selectedStory}
                    onClose={() => setSelectedStory(null)}
                />
            )}
        </section>
    );
};

export default Transformations;
