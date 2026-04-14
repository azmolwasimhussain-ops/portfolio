import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './CursorGlow.module.css';

const CursorGlow = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Use spring physics for smooth, non-distracting trailing effect
  const springConfig = { damping: 40, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className={styles.cursorGlow}
      style={{
        left: smoothX,
        top: smoothY,
      }}
      aria-hidden="true"
    />
  );
};

export default CursorGlow;
