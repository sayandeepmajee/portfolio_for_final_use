import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const roles = ['Full-Stack Dev', 'ML Engineer', 'Problem Solver', 'CS Student'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const current = roles[roleIdx];
    if (!deleting) {
      if (displayed.length < current.length) {
        timerRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timerRef.current = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timerRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setDeleting(false);
        setRoleIdx(i => (i + 1) % roles.length);
      }
    }
    return () => clearTimeout(timerRef.current);
  }, [displayed, deleting, roleIdx]);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.bg}>
        <div className={styles.grid} />
        <div className={styles.glow} />
      </div>

      <div className={styles.content}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          B.Tech CSE @ KIIT · CGPA 8.76
        </motion.p>

        <h1 className={styles.name}>
          {'Sayandeep\nMajee'.split('\n').map((line, i) => (
            <motion.span
              key={i}
              className={styles.nameLine}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.div
          className={styles.typeRow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span className={styles.typeLabel}>→</span>
          <span className={styles.typed}>{displayed}</span>
          <span className={styles.cursor} />
        </motion.div>

        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Building end-to-end software — from neural networks<br />to responsive UIs.
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05 }}
        >
          <a href="#projects" className={styles.ctaPrimary}>View Projects</a>
          <a href="#contact" className={styles.ctaSecondary}>Get in Touch</a>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </motion.div>
    </section>
  );
}
