import AlertModal from './AlertModal';
import ConfirmModal from './ConfirmModal';

export const modalRegistry = {
  alert: AlertModal,
  confirm: ConfirmModal,
} as const;

export type ModalType = keyof typeof modalRegistry;

export interface ModalPropsMap {
  alert: Parameters<typeof AlertModal>[0];
  confirm: Parameters<typeof ConfirmModal>[0];
}

export type ModalInstance = {
  key: string;
} & (
  | { type: 'alert'; props: Parameters<typeof AlertModal>[0] }
  | { type: 'confirm'; props: Parameters<typeof ConfirmModal>[0] }
);
