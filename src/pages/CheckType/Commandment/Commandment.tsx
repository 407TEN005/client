import { useRecoilValue } from 'recoil';
import styles from './Commandment.module.scss';
import { Share, DashLine, CommandmentIlust } from '@images/index';
import commandmentAtom from '@recoil/commandment';
import { TRAVEL_DESCRIPTION, TravelType } from '@constants/testResult';
import { useNavigate } from 'react-router-dom';
import ROUTES from '@src/constants/routes';

const Commandment = ({
  travelType,
  selectedTravelType,
}: {
  travelType: string;
  selectedTravelType?: string;
}) => {
  const navigate = useNavigate();

  const commandments = useRecoilValue(commandmentAtom);

  const handleBackFront = () => {
    navigate(ROUTES.login);
  };

  const handleShareCommandment = () => {
    alert('공유 기능 구현 예정');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <button className={styles.goBackButton} onClick={handleBackFront}>
          처음으로
        </button>
      </div>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{TRAVEL_DESCRIPTION[travelType as TravelType]}와</div>
        <div className={styles.title}>
          {TRAVEL_DESCRIPTION[selectedTravelType as TravelType]}가 함께 여행을 간다면?
        </div>
      </div>

      <div className={styles.commandmentWrapper}>
        <CommandmentIlust className={styles.backgroundIllustration} />
        <div className={styles.contentOverlay}>
          <div className={styles.commandmentTitle}>서로를 배려하는 여행 10계명</div>
          <DashLine />
          <div className={styles.itemWrapper}>
            {commandments.map((commandment, index) => (
              <p key={index} className={styles.commandmentItem}>
                {commandment}
              </p>
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
