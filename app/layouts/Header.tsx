'use client';

import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.topBar}
        style={{ display: position > 0 ? 'none' : 'block' }}
      >
        Joke work shop
      </div>

      <div className={styles.menus}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">COURSE</a>
            </li>
            <li>
              <a href="#">COMMUNITY</a>
            </li>
            <li>
              <a href="#">PHOTOS</a>
            </li>
          </ul>
          <button>menu</button>
        </nav>
        <div className={styles.logo}>
          <Image src="/images/logo.png" alt="" width={100} height={30} />
        </div>
        <div className={styles.myInfo}>
          <ul>
            <li>
              <a href="#">mypage</a>
            </li>
            <li>
              <a href="#">cart</a>
            </li>
            <li>
              <a href="#">logout</a>
            </li>
          </ul>
          <button>myinfo</button>
        </div>
      </div>
      {position}
    </div>
  );
}
