import { HeaderLogo } from '@images/index';
import styles from './MainHeader.module.scss';
import { TRAVEL_MINI_ICON, TravelType } from '@constants/testResult';
import useGetUserData from '@src/apis/useGetUserData';

const MainHeader = ({ handleOpen }: { handleOpen: () => void }) => {
  const { userData } = useGetUserData();

  return (
    <div className={styles.wrapper}>
      <HeaderLogo />
      <div className={styles.sideLogo} onClick={handleOpen}>
        {TRAVEL_MINI_ICON[userData?.travelType as TravelType]}
      </div>
    </div>
  );
};

export default MainHeader;
