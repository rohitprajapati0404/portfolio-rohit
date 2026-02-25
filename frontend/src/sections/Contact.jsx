import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: 'Rohit Prajapati',
        };

        try {
            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            setStatus({ type: 'success', message: 'Thank you! Your message has been sent.' });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({
                type: 'error',
                message: 'Oops! Something went wrong. Please try again later or email me directly.'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="section-header" data-aos="fade-up">
                <h2 className="section-title gradient-text">Get In Touch</h2>
                <div className="underline"></div>
            </div>

            <div className="contact-container">
                <div className="contact-info" data-aos="fade-right">
                    <h3>Let's talk about your project</h3>
                    <p>I'm always open to discussing new opportunities, creative ideas or collaborations.</p>

                    <div className="info-items">
                        <div className="info-item">
                            <FiMail className="icon" />
                            <div>
                                <h4>Email</h4>
                                <p>rohitprjapati523700@gmail.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FiPhone className="icon" />
                            <div>
                                <h4>Phone</h4>
                                <p>+91 9327602836</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FiMapPin className="icon" />
                            <div>
                                <h4>Location</h4>
                                <p>Surat, Gujrat</p>
                            </div>
                        </div>
                    </div>
                </div>

                <motion.div
                    className="contact-form-container glass-card"
                    data-aos="fade-left"
                >
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn-primary" disabled={loading}>
                            {loading ? 'Sending...' : <>Send Message <FiSend /></>}
                        </button>

                        <AnimatePresence>
                            {status.message && (
                                <motion.div
                                    className={`status-message ${status.type}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {status.message}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
