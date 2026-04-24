import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { portfolioData } from '../../data/portfolioData';
import { fadeUp, scaleIn, slideLeft, slideRight, staggerContainer, viewport } from '../../utils/animations';

const Hero = () => {
  return (
    <section className={styles.heroSection} id="home">
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />

      <div className={`container ${styles.heroContainer}`}>

        {/* ── Left: Text ── */}
        <motion.div
          className={styles.content}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.badge} variants={fadeUp}>
            {portfolioData.hero.badge}
          </motion.div>

          <motion.p className={styles.greeting} variants={fadeUp}>
            👋 Hello, I'm
          </motion.p>

          <motion.h1 className={styles.name} variants={fadeUp}>
            Azmol Wasim<br />
            <span className={styles.nameHighlight}>Hussain</span>
          </motion.h1>

          <motion.h2 className={styles.role} variants={fadeUp}>
            Frontend Developer&nbsp;
            <span className={styles.roleSeparator}>|</span>
            &nbsp;AI/ML Enthusiast
          </motion.h2>

          <motion.p className={styles.description} variants={fadeUp}>
            {portfolioData.hero.intro}
          </motion.p>

          <motion.div className={styles.ctaGroup} variants={fadeUp}>
            <a href="#projects" className={styles.btnPrimary} id="hero-view-projects">
              <span>{portfolioData.hero.ctaText}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#contact" className={styles.btnSecondary} id="hero-hire-me">
              <span>{portfolioData.hero.ctaText2}</span>
            </a>
            <a href="/resume.pdf" download className={styles.btnSecondary} id="hero-download-resume">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download Resume</span>
            </a>
          </motion.div>

          <motion.div className={styles.scrollHint} variants={fadeUp} aria-hidden="true">
            <span className={styles.scrollLine} />
            <span className={styles.scrollText}>scroll down</span>
          </motion.div>
        </motion.div>

        {/* ── Right: Photo ── */}
        <motion.div
          className={styles.photoSide}
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <div className={styles.photoWrapper}>
            <div className={styles.photoRing} aria-hidden="true" />
            <img
              src="https://harsh-brown-uv8s8v1phz.edgeone.app/WhatsApp%20Image%202026-01-16%20at%2023.10.20.jpeg"
              alt="Azmol Wasim Hussain"
              className={styles.photo}
              loading="eager"
            />
            <div className={styles.photoGlow} aria-hidden="true" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
