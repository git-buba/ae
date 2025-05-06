import { apiRequester } from './requester';
import { CategoryProtocol, FaqProtocol, FetchCategoriesParams, FetchFaqsParams, PageInfo } from './types';

export const fetchCategories = (params: FetchCategoriesParams): Promise<CategoryProtocol[]> => {
  return apiRequester.get('/api/faq/category', { params });
};

export const fetchFaqs = (
  params: FetchFaqsParams
): Promise<{
  pageInfo: PageInfo;
  items: FaqProtocol[];
}> => {
  return apiRequester.get('/api/faq', { params });
};
