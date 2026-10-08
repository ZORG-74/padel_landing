import styles from './Marquee.module.css';

export default function Marquee() {
  const items = Array.from({ length: 10 });
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {items.map((_, i) => (
          <span key={i}>
            PADEL SOCIAL CLUB <span className={styles.sep}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}