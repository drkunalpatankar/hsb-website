import React from 'react';
import '../styles/pages.css';
import Button from '../components/ui/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="page contact-page">
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
                        <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: '20px', fontSize: '2rem' }}>Visit Us</h2>

                        <div className="contact-item" style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                            <MapPin className="text-teal" size={24} />
                            <div>
                                <h4 style={{ fontWeight: '700' }}>Address</h4>
                                <p>Dr. Mayekar’s Oral Care Centre<br />1, Dadi Seth Road, Walkeshwar<br />Mumbai, Maharashtra 400006</p>
                            </div>
                        </div>

                        <div className="contact-item" style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                            <Phone className="text-teal" size={24} />
                            <div>
                                <h4 style={{ fontWeight: '700' }}>Phone</h4>
                                <p><a href="tel:+918591990660">+91 85919 90660</a></p>
                            </div>
                        </div>

                        <div className="contact-item" style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                            <Mail className="text-teal" size={24} />
                            <div>
                                <h4 style={{ fontWeight: '700' }}>Email</h4>
                                <p><a href="mailto:hello@heartstringsbraces.com">hello@heartstringsbraces.com</a></p>
                            </div>
                        </div>

                        <div className="contact-item" style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                            <Clock className="text-teal" size={24} />
                            <div>
                                <h4 style={{ fontWeight: '700' }}>Hours</h4>
                                <p>Mon - Sat: 10:00 AM - 7:00 PM<br />Sun: Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div style={{ backgroundColor: 'white', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: '20px' }}>Send a Message</h2>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '5px', fontWeight: 'bold' }}>Name</label>
                                <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} placeholder="Your Name" />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '5px', fontWeight: 'bold' }}>Phone</label>
                                <input type="tel" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} placeholder="Your Number" />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '5px', fontWeight: 'bold' }}>Message</label>
                                <textarea rows="4" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} placeholder="How can we help?"></textarea>
                            </div>
                            <Button variant="primary" style={{ marginTop: '10px' }}>Send Inquiry</Button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="section" style={{ padding: 0, height: '400px', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ color: '#999' }}>Detailed Google Map Embed Would Go Here</p>
            </section>
        </div>
    );
};

export default Contact;
