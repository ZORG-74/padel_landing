import styles from './Energy.module.css';

export default function Energy() {
  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <span className={styles.badge}>✦</span>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Experience the<br /> true energy<br /> of padel
        </h2>
        <p className={styles.text}>
          More than a game — a community built on passion, precision,
          and the pursuit of excellence. Whether you&apos;re a beginner or a
          pro, there&apos;s a place for you on our court.
        </p>
        <a href="#" className={styles.cta}>RESERVE A COURT →</a>
      </div>
    </section>
  );
}