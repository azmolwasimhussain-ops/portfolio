import React, { useState } from 'react';
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
  const { email, message } = portfolioData.contact;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
            {message}
          </motion.p>

          <motion.div className={styles.emailRow} variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} transition={{ delay: 0.2 }}>
            <FaEnvelope className={styles.emailIcon} aria-hidden="true" />
            <span className={styles.emailText}>{email}</span>
            <motion.button
              className={styles.copyBtn}
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              id="contact-copy-email"
              whileTap={{ scale: 0.94 }}
            >
              {copied ? '✓ Copied!' : 'Copy'}
            </motion.button>
          </motion.div>

          <motion.a
            href={`mailto:${email}`}
            className={styles.mailBtn}
            id="contact-say-hello"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ delay: 0.25 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Say Hello 👋
          </motion.a>

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
