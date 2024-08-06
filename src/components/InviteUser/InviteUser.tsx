import { Exit, IconCrown, KakaoLogo, UserCount } from '@images/index';
import styles from './InviteUser.module.scss';

import CARD_THUMBNAIL1 from '@images/card_thumbnail1.png';
import CARD_THUMBNAIL2 from '@images/card_thumbnail2.png';
import CARD_THUMBNAIL3 from '@images/card_thumbnail3.png';
import CARD_THUMBNAIL4 from '@images/card_thumbnail4.png';
import CARD_THUMBNAIL5 from '@images/card_thumbnail5.png';
import CARD_THUMBNAIL6 from '@images/card_thumbnail6.png';
import { format } from 'date-fns';
import { dday } from '@utils/dateUtil';
import { useRecoilValue } from 'recoil';
import { userTravelTypeSelector } from '@recoil/userData/selector';
import { TRAVEL_MINI_ICON, TravelType } from '@src/constants/testResult';

const CARD_THUMBNAIL_LIST = [
  CARD_THUMBNAIL1,
  CARD_THUMBNAIL2,
  CARD_THUMBNAIL3,
  CARD_THUMBNAIL4,
  CARD_THUMBNAIL5,
  CARD_THUMBNAIL6,
];

interface InviteUserProps {
  roomName?: string;
  startDate?: string;
  endDate?: string;
  maxHeadcount?: string;
  handleGoTravelRoom: () => void;
}

const InviteUser = ({
  roomName = '',
  startDate = '',
  endDate = '',
  maxHeadcount = '',
  handleGoTravelRoom,
}: InviteUserProps) => {
  const userTravelType = useRecoilValue(userTravelTypeSelector);

  const getRandomInt = () => {
    return Math.floor(Math.random() * 6);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header} onClick={handleGoTravelRoom}>
        <Exit />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>새로운 여행방을 만들었어요!</p>
        <p className={styles.subTitle}>함께 여행하는 가족들을 초대해</p>
        <p className={styles.subTitle}>이번 여행의 10계명을 생성해보세요!</p>

        <div className={styles.card}>
          <div className={styles.image}>
            <div className={styles.dday}>{dday(startDate)}</div>
            <img src={CARD_THUMBNAIL_LIST[getRandomInt()]} />
          </div>
          <div className={styles.badge}>{TRAVEL_MINI_ICON[userTravelType as TravelType]}</div>
          <IconCrown className={styles.icon} />
          <div className={styles.roomName}>{roomName}</div>
          <div className={styles.date}>
            {format(startDate, 'yyyy.MM.dd')} ~ {format(endDate, 'yyyy.MM.dd')}
          </div>
          <div className={styles.headCount}>
            <UserCount />
            <p>1/{maxHeadcount}</p>
          </div>
        </div>
        <div className={styles.invite} onClick={handleGoTravelRoom}>
          <KakaoLogo />
          <p>카카오톡 초대</p>
        </div>
      </div>
    </div>
  );
};

export default InviteUser;
