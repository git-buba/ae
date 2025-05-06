import { RoutePath } from '@/router/constants';
import styles from './Header.module.css';
import { useModal } from '@/components/Modal';

export const Header = () => {
  const { openAlertModal } = useModal();

  const handleClickMenu = () => {
    openAlertModal({
      message: '준비중입니다.',
    });
  };
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}></a>

        <nav className={styles.nav}>
          <ul>
            <li>
              <a onClick={handleClickMenu}>서비스 소개</a>
            </li>
            <li>
              <a href="/">자주 묻는 질문</a>
            </li>
            <li>
              <a onClick={handleClickMenu}>새소식</a>
            </li>
            <li>
              <a href={RoutePath.COUNSEL}>상담문의</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
