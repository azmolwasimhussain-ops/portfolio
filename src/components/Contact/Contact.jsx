import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import { portfolioData } from '../../data/portfolioData';
import { fadeUp, scaleIn, staggerContainer, viewport } from '../../utils/animations';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub,     href: portfolioData.contact.social.github,    label: 'GitHub' },
  { icon: FaLinkedinIn, href: portfolioData.contact.social.linkedin,  label: 'LinkedIn' },
  { icon: FaTwitter,    href: portfolioData.contact.social.twitter,   label: 'Twitter' },
  { icon: FaInstagram,  href: portfolioData.contact.social.instagram, label: 'Instagram' },
];

const Contact = () => {
  const { email, message: contactMessage } = portfolioData.contact;
  const [copied, setCopied] = useState(false);
  const form = useRef();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hhryqbt',
        'template_rqibv37',
        form.current,
        { publicKey: 'PskY6DmKu_Hot11hm' }
      )
      .then(
        () => {
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('EmailJS Error:', error);
          alert('Failed to send message: ' + (error.text || error.message || 'Unknown error'));
        }
      );

    e.target.reset();
  };

  return (
    <section className={styles.contactSection} id="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className={styles.contactCard}
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className={styles.glowOrb} aria-hidden="true" />

          <motion.p className={styles.subHeading} variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
            What's Next?
          </motion.p>
          <motion.h3 className={styles.cta} variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} transition={{ delay: 0.1 }}>
            Let's Work Together
          </motion.h3>
          <motion.p className={styles.message} variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} transition={{ delay: 0.15 }}>
            {contactMessage}
          </motion.p>

            <p className={styles.replyNotice}>I usually reply within 24 hours</p>
            <form ref={form} className={styles.contactForm} onSubmit={sendEmail}>
              <input type="text" name="user_name" placeholder="Your Name" required className={styles.inputField} />
              <input type="email" name="user_email" placeholder="Your Email" required className={styles.inputField} />
              <textarea name="message" placeholder="Your Message" rows="5" required className={styles.textArea} />
              <button type="submit" className={styles.submitBtn}>
                Send Message 🚀
              </button>
            </form>
          <motion.div
            className={styles.socials}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={styles.socialIcon}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.12 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
