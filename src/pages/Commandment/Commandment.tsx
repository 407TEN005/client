import styles from './Commandment.module.scss';
import { Share, Recreate, CommandmentIcon, DashLine } from '@images/index';

const COMMANDMENT_ITEM = '즉흥적인 아빠는 계획이 있는 아들과 균형!';

const Commandment = () => {
  const items = Array(10).fill(COMMANDMENT_ITEM);

  const handleRecreateCommandment = () => {
    alert('재생성 기능 구현 예정');
  };

  const handleShareCommandment = () => {
    alert('공유 기능 구현 예정');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>온가족이 함께 하는 방콕 휴가</div>
      <div className={styles.subTitle}>2024.07.24 (수) 17:30 생성</div>
      <div className={styles.commandmentWrapper}>
        <div className={styles.commandmentTitle}>서로를 배려하는 여행 10계명</div>
        <DashLine className={styles.line} />
        <div className={styles.itemWrapper}>
          {items.map((item, index) => (
            <div key={index} className={styles.commandmentItem}>
              <CommandmentIcon className={styles.icon} />
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={handleShareCommandment}>
          <Share className={styles.icon} />
          <div className={styles.info}>공유하기</div>
        </button>
        <button className={styles.button} onClick={handleRecreateCommandment}>
          <Recreate className={styles.icon} />
          <div className={styles.info}>재생성하기</div>
        </button>
      </div>
    </div>
  );
};

export default Commandment;
