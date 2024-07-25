import { createBrowserRouter } from 'react-router-dom';
import Layout from '@components/Layout';
import Home from '@pages/Home';
import { lazy } from 'react';

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
        path: 'travel/:travelId',
        Component: lazy(() => import('./pages/Travel')),
      },
      {
        path: 'commandment',
        Component: lazy(() => import('./pages/Commandment')),
      },
    ],
  },
]);
