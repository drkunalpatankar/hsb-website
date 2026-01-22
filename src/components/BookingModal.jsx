import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, FileText, CheckCircle, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import './BookingModal.css';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep('loading');

        // Simulate API call
        setTimeout(() => {
            setStep('success');
        }, 1500);
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
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            placeholder="+91 99999 99999"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
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
                                    >
                                        <Calendar size={18} /> Add to Google Calendar <ExternalLink size={14} />
                                    </a>
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
