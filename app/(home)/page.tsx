import Image from 'next/image';
import MyCarousel from '../components/MyCarousel';
import styles from './home.module.css';
import { title } from 'process';

export default function Home() {
  const cityImgs = [
    { title: 'city1', path: '/images/city1.jpg' },
    { title: 'city2', path: '/images/city2.jpg' },
    { title: 'city3', path: '/images/city3.jpg' },
    { title: 'city4', path: '/images/city4.jpg' },
    { title: 'city5', path: '/images/city5.jpg' },
  ];

  return (
    <main>
      <div className={styles.mainCarousel}>
        <MyCarousel>
          {cityImgs.map((img, i) => {
            return (
              <div
                key={`carousel${i}`}
                className={styles.listItem}
                style={{ backgroundImage: `url(${img.path})` }}
              >
                <span style={{ cursor: 'pointer' }}>more...</span>
              </div>
            );
          })}
        </MyCarousel>
      </div>
      <div style={{ height: '6rem', lineHeight: '6rem' }}>다른것1</div>
      <div style={{ height: '6rem', lineHeight: '6rem' }}>다른것2</div>
    </main>
  );
}
