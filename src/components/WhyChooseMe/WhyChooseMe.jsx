import React from 'react';
import { motion } from 'framer-motion';
import styles from './WhyChooseMe.module.css';
import { fadeUp, staggerContainer, viewport } from '../../utils/animations';
import { FaCode, FaBrain, FaPaintBrush, FaRocket } from 'react-icons/fa';

const features = [
  {
    icon: FaCode,
    title: 'Clean, Scalable Code',
    desc: 'I write modular, maintainable React code following best practices.',
  },
  {
    icon: FaBrain,
    title: 'Fast Learner',
    desc: 'Adapt quickly to new tech, spanning Frontend to AI/ML tools.',
  },
  {
    icon: FaPaintBrush,
    title: 'Strong UI/UX Focus',
    desc: 'Obsessed with creating beautiful, intuitive, and accessible interfaces.',
  },
  {
    icon: FaRocket,
    title: 'Independent Builder',
    desc: 'Capable of taking projects from idea to fully deployed applications.',
  },
];

const WhyChooseMe = () => {
  return (
    <section className={styles.section} id="why-choose-me">
      <div className="container">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          Why Choose Me
        </motion.h2>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {features.map((feature, idx) => (
            <motion.div key={idx} className={styles.card} variants={fadeUp}>
              <div className={styles.iconWrapper}>
                <feature.icon className={styles.icon} />
              </div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.desc}>{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
