import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#">Court</a>
        <a href="#">Pricing</a>
        <a href="#">Events</a>
      </nav>
      <div className={styles.logo}>
        <span className={styles.dot} />
        PADEL SOCIAL CLUB
      </div>
      <div className={styles.right}>
        <span className={styles.phone}>+1 (23) 456 7890</span>
        <span className={styles.avatar} />
      </div>
    </header>
  );
}