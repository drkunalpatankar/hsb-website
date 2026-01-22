import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="accordion-item" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <button
                onClick={onClick}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                }}
            >
                <span style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: isOpen ? 'var(--color-primary-action)' : 'var(--color-text-primary)'
                }}>
                    {question}
                </span>
                {isOpen ?
                    <ChevronUp size={20} color="var(--color-primary-action)" /> :
                    <ChevronDown size={20} color="var(--color-text-secondary)" />
                }
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <p style={{
                            paddingBottom: '20px',
                            color: 'var(--color-text-secondary)',
                            lineHeight: '1.6'
                        }}>
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={activeIndex === index}
                    onClick={() => handleItemClick(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;
