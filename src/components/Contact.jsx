import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import styles from './Contact.module.css';

const links = [
  { label: 'Email',    value: 'sayandeepmajee@gmail.com',         href: 'mailto:sayandeepmajee@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/sayandeep-majee',  href: 'https://linkedin.com/in/sayandeep-majee-084600299' },
  { label: 'GitHub',   value: 'github.com/sayandeepmajee',        href: 'https://github.com/sayandeepmajee' },
  { label: 'Phone',    value: '+91-8116340169',                   href: 'tel:+918116340169' },
];

export default function Contact() {
  const [ref, inView] = useInView(0.2);
  return (
    <section id="contact" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.div className={styles.label}
          initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}>
          <span className={styles.num}>05</span><span>Contact</span>
        </motion.div>

        <motion.h2 className={styles.heading}
          initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}>
          Let's build<br /><span className={styles.accent}>something great.</span>
        </motion.h2>

        <motion.p className={styles.sub}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}>
          Open to internships, collaborations, and interesting projects.
        </motion.p>

        <div className={styles.links}>
          {links.map((l, i) => (
            <motion.a key={i} href={l.href} className={styles.link}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}>
              <span className={styles.linkLabel}>{l.label}</span>
              <span className={styles.linkValue}>{l.value}</span>
              <span className={styles.linkArrow}>↗</span>
            </motion.a>
          ))}
        </div>

        <motion.p className={styles.footer}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}>
          © 2026 Sayandeep Majee
        </motion.p>
      </div>
    </section>
  );
}
