import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import Layout from '@components/Layout';
import AuthLayout from '@components/AuthLayout';
import ROUTES from '@constants/routes';
import Login from './pages/Login';

export const layoutRouters = [
  {
    Component: Layout,
    children: [
      {
        path: ROUTES.home,
        Component: lazy(() => import('./pages/Home')),
      },
      {
        path: ROUTES.createTravel,
        Component: lazy(() => import('./pages/CreateTravel')),
      },
      {
        path: ROUTES.test,
        Component: lazy(() => import('./pages/Test')),
      },
      {
        path: ROUTES.testSurvey,
        Component: lazy(() => import('./pages/TestSurvey')),
      },
      {
        path: ROUTES.testSurveyDetail,
        Component: lazy(() => import('./pages/TestSurveyDetail')),
      },
      {
        path: ROUTES.travel,
        Component: lazy(() => import('./pages/Travel')),
      },
      {
        path: ROUTES.commandment,
        Component: lazy(() => import('./pages/Commandment')),
      },
      {
        path: ROUTES.testResult,
        Component: lazy(() => import('./pages/TestResult')),
      },
      {
        // 디자인 완료 후 삭제 예정
        path: ROUTES.analysis,
        Component: lazy(() => import('./components/Analysis')),
      },
    ],
  },
];

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        Component: () => <Navigate to={ROUTES.home} />,
      },
      {
        Component: () => AuthLayout({ shouldProtect: false }),
        children: [{ path: ROUTES.login, Component: Login }],
      },
      {
        Component: () => AuthLayout({ shouldProtect: true }),
        children: layoutRouters,
      },
    ],
  },
]);
