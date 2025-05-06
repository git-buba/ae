import type { FC } from 'react';
import styles from './FagTabs.module.css';
import { TAB_CATEGORIES } from '@/domains/faq/constants';
import { ParentCategoryType } from '@/domains/faq/types';
import clsx from 'clsx';

type FaqTabsProps = {
  current: ParentCategoryType;
  onChange: (category: ParentCategoryType) => void;
};

const FaqTabs: FC<FaqTabsProps> = ({ current, onChange }) => {
  return (
    <ul className={styles.faqTabs}>
      {TAB_CATEGORIES.map(({ key, label }) => (
        <li key={key} className={clsx(current === key && styles.active)}>
          <button type="button" onClick={() => onChange(key)}>
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FaqTabs;
