import { http, HttpResponse } from 'msw';
import { consultCategoryStubList, usageCategoryStubList } from '../stub/categoryStub';

function fetchFaqCategorys() {
  return http.get('/api/faq/category', ({ request }) => {
    const url = new URL(request.url);

    const tab = url.searchParams.get('tab');
    const categoryList = [];
    if (tab === 'CONSULT') {
      categoryList.push(...consultCategoryStubList);
    }

    if (tab === 'USAGE') {
      categoryList.push(...usageCategoryStubList);
    }

    return HttpResponse.json(categoryList);
  });
}

export default [fetchFaqCategorys()];
