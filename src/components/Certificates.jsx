import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import styles from './Certificates.module.css';

const certificates = [
  {
    title: 'Add Your Certificate',
    issuer: 'Issuing Organization',
    date: 'Month Year',
    credentialId: 'XXXX-XXXX',
    category: 'Category',
    description: 'Replace this with a description of what you learned or achieved in this certification.',
    color: '#6366f1',
  },
  {
    title: 'Add Your Certificate',
    issuer: 'Issuing Organization',
    date: 'Month Year',
    credentialId: 'XXXX-XXXX',
    category: 'Category',
    description: 'Replace this with a description of what you learned or achieved in this certification.',
    color: '#4ade80',
  },
  {
    title: 'Add Your Certificate',
    issuer: 'Issuing Organization',
    date: 'Month Year',
    credentialId: 'XXXX-XXXX',
    category: 'Category',
    description: 'Replace this with a description of what you learned or achieved in this certification.',
    color: '#f59e0b',
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
          <motion.div className={styles.sidebar}
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}>
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
