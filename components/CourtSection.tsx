import styles from './CourtSection.module.css';

export default function CourtSection() {
  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <a href="#" className={styles.badge}>CHOOSE YOUR COURT ✦</a>
        <h2 className={styles.title}>
          <span className={styles.accent}>Elevate</span><br />
          Your<br />
          <span className={styles.accent}>Padel</span><br />
          Game
        </h2>

        <div className={styles.bottom}>
          <a href="#" className={styles.cta}>RESERVE A COURT →</a>
          <span className={styles.tag}>COURT BLACK</span>
        </div>
      </div>
    </section>
  );
}