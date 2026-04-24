import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

import ProjectCard from './ProjectCard/ProjectCard';
import { fadeUp, staggerContainer, viewport } from '../../utils/animations';
import styles from './Projects.module.css';
import featuredProjects from '../../data/featuredProjects'; // Import the new static data

const Projects = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <div className="container">
        {/* ── Section Heading ── */}
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ delay: 0.1 }}
        >
          A selection of things I've built recently
        </motion.p>

        {/* ── Cards Grid ── */}
        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id || project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github === '#' ? null : project.github}
              live={project.live === '#' ? null : project.live}
              impact={project.impact}
            />
          ))}
        </motion.div>

        {/* ── View All CTA ── */}
        <motion.div
          className={styles.cta}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.a
            href="https://github.com/azmolwasimhussain-ops"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubBtn}
            id="projects-view-all"
            whileHover={{ y: -3, boxShadow: '0 8px 28px rgba(99,102,241,0.3)' }}
            whileTap={{ scale: 0.97 }}
          >
            <FaGithub aria-hidden="true" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
