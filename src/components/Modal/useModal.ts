import { useContext } from 'react';
import { ModalPropsMap } from './types';
import { ModalContext } from './ModalContext';

export const useModalContext = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('ModalContext not found');
  return ctx;
};

export const useModal = () => {
  const { openModal, close, closeAll } = useModalContext();

  const openAlertModal = (props: ModalPropsMap['alert']) => {
    return openModal('alert', props);
  };

  const openConfirmModal = (props: ModalPropsMap['confirm']) => {
    return openModal('confirm', props);
  };

  return { openAlertModal, openConfirmModal, close, closeAll };
};
