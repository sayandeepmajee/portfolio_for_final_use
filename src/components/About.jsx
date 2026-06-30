import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import styles from './About.module.css';

const stats = [
  { value: '8.76', label: 'CGPA' },
  { value: '3+', label: 'Projects Built' },
  { value: '2027', label: 'Graduating' },
];

export default function About() {
  const [ref, inView] = useInView(0.2);

  return (
    <section id="about" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.num}>01</span>
          <span>About</span>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className={styles.heading}>
              Engineering software<br />
              <span className={styles.accent}>end-to-end.</span>
            </h2>
            <p className={styles.body}>
              I'm Sayandeep Majee, a Computer Science student at KIIT, Bhubaneswar. I build
              full-stack web applications and machine learning systems — from real-time APIs
              to predictive models and responsive front-ends.
            </p>
            <p className={styles.body}>
              My foundation is rooted in data structures, algorithms, and clean code. I care
              about writing software that actually works, scales, and is easy to reason about.
            </p>
            <a href="mailto:sayandeepmajee@gmail.com" className={styles.contactLink}>
              sayandeepmajee@gmail.com →
            </a>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <div className={styles.statsGrid}>
              {stats.map((s, i) => (
                <div key={i} className={styles.stat}>
                  <span className={styles.statVal}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
            <div className={styles.card}>
              <div className={styles.cardRow}>
                <span className={styles.cardLabel}>Institution</span>
                <span>KIIT, Bhubaneswar</span>
              </div>
              <div className={styles.cardRow}>
                <span className={styles.cardLabel}>Degree</span>
                <span>B.Tech CSE</span>
              </div>
              <div className={styles.cardRow}>
                <span className={styles.cardLabel}>Year</span>
                <span>2023 – 2027</span>
              </div>
              <div className={styles.cardRow}>
                <span className={styles.cardLabel}>Location</span>
                <span>West Bengal, India</span>
              </div>
              <div className={styles.cardRow} style={{ border: 'none' }}>
                <span className={styles.cardLabel}>Links</span>
                <span className={styles.socials}>
                  <a href="https://linkedin.com/in/sayandeep-majee-084600299" target="_blank" rel="noreferrer">LinkedIn</a>
                  <a href="https://github.com/sayandeepmajee" target="_blank" rel="noreferrer">GitHub</a>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
