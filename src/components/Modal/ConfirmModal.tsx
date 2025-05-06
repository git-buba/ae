import { FC, ReactNode } from 'react';
import styles from './Modal.module.css';

export interface ConfirmModalProps {
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel?: () => void;
  children?: ReactNode;
}

const ConfirmModal: FC<ConfirmModalProps> = ({
  title = '확인',
  message,
  confirmText = '확인',
  cancelText = '취소',
  onConfirm,
  onCancel,
  children,
}) => {
  return (
    <div>
      <header>
        <h3>{title}</h3>
      </header>
      <div>{children ? children : <p>{message}</p>}</div>
      <div className={styles.modalFooter}>
        <button onClick={onCancel}>{cancelText}</button>
        <button onClick={onConfirm} autoFocus>
          {confirmText}
        </button>
      </div>
    </div>
  );
};

export default ConfirmModal;
