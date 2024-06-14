import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.anchors}>
        <ul>
          <li>ABOUT</li>
          <li>TERMS</li>
          <li>POLICY</li>
          <li>HELP</li>
        </ul>
        <ul>
          <li>INSTAGRAM</li>
          <li>KAKAOTALK</li>
          <li>FACEBOOK</li>
          <li>LINE</li>
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
