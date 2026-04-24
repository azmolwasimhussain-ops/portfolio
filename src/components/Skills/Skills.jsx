import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import { portfolioData } from '../../data/portfolioData';
import { fadeUp, staggerContainer, viewport } from '../../utils/animations';

const categoryIcons = {
  Frontend: '🖥️',
  Learning: '🧠',
  Tools: '🛠️',
};

const Skills = () => {
  return (
    <section className={styles.skillsSection} id="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          My Skills
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ delay: 0.1 }}
        >
          Technologies and tools I work with regularly
        </motion.p>

        <motion.div
          className={styles.skillsGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {portfolioData.skills.map((group, index) => (
            <motion.div
              key={index}
              className={styles.skillCard}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.icon} aria-hidden="true">
                  {categoryIcons[group.category] ?? '⚡'}
                </span>
                <h3 className={styles.categoryTitle}>{group.category}</h3>
              </div>

              <ul className={styles.skillList}>
                {group.items.map((skill, i) => (
                  <motion.li
                    key={i}
                    className={styles.skillPill}
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  >
                    <span className={styles.pillDot} aria-hidden="true" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.learningStrip}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className={styles.learningLabel}>Currently Working On →</span>
          {['Building AI-based apps', 'Improving DSA', 'Learning backend (Node.js)'].map((item) => (
            <motion.span
              key={item}
              className={styles.learningTag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
