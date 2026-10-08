import Image from 'next/image';
import styles from './Trainers.module.css';

const trainers = [
  { name: 'Max Davis', hours: '9.000h', clients: '700+', img: '/trainer-1.jpg' },
  { name: 'Alex Mercer', hours: '5.000h', clients: '30+', img: '/trainer-2.jpg' },
];

export default function Trainers() {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <span className={styles.label}>Train like a pro</span>
        <a href="#" className={styles.swipe}>Swipe To See All →</a>
      </div>

      <div className={styles.grid}>
        {trainers.map((t) => (
          <article key={t.name} className={styles.card}>
            <Image
              src={t.img}
              alt={t.name}
              width={800}
              height={900}
              className={styles.photo}
            />
            <div className={styles.info}>
              <h3>{t.name}</h3>
              <div className={styles.stats}>
                <div>
                  <strong>{t.hours}</strong>
                  <span>Hours</span>
                </div>
                <div>
                  <strong>{t.clients}</strong>
                  <span>Clients</span>
                </div>
              </div>
              <a href="#" className={styles.book}>BOOK A SESSION →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}