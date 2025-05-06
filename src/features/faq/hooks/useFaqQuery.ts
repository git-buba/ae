import { getFaqList } from '@/domains/faq/repository';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useFaqQuery = (props: Omit<Parameters<typeof getFaqList>[0], 'page'>) => {
  const { data, hasNextPage, isFetching, fetchNextPage } = useInfiniteQuery({
    queryKey: ['faq', props],
    queryFn: ({ pageParam = 0 }) => getFaqList({ ...props, page: pageParam }),
    initialPageParam: 0,
    getNextPageParam: ({ nextPage, currentPage }) => {
      return nextPage === currentPage ? undefined : nextPage;
    },
  });

  return {
    faqList: data?.pages.flatMap(page => page.faqList) || [],
    totalCount: data?.pages[0].totalCount || 0,
    hasNextPage,
    getNextPage: fetchNextPage,
    isFetching,
  };
};
