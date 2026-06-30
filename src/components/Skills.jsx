import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import styles from './Skills.module.css';

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'SQL', 'C'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['React.js', 'Node.js', 'Express.js', 'NumPy', 'Pandas'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'Linux'],
  },
  {
    category: 'Core Concepts',
    skills: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Web Development'],
  },
  {
    category: 'Machine Learning',
    skills: ['XGBoost', '1D CNN', 'Feature Engineering', 'Data Preprocessing'],
  },
];

export default function Skills() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="skills" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.num}>02</span>
          <span>Skills</span>
        </motion.div>

        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Technical Stack
        </motion.h2>

        <div className={styles.groups}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              className={styles.group}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + gi * 0.07 }}
            >
              <p className={styles.groupLabel}>{group.category}</p>
              <div className={styles.pills}>
                {group.skills.map((s, si) => (
                  <span key={si} className={styles.pill}>{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
