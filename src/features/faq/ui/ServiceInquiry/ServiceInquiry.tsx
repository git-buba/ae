import styles from './ServiceInquiry.module.css';

const ServiceInquiry = () => {
  return (
    <section className={styles.serviceInquiry}>
      <h2 className={styles.heading}>서비스 문의</h2>
      <div className={styles.inquiryInfo}>
        <a
          className={styles.button}
          href="/static/media/proposal.e465bf89a6a3066e69af.pdf"
          download="기아 비즈 서비스 제안서"
        >
          <img
            src="https://wiblebiz.kia.com/static/media/ic_download.febe2d94e4afb34fb807.svg"
            className={`${styles.icon} ${styles.download}`}
          />
          <span>서비스 제안서 다운로드</span>
        </a>
        <a className={styles.button} href="/Counsel">
          <img
            src="https://wiblebiz.kia.com/static/media/ic_write.6fce5366fbb91212dc5c.svg"
            className={`${styles.icon} ${styles.write}`}
          />
          <span>상담문의 등록하기</span>
        </a>
        <a className={styles.button} href="https://pf.kakao.com/_xfLxjdb" target="_blank" rel="noreferrer">
          <img
            src="https://wiblebiz.kia.com/static/media/ic_talk.ed42cf9a28983def7c38.svg"
            className={`${styles.icon} ${styles.talk}`}
          />
          <span>
            카톡으로 문의하기 <em>ID : 기아 비즈</em>
          </span>
        </a>
      </div>
    </section>
  );
};

export default ServiceInquiry;
