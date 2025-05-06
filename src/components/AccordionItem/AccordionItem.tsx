/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import styles from './AccordionItem.module.css';
import clsx from 'clsx';

type AccordionItemProps = {
  id: any;
  category: string;
  subCategory?: string;
  title: string;
  content: string;
  isOpen?: boolean;
  onToggle?: (id: any) => void;
};

export const AccordionItem = ({ id, title, category, subCategory, content, isOpen, onToggle }: AccordionItemProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  const controlled = typeof isOpen === 'boolean';
  const isOpened = controlled ? isOpen : internalIsOpen;

  const handleToggle = () => {
    if (controlled && onToggle) {
      onToggle(id);
    } else {
      setInternalIsOpen(prev => !prev);
    }
  };

  return (
    <li className={styles.listItem}>
      <div className={clsx(styles.accordionButton, isOpened && styles.active)} onClick={handleToggle}>
        <div className={styles.titleWrapper}>
          <span className={styles.category}>{category}</span>
          {subCategory && <span className={styles.subCategory}>{subCategory}</span>}
          <strong>{title}</strong>
        </div>
        <img
          src="https://kiabiz.kia.com/static/media/ic_arrow.4c20d689b2910e0a5bfd.svg"
          className={clsx(styles.icon, isOpened && styles.expanded)}
        />
      </div>
      {
        <div className={clsx(styles.contentWrapper, isOpened && styles.expanded)}>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      }
    </li>
  );
};
