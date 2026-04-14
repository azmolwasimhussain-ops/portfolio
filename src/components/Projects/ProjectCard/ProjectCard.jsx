import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import { fadeUp } from '../../../utils/animations';
import styles from './ProjectCard.module.css';

/**
 * ProjectCard — reusable card component.
 *
 * Props:
 *   title       {string}   Project name
 *   description {string}   Short description
 *   tech        {string[]} Tech stack tags
 *   github      {string}   GitHub URL
 *   live        {string}   Live demo URL
 *   stars       {number}   GitHub Stars
 */
const ProjectCard = ({ title, description, tech = [], github, live, stars }) => {
  return (
    <motion.article
      className={styles.card}
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25, ease: 'easeOut' } }}
      aria-label={`Project: ${title}`}
    >
      {/* Hover glow accent */}
      <div className={styles.glowAccent} aria-hidden="true" />

      {/* ── Card Header ── */}
      <div className={styles.header}>
        {/* Folder icon */}
        <svg
          className={styles.folderIcon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>

        {/* Links */}
        <div className={styles.links}>
          {stars !== undefined && (
            <div className={styles.starCount} aria-label={`${stars} stars`}>
              <FaStar className={styles.starIcon} /> <span>{stars}</span>
            </div>
          )}
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} — GitHub repository`}
              className={styles.link}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
          )}
          {live && live !== '#' && (
            <motion.a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} — Live demo`}
              className={styles.link}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaExternalLinkAlt />
            </motion.a>
          )}
        </div>
      </div>

      {/* ── Body ── */}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      {/* ── Tech Stack ── */}
      <ul className={styles.techList} aria-label="Tech stack">
        {tech.map((item) => (
          <li key={item} className={styles.techTag}>
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

export default ProjectCard;
