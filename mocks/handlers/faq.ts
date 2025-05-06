import { http, HttpResponse } from 'msw';
import { consultFaqStubList, usageFaqStubList } from '../stub/faqStub';
import { consultCategoryStubList, usageCategoryStubList } from '../stub/categoryStub';

function fetchFaqs() {
  return http.get('/api/faq', ({ request }) => {
    const url = new URL(request.url);

    const tab = url.searchParams.get('tab');
    const limit = parseInt(url.searchParams.get('limit') || '10', 10);
    const offset = parseInt(url.searchParams.get('offset') || '0', 10);
    const categoryID = url.searchParams.get('faqCategoryID');
    const question = url.searchParams.get('question');

    const isUsageTab = tab === 'USAGE';

    const stubFaqList = isUsageTab ? usageFaqStubList : consultFaqStubList;
    const stubCategoryList = isUsageTab ? usageCategoryStubList : consultCategoryStubList;

    if (!tab) {
      return HttpResponse.json({ data: [], total: 0 });
    }

    let faqList = [];
    const subCategoryName = stubCategoryList.find(category => category.categoryID === categoryID);

    if (subCategoryName) {
      faqList = stubFaqList.filter(faq =>
        isUsageTab ? faq.categoryName === subCategoryName.name : faq.subCategoryName === subCategoryName.name
      );
    } else {
      faqList = stubFaqList;
    }

    if (question) {
      faqList = faqList.filter(faq => faq.question.includes(question) || faq.answer.includes(question));
    }

    const paginatedFaqList = faqList.slice(offset * limit, offset * limit + limit);
    const lastOffset = Math.floor(faqList.length / limit);
    const prevOffset = offset === 0 ? 0 : offset - 1;
    const nextOffset = offset === lastOffset ? offset : offset + 1;

    return HttpResponse.json({
      items: paginatedFaqList,
      pageInfo: { limit, offset, totalRecord: faqList.length, prevOffset, nextOffset },
    });
  });
}

export default [fetchFaqs()];
