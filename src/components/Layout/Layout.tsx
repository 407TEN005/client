import styles from './Layout.module.scss';
import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import ROUTES from '@constants/routes';

const Layout = () => {
  const { pathname } = useLocation();

  const isRelative = pathname !== ROUTES.createTravel;

  return (
    <div className={`${styles.wrapper} ${isRelative ? styles.relative : ''}`}>
      <div className={styles.outletWrapper}>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
