import { createContext } from "react";
import type { ModalInstance, ModalPropsMap, ModalType } from "./types";

type ModalContextType = {
  close: (key?: string) => void;
  closeAll: () => void;
  openModal: (type: ModalType, props: ModalPropsMap[ModalType]) => () => void;
  modals: ModalInstance[];
};

export const ModalContext = createContext<ModalContextType | null>(null);
