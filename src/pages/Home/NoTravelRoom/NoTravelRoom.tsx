import styles from './NoTravelRoom.module.scss';
import { HomeLogo } from '@images/index';
import Button from '@components/Button';

const NoTravelRoom = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <HomeLogo />
      </div>
      <p className={styles.title}>가족 여행을 계획중이신가요?</p>
      <p className={styles.subTitle}>서로 다른 여행 성향을 파악하고</p>
      <p className={styles.subTitle}>우리 가족만의 여행 10계명을 생성해 보세요!</p>
      <Button variant="outlined" size="m" onClick={onClick} isActive>
        여행방 만들기
      </Button>
    </div>
  );
};

export default NoTravelRoom;
