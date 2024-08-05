import styles from './Commandment.module.scss';
import { Share, DashLine, CommandmentIlust, Refresh, Home } from '@images/index';
import { TRAVEL_DESCRIPTION, TravelType } from '@constants/testResult';
import { useNavigate } from 'react-router-dom';
import ROUTES from '@src/constants/routes';
import Tooltip from '@src/components/Tooltip';

const kakao = (window as any).Kakao;

interface TextSendData {
  objectType: 'text';
  text: string;
  link: {
    webUrl: string;
  };
  buttonTitle?: string;
}

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

  const handleShareCommandment = () => {
    const sendData: TextSendData = {
      objectType: 'text',
      text: '서로를 배려하는 여행 10계명 \n \n' + commandments.join('\n'),
      link: {
        webUrl: 'https://tenten.potenday-sixgarlic.site/login',
      },
      buttonTitle: '텐텐 시작하기',
    };

    kakao.Share.sendDefault(sendData);
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
          <button className={styles.button} onClick={handleShareCommandment}>
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
