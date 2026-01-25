import React from 'react';
import './CaseCard.css';
import { caseCategories } from '../data/caseGalleryData';

const CaseCard = ({ caseData, onClick }) => {
    // Find the category label
    const categoryLabel = caseCategories.find(c => c.id === caseData.category)?.label || caseData.category;

    return (
        <article className="case-card" onClick={() => onClick(caseData)}>
            <img
                src={caseData.thumbnail}
                alt={caseData.title}
                className="case-card__image"
                loading="lazy"
            />

            {/* Overlay on hover */}
            <div className="case-card__overlay">
                <span className="case-card__category">{categoryLabel}</span>
                <h3 className="case-card__title">{caseData.title}</h3>
            </div>

            {/* Static info always visible */}
            <div className="case-card__static-info">
                <h3 className="case-card__static-title">{caseData.title}</h3>
            </div>
        </article>
    );
};

export default CaseCard;
