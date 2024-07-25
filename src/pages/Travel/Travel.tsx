import styles from './Travel.module.scss';

const Travel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <div className={styles.dday}>D-17</div>
        <div className={styles.title}>온가족이 함께 하는 방콕 휴가</div>
        <div className={styles.travelDate}>2024.08.12 - 2024.08.20</div>
      </div>
      <div>
        <div>함께하는 우리 가족</div>
        <div></div>
      </div>
      <div className={styles.commandmentList}>
        <div>이번 여행의 10계명</div>
        <div></div>
      </div>
    </div>
  );
};

export default Travel;
