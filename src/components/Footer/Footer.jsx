import React from 'react';
import styles from './Footer.module.css';
import { portfolioData } from '../../data/portfolioData';
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaHeart,
} from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub,     href: portfolioData.contact.social.github,    label: 'GitHub' },
  { icon: FaLinkedinIn, href: portfolioData.contact.social.linkedin,  label: 'LinkedIn' },
  { icon: FaTwitter,    href: portfolioData.contact.social.twitter,   label: 'Twitter' },
  { icon: FaInstagram,  href: portfolioData.contact.social.instagram, label: 'Instagram' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <a href="#home" className={styles.logo}>
          Azmol<span className={styles.dot}>.</span>
        </a>

        <div className={styles.socialLinks}>
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={styles.socialIcon}
            >
              <Icon />
            </a>
          ))}
        </div>

        <p className={styles.copyright}>
          © {year} Azmol Wasim Hussain. Built with{' '}
          <FaHeart className={styles.heart} aria-label="love" />{' '}
          using React + Vite.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
