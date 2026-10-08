import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#" className={styles.cta}>RESERVE A COURT →</a>
      <div className={styles.logo}>
        <span className={styles.dot} />
        PADEL SOCIAL CLUB
      </div>
      <span className={styles.copy}>© 2025</span>
    </footer>
  );
}