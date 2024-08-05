import styles from './Commandment.module.scss';
import { DashLine, CommandmentIlust, Refresh, Home } from '@images/index';
import { TRAVEL_DESCRIPTION, TravelType } from '@constants/testResult';
import { useNavigate } from 'react-router-dom';
import ROUTES from '@constants/routes';
import Tooltip from '@components/Tooltip';

const Commandment = ({
  travelType,
  selectedTravelType,
  commandments,
  onClick,
}: {
  travelType: string;
  selectedTravelType?: string;
  commandments: string[];
  onClick: () => Promise<void>;
}) => {
  const navigate = useNavigate();

  const handleBackFront = () => {
    navigate(ROUTES.login);
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
        <div className={styles.buttons}>
          <button className={styles.button} onClick={handleBackFront}>
            <Home />
            <div className={styles.info}>처음으로</div>
          </button>
        </div>
        {commandments.length < 10 && (
          <div className={styles.buttons}>
            <Tooltip content="10계명이 모두 나타나지 않았다면? 클릭!" />
            <button className={styles.button} onClick={onClick}>
              <Refresh />
              <div className={styles.info}>재생성하기</div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Commandment;
