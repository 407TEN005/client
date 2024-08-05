import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';
import { differenceInDays, format } from 'date-fns';
import { CheckButton, Plus, TravelCardLogo } from '@images/index';
import NoTravelRoom from './NoTravelRoom';
import useGetTravelRoom from '@apis/useGetTravelRoom';
import ROUTES from '@constants/routes';
import MainHeader from '@components/MainHeader';

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
    <>
      <MainHeader />
      <div className={styles.wrapper}>
        <div className={styles.plusButton} onClick={handleCreateTravel}>
          <Plus />
        </div>
        <div className={styles.headline}>
          <p>우리 가족 여행 방</p>
        </div>
        {travelRoomData &&
          travelRoomData.map((data) => {
            const { id, roomName, startDate, endDate, existCommandments } = data;

            const today = format(new Date(), 'yyyy-MM-dd');
            const parsedStartedDate = differenceInDays(startDate, today);

            const handleNavigateTravelRoom = () => {
              navigate(`/travel/${id}`);
            };

            return (
              <div key={id} className={styles.card} onClick={handleNavigateTravelRoom}>
                <div className={styles.image}>
                  <TravelCardLogo />
                </div>
                <div className={styles.detail}>
                  <div className={styles.travelDetail}>
                    <div className={styles.dday}>D-{parsedStartedDate}</div>
                    <div className={styles.roomName}>{roomName}</div>
                    <div className={styles.date}>
                      {format(startDate, 'yyyy.MM.dd')} ~ {format(endDate, 'yyyy.MM.dd')}
                    </div>
                  </div>
                  <div className={styles.existCommandments}>
                    <div className={`${styles.button} ${existCommandments ? styles.selected : ''}`}>
                      {existCommandments ? (
                        <p>
                          10계명 생성 완료 <CheckButton />
                        </p>
                      ) : (
                        '10계명 생성 전'
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Home;
