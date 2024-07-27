import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.outletWrapper}>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
