import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Ground Water Level Prediction',
    date: 'Apr 2026',
    tag: 'Machine Learning',
    description:
      'ML system for groundwater level forecasting using XGBoost and 1D CNN architectures. Includes data preprocessing, feature selection, and normalization for improved trend analysis.',
    stack: ['Python', 'XGBoost', '1D CNN', 'Pandas', 'NumPy'],
    highlight: 'Groundwater forecasting accuracy improved via dual-model evaluation.',
  },
  {
    title: 'Image Search Engine',
    date: 'Aug 2025',
    tag: 'Full-Stack',
    description:
      'A full-stack image search engine with MongoDB-powered filtering, Express.js routing, and a clean responsive UI built with Handlebars templates.',
    stack: ['MongoDB', 'JavaScript', 'Express.js', 'HBS', 'CSS'],
    highlight: 'Real-time search & filtering with a minimal responsive UI.',
  },
  {
    title: 'Weather App',
    date: 'Jan 2025',
    tag: 'Frontend',
    description:
      'Real-time weather application integrating OpenWeatherMap API. Uses async/await for smooth data fetching and dynamic DOM updates without page reload.',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Fetch API'],
    highlight: 'Async weather data with dynamic updates via OpenWeatherMap API.',
  },
];

export default function Projects() {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.num}>03</span>
          <span>Projects</span>
        </motion.div>

        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Selected Work
        </motion.h2>

        <div className={styles.list}>
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className={`${styles.project} ${hovered === i ? styles.hovered : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className={styles.projectHeader}>
                <div className={styles.projectMeta}>
                  <span className={styles.projectTag}>{p.tag}</span>
                  <span className={styles.projectDate}>{p.date}</span>
                </div>
                <span className={styles.arrow}>↗</span>
              </div>

              <h3 className={styles.projectTitle}>{p.title}</h3>
              <p className={styles.projectDesc}>{p.description}</p>

              <div className={styles.projectHighlight}>
                <span className={styles.dot} />
                {p.highlight}
              </div>

              <div className={styles.stack}>
                {p.stack.map((s, si) => (
                  <span key={si} className={styles.stackItem}>{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
