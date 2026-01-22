import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, FileText, CheckCircle, ExternalLink, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import emailjs from '@emailjs/browser';
import './BookingModal.css';

// ⚠️ USER CONFIGURATION REQUIRED ⚠️
// Please sign up at https://www.emailjs.com/
// 1. Create a Service (connect your Hostinger SMTP) -> paste ID below
// 2. Create an Email Template -> paste ID below
// 3. Get your Public Key from Account -> paste below
const EMAIL_CONFIG = {
    SERVICE_ID: 'YOUR_SERVICE_ID', // e.g. 'service_xyz'
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // e.g. 'template_abc'
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY'   // e.g. 'user_123'
};

const BookingModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState('form'); // 'form', 'loading', 'success'
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        purpose: ''
    });

    // Reset state when opening
    useEffect(() => {
        if (isOpen) {
            setStep('form');
            setFormData({ name: '', phone: '', date: '', time: '', purpose: '' });
        }
    }, [isOpen]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const generateCalendarLink = () => {
        const { date, time, purpose } = formData;
        // Simple logic to create a start/end time for Google Calendar
        // Assuming 1 hour slot
        if (!date || !time) return '#';

        const startTime = new Date(`${date}T${time}`);
        const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // +1 hour

        const formatDate = (d) => d.toISOString().replace(/-|:|\.\d\d\d/g, "");

        const title = "Consultation: Dr. Patankar";
        const details = `Purpose: ${purpose}`;
        const location = "Dr. Mayekar's Oral Care Centre";

        return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${formatDate(startTime)}/${formatDate(endTime)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStep('loading');

        try {
            // Prepare template parameters
            const templateParams = {
                patient_name: formData.name,
                patient_phone: `+91 ${formData.phone}`,
                patient_email: 'smile@hsb.care', // Or ask for email if needed
                appointment_date: formData.date,
                appointment_time: formData.time,
                purpose: formData.purpose,
                google_map_link: "https://maps.app.goo.gl/THidSknBavQqz8Re7"
            };

            // Send Email
            // await emailjs.send(
            //     EMAIL_CONFIG.SERVICE_ID,
            //     EMAIL_CONFIG.TEMPLATE_ID,
            //     templateParams,
            //     EMAIL_CONFIG.PUBLIC_KEY
            // );

            // Simulate success for now until user adds keys
            await new Promise(resolve => setTimeout(resolve, 1500));

            setStep('success');
        } catch (error) {
            console.error('Booking failed:', error);
            alert("Something went wrong. Please call us directly.");
            setStep('form');
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="modal-overlay">
                    <motion.div
                        className="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className="modal-container"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    >
                        <button className="modal-close" onClick={onClose}>
                            <X size={24} />
                        </button>

                        {step === 'form' && (
                            <>
                                <div className="modal-header">
                                    <h2>Book Consultation</h2>
                                    <p>Schedule your visit with Dr. Patankar</p>
                                </div>
                                <form onSubmit={handleSubmit} className="booking-form">
                                    <div className="form-group">
                                        <label><User size={16} /> Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label><Phone size={16} /> Phone Number</label>
                                        <div className="phone-input-wrapper">
                                            <span className="phone-prefix">🇮🇳 +91</span>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                placeholder="99999 99999"
                                                pattern="[0-9]{10}"
                                                title="Please enter a valid 10-digit mobile number"
                                                className="phone-input"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label><Calendar size={16} /> Date</label>
                                            <input
                                                type="date"
                                                name="date"
                                                required
                                                min={new Date().toISOString().split('T')[0]}
                                                value={formData.date}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label><Clock size={16} /> Time</label>
                                            <select
                                                name="time"
                                                required
                                                value={formData.time}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select Time</option>
                                                <option value="10:00">10:00 AM</option>
                                                <option value="11:00">11:00 AM</option>
                                                <option value="12:00">12:00 PM</option>
                                                <option value="14:00">02:00 PM</option>
                                                <option value="15:00">03:00 PM</option>
                                                <option value="16:00">04:00 PM</option>
                                                <option value="17:00">05:00 PM</option>
                                                <option value="18:00">06:00 PM</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label><FileText size={16} /> Purpose of Visit</label>
                                        <textarea
                                            name="purpose"
                                            rows="3"
                                            placeholder="Briefly describe your concern (e.g., Braces, Aligners checkup)"
                                            value={formData.purpose}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                    <Button type="submit" variant="primary" className="w-full">
                                        Confirm Booking
                                    </Button>
                                </form>
                            </>
                        )}

                        {step === 'loading' && (
                            <div className="modal-state">
                                <div className="spinner"></div>
                                <p>Scheduling your appointment...</p>
                            </div>
                        )}

                        {step === 'success' && (
                            <div className="modal-state success">
                                <div className="success-icon">
                                    <CheckCircle size={48} />
                                </div>
                                <h2>Booking Confirmed!</h2>
                                <p>Thank you, {formData.name}. We have received your request for <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.</p>

                                <div className="calendar-action">
                                    <p>Add this to your calendar:</p>
                                    <a
                                        href={generateCalendarLink()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-google-calendar"
                                        style={{ marginBottom: '10px' }}
                                    >
                                        <Calendar size={18} /> Add to Google Calendar <ExternalLink size={14} />
                                    </a>
                                </div>

                                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                                    <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                                        <MapPin size={16} />
                                        <a href="https://maps.app.goo.gl/THidSknBavQqz8Re7" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary-action)', textDecoration: 'underline' }}>
                                            Get Directions
                                        </a>
                                    </p>
                                </div>

                                <Button variant="outline" onClick={onClose}>Close</Button>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
