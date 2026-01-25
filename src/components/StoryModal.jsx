import React, { useEffect } from 'react';
import './StoryModal.css';
import BeforeAfterSlider from './BeforeAfterSlider';
import { useBooking } from '../context/BookingContext';

const StoryModal = ({ story, onClose }) => {
    const { openBooking } = useBooking();

    if (!story) return null;

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEscape);
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    const handleBookConsultation = () => {
        onClose();
        setTimeout(() => {
            openBooking(`Interested in ${story.category}`);
        }, 200);
    };

    return (
        <div className="story-modal-overlay" onClick={onClose}>
            <div className="story-modal" onClick={e => e.stopPropagation()}>
                <button className="story-modal__close" onClick={onClose} aria-label="Close modal">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className="story-modal__visual">
                    <BeforeAfterSlider
                        beforeImg={story.beforeImg}
                        afterImg={story.afterImg}
                    />
                </div>

                <div className="story-modal__details">
                    <div className="story-modal__header">
                        <span className="story-modal__treatment">{story.category}</span>
                        <h3 className="story-modal__title">{story.title}</h3>
                    </div>

                    {/* Science Section */}
                    <div className="story-modal__science">
                        <h4 style={{
                            fontSize: '0.85rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            color: '#999',
                            marginBottom: '0.5rem'
                        }}>The Technique</h4>

                        <p className="story-modal__text">
                            {story.science || story.summary}
                        </p>
                    </div>

                    <button className="story-modal__cta" onClick={handleBookConsultation}>
                        Book Your Consultation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StoryModal;
