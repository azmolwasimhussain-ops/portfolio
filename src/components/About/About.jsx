import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import { portfolioData } from '../../data/portfolioData';
import { fadeUp, slideLeft, slideRight, scaleIn, staggerContainer, viewport } from '../../utils/animations';

const About = () => {
  const { bio, stats, funFacts } = portfolioData.about;
  const paragraphs = bio.split('\n\n').filter(Boolean);

  return (
    <section className={styles.aboutSection} id="about">
      <div className="container">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          About Me
        </motion.h2>

        <div className={styles.aboutGrid}>
          {/* ── Left: Photo + Stats ── */}
          <motion.div
            className={styles.leftCol}
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className={styles.photoCard}>
              <img
                src="https://harsh-brown-uv8s8v1phz.edgeone.app/WhatsApp%20Image%202026-01-16%20at%2023.10.20.jpeg"
                alt="Azmol Wasim Hussain"
                className={styles.photo}
              />
              <div className={styles.photoOverlay}>
                <span>Azmol Wasim Hussain</span>
              </div>
            </div>

            <motion.div
              className={styles.statsRow}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {stats.map((stat, i) => (
                <motion.div key={i} className={styles.statCard} variants={fadeUp}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Bio + Tags ── */}
          <motion.div
            className={styles.rightCol}
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className={styles.bioWrapper}>
              {paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  className={styles.bio}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  transition={{ delay: i * 0.1 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            <motion.div
              className={styles.tagsSection}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <h3 className={styles.tagsHeading}>What I'm Into</h3>
              <ul className={styles.tagList}>
                {funFacts.map((fact, i) => (
                  <li key={i} className={styles.tag}>
                    <span className={styles.tagDot} aria-hidden="true" />
                    {fact}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.a
              href="#contact"
              className={styles.connectBtn}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              whileHover={{ x: 6 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Let's Connect →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
