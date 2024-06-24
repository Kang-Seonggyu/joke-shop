import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const sns = [
    {
      to: 'https://www.instagram.com',
      path: '/icons/instagram.svg',
      title: 'INSTAGRAM',
    },
    {
      to: 'https://www.kakaocorp.com',
      path: '/icons/kakaotalk.svg',
      title: 'KAKAOTALK',
    },
    {
      to: 'https://www.facebook.com',
      path: '/icons/facebook.svg',
      title: 'FACEBOOK',
    },
    { to: 'https://line.me/ko', path: '/icons/naver_line.svg', title: 'LINE' },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.anchors}>
        <ul>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">TERMS</a>
          </li>
          <li>
            <a href="#">POLICY</a>
          </li>
          <li>
            <a href="#">HELP</a>
          </li>
        </ul>
        <ul className={styles.social}>
          {sns.map((data) => (
            <li key={data.title}>
              <a href={data.to} target="_blank">
                <Image src={data.path} width={20} height={20} alt="sns" />
                {data.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ul className={styles.contact}>
        <li>서울특별시 OO구 OO로 00길 00-0(OO동) OO빌딩 ( 30303 )</li>
        <li>010-0000-0000</li>
        <li>
          <a href="mailto:jokekim609@gmail.com">jokekim609@gmail.com</a>
        </li>
        <br />
        <li>09:00 - 18:00 ( 점심시간 12:00 - 13:00 )</li>
        <li>070-0000-0000/ 070-0000-0001</li>
        <li>OO은행 000-00000-00-000 조크샾</li>
        <br />
        <li>&copy;joke shop</li>
      </ul>
    </div>
  );
}
