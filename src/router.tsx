import { lazy } from 'react';
import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';

import Layout from '@components/Layout';
import ROUTES from '@constants/routes';
import Redirect from '@pages/Redirect';
import AuthLayout from './components/AuthLayout';

export const loginRouters: RouteObject[] = [
  {
    Component: Layout,
    children: [
      {
        path: ROUTES.authTest,
        Component: lazy(() => import('./pages/Test')),
      },
      {
        path: ROUTES.authTestSurvey,
        Component: lazy(() => import('./pages/TestSurvey')),
      },
      {
        path: ROUTES.authTestResult,
        Component: lazy(() => import('./pages/TestResult')),
      },
      {
        path: ROUTES.home,
        Component: lazy(() => import('./pages/Home')),
      },
      {
        path: ROUTES.createTravel,
        Component: lazy(() => import('./pages/CreateTravel')),
      },

      // {
      //   path: ROUTES.travel,
      //   Component: lazy(() => import('./pages/Travel')),
      // },
      // {
      //   path: ROUTES.commandment,
      //   Component: lazy(() => import('./pages/Commandment')),
      // },
      // {
      //   path: ROUTES.testResult,
      //   Component: lazy(() => import('./pages/TestResult')),
      // },
      // {
      //   // 디자인 완료 후 삭제 예정
      //   path: ROUTES.analysis,
      //   Component: lazy(() => import('./components/Analysis')),
      // },
    ],
  },
];

const nonLoginRouters = [
  { path: ROUTES.login, Component: lazy(() => import('./pages/Login')) },
  {
    path: ROUTES.test,
    Component: lazy(() => import('./pages/Test')),
  },
  {
    path: ROUTES.testSurvey,
    Component: lazy(() => import('./pages/TestSurvey')),
  },
  {
    path: ROUTES.testResult,
    Component: lazy(() => import('./pages/TestResult')),
  },
  {
    path: ROUTES.checkType,
    Component: lazy(() => import('./pages/CheckType')),
  },
  {
    path: ROUTES.loading,
    Component: lazy(() => import('./pages/Loading')),
  },
];

export const router = createBrowserRouter([
  {
    path: '',
    Component: Layout,
    children: [
      {
        index: true,
        Component: () => <Navigate to={ROUTES.home} />,
      },
      {
        Component: () => AuthLayout({ shouldProtect: false }),
        children: nonLoginRouters,
      },
      {
        Component: () => AuthLayout({ shouldProtect: true }),
        children: loginRouters,
      },
    ],
  },
  {
    path: ROUTES.redirect,
    Component: Redirect,
  },
  {
    path: '*',
    Component: lazy(() => import('./pages/Page404')),
  },
]);
