import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';
import { format } from 'date-fns';
import {
  Plus,
  CardThumbnail1,
  CardThumbnail2,
  CardThumbnail3,
  CardThumbnail4,
  CardThumbnail5,
  CardThumbnail6,
  UserCount,
} from '@images/index';
import NoTravelRoom from './NoTravelRoom';
import useGetTravelRoom from '@apis/useGetTravelRoom';
import ROUTES from '@constants/routes';
import MainHeader from '@components/MainHeader';
import { dday } from '@utils/dateUtil';

const CARD_THUMBNAIL_IMAGE = [
  <CardThumbnail1 />,
  <CardThumbnail2 />,
  <CardThumbnail3 />,
  <CardThumbnail4 />,
  <CardThumbnail5 />,
  <CardThumbnail6 />,
];

const Home = () => {
  const { travelRoomData } = useGetTravelRoom();

  const navigate = useNavigate();

  const handleCreateTravel = () => {
    navigate(ROUTES.createTravel);
  };

  // ? 여행 방이 없을 때
  if (!travelRoomData || travelRoomData.length < 1) {
    return <NoTravelRoom onClick={handleCreateTravel} />;
  }

  // ? 여행 방이 있을 때
  return (
    <div className={styles.wrapper}>
      <MainHeader />
      <div className={styles.plusButton} onClick={handleCreateTravel}>
        <Plus />
      </div>
      <div className={styles.headline}>
        <p>우리 가족 여행 방</p>
      </div>
      {travelRoomData &&
        travelRoomData.map((data, index) => {
          const {
            id,
            roomName,
            startDate,
            endDate,
            existCommandments,
            admin: isAdmin,
            headcount,
            maxHeadcount,
          } = data;

          const handleNavigateTravelRoom = () => {
            navigate(`/travel/${id}`);
          };

          return (
            <div key={id} className={styles.card} onClick={handleNavigateTravelRoom}>
              <div className={styles.image}>
                {CARD_THUMBNAIL_IMAGE[index % 6]}
                {isAdmin && <div className={styles.admin}>방장</div>}
              </div>
              <div className={styles.detail}>
                <div className={styles.travelDetail}>
                  <div className={styles.header}>
                    <div className={styles.dday}>{dday(startDate)}</div>
                    <div
                      className={`${styles.existCommandments} ${existCommandments ? styles.exist : ''}`}
                    >
                      {existCommandments ? '10계명 생성 완료 ' : '10계명 생성 전'}
                    </div>
                  </div>
                  <div className={styles.roomName}>{roomName}</div>
                  <div className={styles.date}>
                    {format(startDate, 'yyyy.MM.dd')} ~ {format(endDate, 'yyyy.MM.dd')}
                  </div>
                  <div className={styles.headCount}>
                    <UserCount />
                    <p>
                      {headcount}/{maxHeadcount}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
