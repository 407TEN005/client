import { useRecoilValue } from 'recoil';
import styles from './Commandment.module.scss';
import {
  Share,
  CommandmentIcon,
  DashLine,
  CommandmentIlust,
  CommandmentCharacter,
} from '@images/index';
import commandmentAtom from '@recoil/commandment';
import { TRAVEL_DESCRIPTION, TravelType } from '@constants/testResult';

const Commandment = ({
  travelType,
  selectedTravelType,
}: {
  travelType: string;
  selectedTravelType?: string;
}) => {
  const commandments = useRecoilValue(commandmentAtom);

  const handleShareCommandment = () => {
    alert('공유 기능 구현 예정');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}></div>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{TRAVEL_DESCRIPTION[travelType as TravelType]}와</div>
        <div className={styles.title}>
          {TRAVEL_DESCRIPTION[selectedTravelType as TravelType]}가 함께 여행을 간다면?
        </div>
      </div>

      <CommandmentCharacter className={styles.commandmentCharacter} />
      <div className={styles.commandmentWrapper}>
        <CommandmentIlust className={styles.backgroundIllustration} />
        <div className={styles.contentOverlay}>
          <div className={styles.commandmentTitle}>서로를 배려하는 여행 10계명</div>
          <DashLine className={styles.line} />
          <div className={styles.itemWrapper}>
            {commandments.map((commandment, index) => (
              <div key={index} className={styles.commandmentItem}>
                <CommandmentIcon className={styles.icon} />
                {commandment}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={handleShareCommandment}>
          <Share className={styles.icon} />
          <div className={styles.info}>공유하기</div>
        </button>
      </div>
    </div>
  );
};

export default Commandment;
