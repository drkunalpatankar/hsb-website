import React from 'react';
import './CTA.css';
import Button from './ui/Button';
import { useBooking } from '../context/BookingContext';

const CTA = () => {
    const { openBooking } = useBooking();

    return (
        <section id="contact" className="section cta">
            <div className="container">
                <div className="cta__content">
                    <h2 className="cta__title">Your Smile Deserves Thoughtful Care</h2>
                    <p className="cta__subtitle">
                        Schedule your consultation today and take the first step towards a healthier, more confident you.
                    </p>
                    <div className="cta__form-wrapper">
                        {/* Simple simulated form or just a button for now as per requirements asking for "Appointment booking CTA" */}
                        <div onClick={openBooking}>
                            <Button variant="primary" className="cta__button">
                                Schedule Appointment
                            </Button>
                        </div>
                        <p className="cta__note">No referral needed. Adolescent & Adult consultations available.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
