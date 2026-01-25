import React, { useEffect } from 'react';
import './CaseDetailModal.css';
import { caseCategories } from '../data/caseGalleryData';
import { useBooking } from '../context/BookingContext';

const CaseDetailModal = ({ caseData, onClose }) => {
    const { openBooking } = useBooking();

    if (!caseData) return null;

    const categoryLabel = caseCategories.find(c => c.id === caseData.category)?.label || caseData.category;

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
            openBooking(`Inquiry about ${caseData.title}`);
        }, 200);
    };

    // Simple markdown-to-HTML conversion for technical details
    const renderTechnicalDetails = (markdown) => {
        if (!markdown) return null;

        // Convert markdown to basic HTML
        let html = markdown
            .replace(/## (.+)/g, '<h2>$1</h2>')
            .replace(/### (.+)/g, '<h3>$1</h3>')
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/- (.+)/g, '<li>$1</li>')
            .replace(/(<li>.*<\/li>)\n(?=<li>)/g, '$1')
            .replace(/(<li>.*<\/li>)+/g, '<ul>$&</ul>')
            .replace(/\n\n/g, '</p><p>')
            .replace(/\n/g, '<br/>');

        return <div dangerouslySetInnerHTML={{ __html: `<p>${html}</p>` }} />;
    };

    return (
        <div className="case-detail-overlay" onClick={onClose}>
            <div className="case-detail-modal" onClick={e => e.stopPropagation()}>
                <button className="case-detail-modal__close" onClick={onClose} aria-label="Close">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {/* Image Section */}
                <div className="case-detail-modal__image-section">
                    <img
                        src={caseData.thumbnail}
                        alt={caseData.title}
                        className="case-detail-modal__image"
                    />
                </div>

                {/* Content Section */}
                <div className="case-detail-modal__content">
                    <span className="case-detail-modal__category">{categoryLabel}</span>
                    <h2 className="case-detail-modal__title">{caseData.title}</h2>

                    <p className="case-detail-modal__summary">{caseData.summary}</p>

                    <div className="case-detail-modal__technical">
                        {renderTechnicalDetails(caseData.technicalDetails)}
                    </div>

                    <button className="case-detail-modal__cta" onClick={handleBookConsultation}>
                        Discuss This Case
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CaseDetailModal;
