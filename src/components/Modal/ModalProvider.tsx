import React, { useState, useCallback, ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import ModalContainer from './ModalContainer';
import type { ModalType, ModalPropsMap, ModalInstance } from './types';
import { nanoid } from 'nanoid';
import { ModalContext } from './ModalContext';

export const ModalProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [modals, setModals] = useState<ModalInstance[]>([]);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  const close = useCallback((key?: string) => {
    setModals(prev => (key ? prev.filter(modal => modal.key !== key) : prev.slice(0, -1)));

    if (previouslyFocusedElement.current) {
      previouslyFocusedElement.current.focus();
    }
  }, []);

  const openModal = useCallback(
    <T extends ModalType>(type: T, props: ModalPropsMap[T]) => {
      const key = nanoid();
      previouslyFocusedElement.current = document.activeElement as HTMLElement;
      setModals(prev => [...prev, { key, type, props } as ModalInstance]);

      return () => {
        close(key);
      };
    },
    [close]
  );

  const closeAll = useCallback(() => {
    modals.forEach(modal => close(modal.key));
  }, [modals, close]);

  return (
    <ModalContext.Provider
      value={{
        close,
        closeAll,
        openModal,
        modals,
      }}
    >
      {children}
      {createPortal(<ModalContainer modals={modals} />, document.body)}
    </ModalContext.Provider>
  );
};
