import React, { useEffect } from 'react';
import './DisclaimerModal.css';

const DisclaimerModal = ({ onAccept }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="disclaimer-modal-overlay">
            <div className="disclaimer-modal">
                <div className="disclaimer-modal__icon">
                    {/* Warning/Info Icon */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                </div>

                <h2 className="disclaimer-modal__title">Viewer Discretion Advised</h2>

                <p className="disclaimer-modal__text">
                    The following gallery contains <strong>clinical orthodontic images</strong> intended for educational and academic purposes. These images may include intraoral photographs of teeth, gums, and orthodontic appliances.
                </p>

                <button className="disclaimer-modal__btn" onClick={onAccept}>
                    I Understand, Proceed
                </button>
            </div>
        </div>
    );
};

export default DisclaimerModal;
