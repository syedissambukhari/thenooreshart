import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import styles from '../assets/styles/ContactUs.module.css'; // Create and style this file

const ContactUs = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const sendEmail = async (e) => {
        e.preventDefault();
        if (!formRef.current) return;

        setLoading(true);

        try {
            const result = await emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            console.log('Email sent!', result.text);
            setMessage('Your message has been sent successfully!');
            formRef.current.reset();
        } catch (error) {
            console.error('Error sending email:', error);
            setMessage('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.section
            id="contact"
            className={styles.contactContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h1 className={styles.heading}>Contact Us</h1>
            <p className={styles.description}>We would love to hear from you!</p>

            <form ref={formRef} onSubmit={sendEmail} className={styles.form}>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <input type="phone" name="phone" placeholder="Your Phone Number" required />
                <textarea name="message" placeholder="Your Message" rows="10" required />
                <button type="submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>

            {message && <p className={styles.successMessage}>{message}</p>}
            {/* WhatsApp Button */}
            <div className={styles.whatsappContainer}>
                <a
                    href="https://wa.me/923107420940?text=Hello, I would like to get more!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappButton}
                >
                    📱 Chat on WhatsApp
                </a>
            </div>
        </motion.section>
    );
};

export default ContactUs;
