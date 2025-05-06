import styles from './AppDownload.module.css';

const AppDownload = () => {
  return (
    <section className={styles.appDownload}>
      <div className={styles.inner}>
        <div className={styles.textBlock}>
          <h2 className={styles.heading}>기아 비즈 App 지금 만나보세요!</h2>
        </div>
        <div className={styles.buttonGroup}>
          <a
            href="https://play.google.com/store/apps/details?id=kor.mop.user.app"
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://wiblebiz.kia.com/static/media/logo_googleplay.0988de4fccf649a9a960.svg"
              alt="Google Play"
            />
            Google Play
          </a>
          <a
            href="https://apps.apple.com/kr/app/wible/id1466296162"
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://wiblebiz.kia.com/static/media/logo_appstore.fa5d4b59f7dbf3e27ca4.svg" alt="App Store" />
            App Store
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
