import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo gradient-text">PORTFOLIO</div>
                <p>Built with React & Framer Motion. Designed by Rohit Prjapati.</p>

                <div className="footer-socials">
                    <a href="https://github.com/rohitprajapati0404"><FiGithub /></a>
                    <a href="#"><FiLinkedin /></a>
                    <a href="https://www.instagram.com/rohit_prajapati_04?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FiInstagram /></a>
                </div>

                <div className="footer-bottom">
                    &copy; {new Date().getFullYear()} Rohit Prjapati. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
