import { CounselForm } from '@/features/counsel/ui';
import styles from './CounselPage.module.css';

export const CounselPage = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.header}>
        상담 문의 <em>기아 비즈가 최고의 모빌리티 솔루션을 제안해드립니다.</em>
      </h1>
      <CounselForm />
    </div>
  );
};
