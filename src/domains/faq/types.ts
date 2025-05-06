export type ParentCategoryType = 'CONSULT' | 'USAGE';

export type FaqCategory = {
  categoryId: string;
  categoryName: string;
};

export type Faq = {
  id: number;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
};

export type GetFaqListPayload = {
  page: number;
  limit?: number;
  question?: string;
  categoryId: string | null;
  parentCategoryType: ParentCategoryType;
};
