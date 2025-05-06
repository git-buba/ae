import { FaqTabs, FaqSearchForm, AppDownload, ServiceInquiry, FaqCategoryFilter, FaqList } from '@/features/faq/ui';
import { ParentCategoryType } from '@/domains/faq/types';
import { FC, useState } from 'react';
import styles from './FaqPage.module.css';
import { UseProcess } from '@/features/common/ui/UseProcess';
import { useFaqCategoryQuery } from '@/features/faq/hooks/useFaqCategoryQuery';
import { useFaqQuery } from '@/features/faq/hooks/useFaqQuery';

export const FaqPage: FC = () => {
  const [parentCategory, setParentCategory] = useState<ParentCategoryType>('CONSULT');
  const [searchText, setSearchText] = useState('');
  const { categoryList } = useFaqCategoryQuery(parentCategory);
  const [subCategoryId, setSubCategoryID] = useState<null | string>(null);
  const { faqList, hasNextPage, getNextPage, totalCount } = useFaqQuery({
    question: searchText,
    parentCategoryType: parentCategory,
    categoryId: subCategoryId,
  });

  return (
    <div className={styles.content}>
      <h1 className={styles.header}>
        자주 묻는 질문 <em>궁금하신 내용을 빠르게 찾아보세요.</em>
      </h1>

      <FaqTabs
        current={parentCategory}
        onChange={category => {
          setParentCategory(category);
          setSubCategoryID(null);
        }}
      />
      <FaqSearchForm
        onSearch={keyword => {
          setSearchText(keyword);
        }}
        searchCount={searchText ? totalCount : null}
      />

      <FaqCategoryFilter
        categoryList={categoryList}
        selectedcategoryId={subCategoryId}
        onSelectCategory={setSubCategoryID}
      />

      <FaqList
        hasNextPage={hasNextPage}
        parentCategory={parentCategory}
        faqList={faqList}
        subCategoryId={subCategoryId}
        onNextPage={getNextPage}
      />
      <ServiceInquiry />
      <UseProcess />
      <AppDownload />
    </div>
  );
};
