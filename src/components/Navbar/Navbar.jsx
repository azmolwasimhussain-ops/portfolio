import React, { useState, useEffect } from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import styles from './Navbar.module.css';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    icon: FaGithub,
    href: 'https://github.com/azmolwasimhussain-ops',
    label: 'GitHub',
  },
  {
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/azmol-wasim-hussain-404778376/',
    label: 'LinkedIn',
  },
  {
    icon: FaTwitter,
    href: 'https://x.com/AzmolWasim786',
    label: 'Twitter',
  },
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com/wish_master_azmol_007/',
    label: 'Instagram',
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <>
      {menuOpen && (
        <div className={styles.backdrop} onClick={() => setMenuOpen(false)} />
      )}

      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <nav className={`${styles.nav} container`}>

          <a href="#home" className={styles.logo} onClick={() => handleNavClick('#home')}>
            Azmol<span className={styles.logoDot}>.</span>
          </a>

          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`${styles.navLink} ${activeLink === link.href ? styles.active : ''}`}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.socialIcons}>
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

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
          <ul className={styles.mobileNavLinks}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`${styles.mobileNavLink} ${activeLink === link.href ? styles.active : ''}`}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.mobileSocial}>
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
        </div>
      </header>
    </>
  );
};

export default Navbar;
