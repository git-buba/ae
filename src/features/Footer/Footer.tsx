import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.copyright}>
          <img src="https://kiabiz.kia.com/static/media/logo_kia.5deccfef5e3772b2d594.svg" />
          <p>© 2023 KIA CORP. All Rights Reserved.</p>
        </div>
        <div className={styles.information}>
          <span className={styles.util}>
            <a className={styles.policy} href="https://privacy.kia.com/overview/full-policy">
              <b>개인정보 처리방침</b>
            </a>
            <span>이용약관</span>
          </span>
          <address className={styles.address}>
            <span>
              서울특별시 서초구 헌릉로 12 <em>기아㈜</em>
            </span>
            <span>
              대표: <i>송호성, 최준영</i>
            </span>
            <span>
              사업자등록번호: <i>119-81-02316</i>
            </span>
            <span>
              통신판매번호: <i>2006-07935</i>
            </span>
            <span>
              고객센터: <i>1833-4964</i>
            </span>
            <span>
              제휴문의: <a href="mailto:kiabiz@kia.com">kiabiz@kia.com</a>
            </span>
          </address>
        </div>
      </div>
    </footer>
  );
};
