import Commandment from '../Commandment';
import styles from './Travel.module.scss';
import Button from '@components/Button';

const Travel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <div className={styles.dday}>D-17</div>
        <div className={styles.title}>온가족이 함께 하는 방콕 휴가</div>
        <div className={styles.travelDate}>2024.08.12 - 2024.08.20</div>
      </div>
      <div className={styles.familyMemberWrapper}>
        <div className={styles.familyMemberTitle}>함께하는 우리 가족</div>
        <div className={styles.familyMemberContainer}>
          <div className={styles.familyMemberImg}></div>
          <div className={styles.familyMemberName}>아빠</div>
        </div>
      </div>
      <div className={styles.commandmentListContainer}>
        <div className={styles.commandmentListTitle}>이번 여행의 10계명</div>
        <div>
          <div className={styles.commandmentItem}>
            <div className={styles.image}></div>
            <div className={styles.info}>
              서로 다른 여행 성향을 파악하고 여행 10계명을 생성해 보세요!
            </div>
            <Button variant="outlined" size="m">
              여행 10계명 생성하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
