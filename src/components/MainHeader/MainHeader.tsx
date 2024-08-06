import { HeaderLogo } from '@images/index';
import styles from './MainHeader.module.scss';
import { useEffect } from 'react';
import { tentenInstance } from '@constants/axios';
import userDataAtom from '@recoil/userData';
import { useRecoilState } from 'recoil';
import { TRAVEL_MINI_ICON, TravelType } from '@src/constants/testResult';

const MainHeader = () => {
  const [userData, setUserData] = useRecoilState(userDataAtom);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await tentenInstance.get('/users/current');

        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <HeaderLogo />
      <div className={styles.sideLogo}>{TRAVEL_MINI_ICON[userData?.travelType as TravelType]}</div>
    </div>
  );
};

export default MainHeader;
