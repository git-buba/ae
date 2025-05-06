import { getCategoryList } from '@/domains/faq/repository';
import { ParentCategoryType } from '@/domains/faq/types';
import { useQuery } from '@tanstack/react-query';

export const useFaqCategoryQuery = (parentCategoryType: ParentCategoryType) => {
  const { data, isFetching } = useQuery({
    queryKey: ['faqCategories', parentCategoryType],
    queryFn: () => getCategoryList(parentCategoryType),
  });

  return {
    categoryList: data || [],
    isFetching,
  };
};
