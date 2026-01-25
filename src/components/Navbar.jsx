import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import Button from './ui/Button';
import { Menu, X } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { openBooking } = useBooking();

    useEffect(() => {
        const handleScroll = () => {
            // Keep navbar solid if not on home page, or if scrolled
            if (window.scrollY > 50 || location.pathname !== '/') {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Initial check to set state correctly on load/navigate
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Treatments', path: '/treatments' },
        { name: 'Resources', path: '/resources' },
        { name: 'Case Gallery', path: '/case-gallery' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="container navbar__container">
                <Link to="/" className="navbar__logo">
                    <img src="/logo.png" alt="Heartstrings & Braces Logo" style={{ height: '40px', marginRight: '10px' }} />
                    <span>Heartstrings <span className="navbar__logo-accent">&</span> Braces</span>
                </Link>

                {/* Desktop Menu */}
                <div className="navbar__menu">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <div onClick={openBooking}>
                        <Button variant="primary">
                            Book Consultation
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="navbar__toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                {mobileMenuOpen && (
                    <div className="navbar__mobile-menu">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) => `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <div
                            onClick={() => { setMobileMenuOpen(false); openBooking(); }}
                            style={{ width: '100%', textAlign: 'center' }}
                        >
                            <Button variant="primary" style={{ width: '100%' }}>
                                Book Consultation
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
