import Header from '@components/Header';
import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.outletWrapper}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
