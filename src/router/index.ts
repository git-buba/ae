import { FaqPage } from '@/pages/FaqPage';
import { MainPage } from '@/pages/MainPage';
import { RoutePath } from './constants';
import { createBrowserRouter } from 'react-router';
import { CounselPage } from '@/pages/CounselPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainPage,
    children: [
      { index: true, path: RoutePath.FAQ, Component: FaqPage },
      { path: RoutePath.COUNSEL, Component: CounselPage },
    ],
  },
]);
