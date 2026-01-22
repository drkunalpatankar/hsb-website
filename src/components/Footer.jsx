import React from 'react';
import './Footer.css';
import { Instagram, MapPin, Mail, Phone, Calendar } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__brand">
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <img src="/logo.png" alt="HSB Logo" style={{ height: '32px', marginRight: '10px' }} />
                        <h3 className="footer__logo" style={{ margin: 0 }}>Heartstrings & Braces</h3>
                    </div>
                    <p className="footer__tagline">Evidence-based orthodontics for all ages.</p>
                    <div className="footer__socials">
                        <a href="https://www.instagram.com/heartstringsbraces" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
                    </div>
                </div>

                <div className="footer__info">
                    <div className="footer__item">
                        <MapPin size={18} className="footer__icon" />
                        <p>Dr. Mayekar’s Oral Care Centre,<br />1, Dadi Seth Road, Walkeshwar,<br />Mumbai, Maharashtra 400006</p>
                    </div>
                    <div className="footer__item">
                        <Mail size={18} className="footer__icon" />
                        <a href="mailto:smile@hsb.care">smile@hsb.care</a>
                    </div>
                    <div className="footer__item">
                        <Phone size={18} className="footer__icon" />
                        <a href="tel:+918591990660">+91 85919 90660</a>
                    </div>
                </div>

                <div className="footer__hours">
                    <div className="footer__item">
                        <Calendar size={18} className="footer__icon" />
                        <p>Mon - Sat: 10:00 AM - 7:00 PM<br />Sun: Closed</p>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Heartstrings & Braces. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
