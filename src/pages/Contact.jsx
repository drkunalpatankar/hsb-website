import React from 'react';
import '../styles/pages.css';
import Button from '../components/ui/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
    return (
        <div className="page contact-page">
            <SEO
                title="Contact Us | Book Your Consultation"
                description="Visit Dr. Mayekar's Oral Care Centre in Walkeshwar, Mumbai. Call +91 85919 90660 or email smile@hsb.care."
            />
            <section className="section page-header">
                <div className="container">
                    <h1 className="page-title">Get in Touch</h1>
                    <p className="page-subtitle">We would love to hear from you. Schedule your visit today.</p>
                </div>
            </section>

            <section className="section">
                <div className="container contact-grid">
                    {/* Info Column */}
                    <div>
                        <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: '30px', fontSize: '2.5rem' }}>Visit Us</h2>

                        <div className="contact-item" style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                            <MapPin className="text-teal" size={28} />
                            <div>
                                <h4 style={{ fontWeight: '700', marginBottom: '8px' }}>Address</h4>
                                <p style={{ lineHeight: '1.6' }}>Dr. Mayekar’s Oral Care Centre<br />1, Dadi Seth Road, Walkeshwar<br />Mumbai, Maharashtra 400006</p>
                            </div>
                        </div>

                        <div className="contact-item" style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                            <Phone className="text-teal" size={28} />
                            <div>
                                <h4 style={{ fontWeight: '700', marginBottom: '8px' }}>Phone</h4>
                                <p><a href="tel:+918591990660" className="hover-link">+91 85919 90660</a></p>
                            </div>
                        </div>

                        <div className="contact-item" style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                            <Mail className="text-teal" size={28} />
                            <div>
                                <h4 style={{ fontWeight: '700', marginBottom: '8px' }}>Email</h4>
                                <p><a href="mailto:smile@hsb.care" className="hover-link">smile@hsb.care</a></p>
                            </div>
                        </div>

                        <div className="contact-item" style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                            <Clock className="text-teal" size={28} />
                            <div>
                                <h4 style={{ fontWeight: '700', marginBottom: '8px' }}>Hours</h4>
                                <p>Mon - Sat: 10:00 AM - 7:00 PM<br />Sun: Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Map Column */}
                    <div style={{
                        height: '100%',
                        minHeight: '400px',
                        borderRadius: 'var(--radius-lg)',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-md)'
                    }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.4637952358007!2d72.80483987546359!3d18.955113855756004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf2e33761e83%3A0x32dc1881bed28ede!2sHeartstrings%20%26%20Braces%20-%20Dr%20Krutika%20Patankar!5e0!3m2!1sen!2sin!4v1769062907090!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '400px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Heartstrings & Braces Location"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
