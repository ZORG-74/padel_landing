import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.title}>
          Motion. <span className={styles.accent}>Discipline.</span> Result.
        </h1>

        <div className={styles.bottom}>
          <div className={styles.card}>
            <div className={styles.cardLabel}>Rating</div>
            <div className={styles.cardValue}>4.8</div>
            <div className={styles.cardStars}>★★★★★</div>
          </div>

          <a href="#" className={styles.cta}>RESERVE A COURT →</a>
        </div>
      </div>
    </section>
  );
}