import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '@pages/Home';
import Layout from '@components/Layout';
import SimpleLayout from '@components/SimpleLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: () => <Layout />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'create',
        Component: lazy(() => import('./pages/CreateTravel')),
      },
      {
        path: 'test',
        Component: lazy(() => import('./pages/Test')),
      },
      {
        path: 'test/survey',
        Component: lazy(() => import('./pages/TestSurvey')),
      },
      {
        path: 'test/survey/:surveyId',
        Component: lazy(() => import('./pages/TestSurveyDetail')),
      },
      {
        path: 'travel/:travelId',
        Component: lazy(() => import('./pages/Travel')),
      },
      {
        path: 'commandment',
        Component: lazy(() => import('./pages/Commandment')),
      },
      {
        path: 'testresult',
        Component: lazy(() => import('./pages/TestResult')),
      },
      {
        // 디자인 완료 후 삭제 예정
        path: 'analysis',
        Component: lazy(() => import('./components/Analysis')),
      },
    ],
  },
  {
    path: '/',
    Component: () => <SimpleLayout />,
    children: [
      {
        path: 'login',
        Component: lazy(() => import('./pages/Login')),
      },
    ],
  },
]);
