import { FaqCategory } from '@/domains/faq/types';
import styles from './FaqCategoryFilter.module.css';
import { Chip } from '@/components/Chip';

type FaqCategoryFilterProps = {
  categoryList: FaqCategory[];
  selectedcategoryId: string | null;
  onSelectCategory: (id: string | null) => void;
};

export const FaqCategoryFilter = ({ categoryList, selectedcategoryId, onSelectCategory }: FaqCategoryFilterProps) => {
  return (
    <div className={styles.categoryWrapper}>
      <ul className={styles.categoryList}>
        <Chip value={null} text="전체" selected={selectedcategoryId === null} onClick={() => onSelectCategory(null)} />

        {categoryList.map(({ categoryId, categoryName }) => (
          <Chip
            key={categoryId}
            value={categoryId}
            text={categoryName}
            selected={selectedcategoryId === categoryId}
            onClick={onSelectCategory}
          />
        ))}
      </ul>
    </div>
  );
};
