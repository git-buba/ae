import { Faq } from '@/domains/faq/types';
import styles from './FaqList.module.css';
import { AccordionItem } from '@/components/AccordionItem';
import { useEffect, useState } from 'react';
import { ParentCategoryType } from '@/domains/faq/types';

type FaqListProps = {
  hasNextPage?: boolean;
  parentCategory: ParentCategoryType;
  faqList: Faq[];
  subCategoryId: string | null;
  onNextPage?: () => void;
};

export const FaqList = ({ parentCategory, faqList, subCategoryId, onNextPage, hasNextPage }: FaqListProps) => {
  const [openId, setOpenId] = useState<number | null>(null);

  useEffect(() => {
    setOpenId(null);
  }, [subCategoryId]);

  return (
    <ul className={styles.list} key={subCategoryId}>
      {faqList.length === 0 && (
        <div className={styles.emptyData}>
          <p>검색 결과가 없습니다.</p>
        </div>
      )}
      {faqList.map(faq => (
        <AccordionItem
          key={faq.id}
          id={faq.id}
          title={faq.question}
          category={faq.categoryName}
          subCategory={parentCategory === 'USAGE' ? faq.subCategoryName : undefined}
          content={faq.answer}
          isOpen={openId === faq.id}
          onToggle={id => {
            setOpenId(prev => (prev === id ? null : id));
          }}
        />
      ))}
      {hasNextPage && (
        <button className={styles.moreButton} onClick={onNextPage}>
          + 더보기
        </button>
      )}
    </ul>
  );
};
