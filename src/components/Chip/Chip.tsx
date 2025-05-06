import styles from './Chip.module.css';

type ChipProps<T> = {
  text: string;
  value: T;
  selected?: boolean;
  onClick?: (value: T) => void;
};

export function Chip<T>({ selected, onClick, text, value }: ChipProps<T>) {
  return (
    <li className={`${styles.categoryItem} ${selected ? styles.active : ''}`} onClick={() => onClick?.(value)}>
      {text}
    </li>
  );
}
