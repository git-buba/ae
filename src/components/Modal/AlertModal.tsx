import { FC, ReactNode } from 'react';
import styles from './Modal.module.css';

export interface AlertModalProps {
  title?: string;
  message?: string;
  confirmText?: string;
  children?: ReactNode;
  onClose?: () => void;
}

const AlertModal: FC<AlertModalProps> = ({ title = '알림', message, confirmText = '확인', children, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalHeader}>
        <h3>{title}</h3>
      </div>
      <div className={styles.modalContent}>{children ? children : <p>{message}</p>}</div>
      <div className={styles.modalFooter}>
        <button onClick={onClose} autoFocus>
          {confirmText}
        </button>
      </div>
    </div>
  );
};

export default AlertModal;
