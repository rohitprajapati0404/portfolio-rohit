import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import profileImg from '../assets/profile_picture.png';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <motion.span
                    className="greeting"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Hello, I'm
                </motion.span>

                <motion.h1
                    className="name"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <span className="gradient-text">Rohit Prajapati</span>
                </motion.h1>

                <motion.h2
                    className="role"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Software Engineer</motion.h2>

                <motion.p
                    className="description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    Over 6 months of hands-on experience developing high-performance, interactive, and visually engaging web applications using Node.js, AI-driven solutions, and modern development tools and technologies.                    </motion.p>

                <motion.div
                    className="hero-btns"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <a href="#projects" className="btn-primary">
                        View My Work <FiArrowRight />
                    </a>
                    <div className="social-links">
                        <a href="https://github.com" target="_blank" rel="noreferrer"><FiGithub /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FiLinkedin /></a>
                        <a href="https://www.instagram.com/rohit_prajapati_04?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FiInstagram /></a>

                    </div>
                </motion.div>
            </div>

            <motion.div
                className="hero-image-container"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <div className="image-wrapper">
                    <img src={profileImg} alt="Rohit Prajapati" className="profile-img" />
                    <div className="image-accent"></div>
                </div>
            </motion.div>

            <motion.div
                className="hero-blob"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
        </section>
    );
};

export default Hero;
