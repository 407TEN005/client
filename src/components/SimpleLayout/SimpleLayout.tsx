import styles from './SimpleLayout.module.scss';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SimpleLayout = () => {
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

export default SimpleLayout;
