import { fetchCategories, fetchFaqs } from '@/api/faq';
import { Faq, FaqCategory, GetFaqListPayload, ParentCategoryType } from './types';
import { CategoryProtocol, FaqProtocol } from '@/api/types';

const convertCategoryProtocolToFaqCategory = (protocol: CategoryProtocol): FaqCategory => ({
  categoryId: protocol.categoryID,
  categoryName: protocol.name,
});

const convertFaqProtocolToFaq = (protocol: FaqProtocol): Faq => ({
  id: protocol.id,
  categoryName: protocol.categoryName,
  subCategoryName: protocol.subCategoryName,
  question: protocol.question,
  answer: protocol.answer,
});

export const getCategoryList = async (type: ParentCategoryType) => {
  const categoryList = await fetchCategories({ tab: type });

  return categoryList.map(convertCategoryProtocolToFaqCategory);
};

export const getFaqList = async (payload: GetFaqListPayload) => {
  const { items, pageInfo } = await fetchFaqs({
    offset: payload.page,
    limit: payload.limit || 10,
    question: payload.question,
    faqCategoryID: payload.categoryId || undefined,
    tab: payload.parentCategoryType,
  });

  return {
    faqList: items.map(convertFaqProtocolToFaq),
    totalCount: pageInfo.totalRecord,
    currentPage: pageInfo.offset,
    nextPage: pageInfo.nextOffset,
  };
};
