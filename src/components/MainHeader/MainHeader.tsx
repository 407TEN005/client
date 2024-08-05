import { HeaderLogo } from '@src/assets/images';
import styles from './MainHeader.module.scss';

const MainHeader = () => {
  return (
    <div className={styles.wrapper}>
      <HeaderLogo />
    </div>
  );
};

export default MainHeader;
