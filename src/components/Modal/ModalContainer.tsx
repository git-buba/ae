import { useTrapFocus } from '@/hooks/useFocusTrap';
import { ComponentPropsWithoutRef, FC, useEffect, useRef } from 'react';
import AlertModal from './AlertModal';
import ConfirmModal from './ConfirmModal';
import { ModalInstance } from './types';
import { useModalContext } from './useModal';
import styles from './ModalContainer.module.css';

export const TrapFocusWrapper: FC<
  ComponentPropsWithoutRef<'dialog'> & {
    active?: boolean;
  }
> = ({ active, ...props }) => {
  const containerRef = useRef<HTMLDialogElement>(null);
  useTrapFocus(containerRef, active);

  return <dialog {...props} className={styles.modalContainer} ref={containerRef}></dialog>;
};
const ModalContainer: FC<{ modals: ModalInstance[] }> = ({ modals }) => {
  const { close } = useModalContext();
  const getModalComponent = (modal: ModalInstance) => {
    const closeModal = () => close(modal.key);
    if (modal.type === 'alert') {
      return <AlertModal {...modal.props} onClose={modal.props.onClose || closeModal} />;
    }
    if (modal.type === 'confirm') {
      return <ConfirmModal {...modal.props} onCancel={modal.props.onCancel || closeModal} />;
    }

    return null;
  };

  useEffect(() => {
    if (modals.length > 0) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modals]);

  return (
    <>
      {modals.map((modalIntance, index) => {
        const isTop = index === modals.length - 1;

        return (
          <TrapFocusWrapper key={modalIntance.key} active={isTop}>
            {getModalComponent(modalIntance)}
          </TrapFocusWrapper>
        );
      })}
    </>
  );
};

export default ModalContainer;
