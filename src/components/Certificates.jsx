import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import styles from './Certificates.module.css';

const certificates = [
  {
    title: 'Exploratory Data Analysis for Machine Learning',
    issuer: 'IBM',
    date: 'Jun 2026',
    credentialId: 'NBPDAJNQHGKV',
    category: 'Machine Learning',
    description: 'Become familiar with common Machine Learning vocabulary and the Machine Learning Workflow',
    color: '#6366f1',
    link: 'https://www.coursera.org/account/accomplishments/verify/NBPDAJNQHGKV',
  },
  {
    title: 'Supervised Machine Learning: Regression',
    issuer: 'IBM',
    date: 'Jun 2026',
    credentialId: 'UA12SF71WUKR',
    category: 'Machine Learning',
    description: 'This module introduces a brief overview of supervised machine learning.',
    color: '#4ade80',
    link: 'https://www.coursera.org/account/accomplishments/verify/UA12SF71WUKR',
  },
  {
    title: 'Supervised Machine Learning: Classification',
    issuer: 'IBM',
    date: 'Jun 2026',
    credentialId: 'M5PDM3YI0RGX',
    category: 'Machine Learning',
    description: 'This module walks you through the theory behind k nearest neighbors.',
    color: '#f59e0b',
    link: 'https://www.coursera.org/account/accomplishments/verify/M5PDM3YI0RGX',
  },
  {
    title: 'Unsupervised Machine Learning',
    issuer: 'IBM',
    date: 'Jun 2026',
    credentialId: 'I7Z2GZOZIIX7',
    category: 'Machine Learning',
    description: 'This module introduces Unsupervised Learning and its applications.',
    color: '#ec4899',
    link: 'https://www.coursera.org/account/accomplishments/verify/I7Z2GZOZIIX7',
  },
  {
    title: 'Deep Learning and Reinforcement Learning',
    issuer: 'IBM',
    date: 'Jun 2026',
    credentialId: 'RBY6GYLP4486',
    category: 'Machine Learning',
    description: 'This module introduces Deep Learning, Neural Networks, and their applications.',
    color: '#06b6d4',
    link: 'https://www.coursera.org/account/accomplishments/verify/RBY6GYLP4486',
  },
  {
    title: 'Machine Learning Capstone',
    issuer: 'IBM',
    date: 'Jun 2026',
    credentialId: '45UIPJNOEW1Y',
    category: 'Machine Learning',
    description: 'In this module, I was introduced to the concept of recommender systems.',
    color: '#a855f7',
    link: 'https://www.coursera.org/account/accomplishments/verify/45UIPJNOEW1Y',
  },
  {
    title: 'SAP ABAP Developer',
    issuer: 'Exelr/KIIT',
    date: 'Jun 2026',
    credentialId: '57088 / ExcelR ',
    category: 'Category',
    description: 'the proprietary, high-level programming language used to build SAP ecosystem.',
    color: '#ef4444',
    link: 'https://drive.google.com/file/d/1BLQevb5D0GuCJrTZkjUL4WqX4ZQLvFaC/view?usp=drive_link',
  },
];

export default function Certificates() {
  const [ref, inView] = useInView(0.1);
  const [active, setActive] = useState(0);

  return (
    <section id="certificates" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.div className={styles.label}
          initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}>
          <span className={styles.num}>04</span><span>Certificates</span>
        </motion.div>

        <motion.h2 className={styles.heading}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}>
          Credentials
        </motion.h2>

        <div className={styles.layout}>
          <motion.div className={styles.sidebarWrap}
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <div className={styles.sidebar}>
              {certificates.map((c, i) => (
                <button key={i}
                  className={`${styles.sideItem} ${active === i ? styles.sideItemActive : ''}`}
                  onClick={() => setActive(i)}
                  style={{ '--cert-color': c.color }}>
                  <span className={styles.sideNum}>0{i + 1}</span>
                  <div className={styles.sideText}>
                    <span className={styles.sideTitle}>{c.title}</span>
                    <span className={styles.sideIssuer}>{c.issuer}</span>
                  </div>
                  {active === i && <span className={styles.sideArrow}>→</span>}
                </button>
              ))}
            </div>
          </motion.div>

          <div className={styles.detail}>
            <AnimatePresence mode="wait">
              <motion.div key={active} className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                style={{ '--cert-color': certificates[active].color }}>
                <div className={styles.cardTop}>
                  <div className={styles.certBadge}>
                    <span className={styles.certIcon}>🏆</span>
                  </div>
                  <div>
                    <span className={styles.certCategory}>{certificates[active].category}</span>
                    <h3 className={styles.certTitle}>{certificates[active].title}</h3>
                  </div>
                </div>
                <p className={styles.certDesc}>{certificates[active].description}</p>
                <div className={styles.certMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Issued by</span>
                    <span className={styles.metaVal}>{certificates[active].issuer}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Date</span>
                    <span className={styles.metaVal}>{certificates[active].date}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Credential ID</span>
                    <span className={styles.metaVal}>{certificates[active].credentialId}</span>
                  </div>
                    <a
      href={certificates[active].link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.certLink}
    >
      View ↗
    </a>
                </div>
                
                <div className={styles.certBar} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}