import React from 'react';
import { motion } from 'framer-motion';
import styles from './WhatICanDo.module.css';
import { fadeUp, staggerContainer, viewport } from '../../utils/animations';
import { FaLaptopCode, FaFigma, FaPlug, FaMagic } from 'react-icons/fa';

const services = [
  {
    icon: FaLaptopCode,
    title: 'Responsive Websites',
    desc: 'Building websites that look perfect on any screen size, from mobile to desktop.',
  },
  {
    icon: FaFigma,
    title: 'Figma to React',
    desc: 'Pixel-perfect translation of Figma designs into clean, modular React code.',
  },
  {
    icon: FaPlug,
    title: 'API Integration',
    desc: 'Seamlessly connecting frontends with RESTful APIs or AI models.',
  },
  {
    icon: FaMagic,
    title: 'Clean UI/UX',
    desc: 'Crafting user interfaces that are not just functional, but delightfully smooth.',
  },
];

const WhatICanDo = () => {
  return (
    <section className={styles.section} id="what-i-can-do">
      <div className="container">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          What I Can Do For You
        </motion.h2>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {services.map((service, idx) => (
            <motion.div key={idx} className={styles.card} variants={fadeUp}>
              <div className={styles.iconWrapper}>
                <service.icon className={styles.icon} />
              </div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.desc}>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatICanDo;
