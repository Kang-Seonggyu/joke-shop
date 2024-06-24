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
      <div
        style={{
          padding: '1rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'space-around',
          height: '75vh',
        }}
      >
        {[0, 1, 2, 3, 4, 5].map((img) => (
          <div
            style={{ position: 'relative', width: '46%' }}
            key={`img_${img}`}
          >
            <Image src={'https://placehold.co/600x400'} alt="placehold" fill />
          </div>
        ))}
      </div>
      <div style={{ height: '6rem', lineHeight: '6rem' }}>Contents...</div>
    </main>
  );
}
