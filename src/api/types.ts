type FaqTab = 'CONSULT' | 'USAGE';

export type FetchCategoriesParams = {
  tab: FaqTab;
};

export type FetchFaqsParams = {
  limit?: number;
  offset: number;
  tab: FaqTab;
  faqCategoryID?: string;
  question?: string;
};

export type CategoryProtocol = {
  categoryID: string;
  name: string;
};

export type FaqProtocol = {
  id: number;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
};

export type PageInfo = {
  limit: number;
  nextOffset: number;
  offset: number;
  prevOffset: number;
  totalRecord: number;
};
