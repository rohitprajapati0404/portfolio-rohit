import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="nav-container">
                <div className="logo gradient-text">PORTFOLIO</div>

                {/* Desktop Links */}
                <ul className="nav-links desktop-only">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href}>{link.name}</a>
                        </li>
                    ))}
                </ul>

                <div className="nav-cta desktop-only">
                    <a href="#contact" className="btn-primary">Hire Me</a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="menu-toggle" onClick={toggleMenu}>
                    {menuOpen ? <FiX /> : <FiMenu />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    >
                        <ul className="mobile-nav-links">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} onClick={closeMenu}>{link.name}</a>
                                </li>
                            ))}
                            <li>
                                <a href="#contact" className="btn-primary" onClick={closeMenu}>Hire Me</a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
