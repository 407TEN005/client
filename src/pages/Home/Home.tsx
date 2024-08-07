import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';
import { format } from 'date-fns';
import { Logout, Plus, UserCount } from '@images/index';
import NoTravelRoom from './NoTravelRoom';
import useGetTravelRoom from '@apis/useGetTravelRoom';
import ROUTES from '@constants/routes';
import MainHeader from '@components/MainHeader';
import { dday } from '@utils/dateUtil';
import TRAVEL_ROOM_THUMBNAIL1 from '@images/travel_room_thumbnail1.png';
import TRAVEL_ROOM_THUMBNAIL2 from '@images/travel_room_thumbnail2.png';
import TRAVEL_ROOM_THUMBNAIL3 from '@images/travel_room_thumbnail3.png';
import TRAVEL_ROOM_THUMBNAIL4 from '@images/travel_room_thumbnail4.png';
import TRAVEL_ROOM_THUMBNAIL5 from '@images/travel_room_thumbnail5.png';
import TRAVEL_ROOM_THUMBNAIL6 from '@images/travel_room_thumbnail6.png';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import userDataAtom from '@recoil/userData';
import { TRAVEL_DESCRIPTION, TRAVEL_ICON, TravelType } from '@constants/testResult';
import authUtil from '@utils/authUtil';
import { tentenInstance } from '@src/constants/axios';

const THUMBNAIL_IMAGES = [
  TRAVEL_ROOM_THUMBNAIL1,
  TRAVEL_ROOM_THUMBNAIL2,
  TRAVEL_ROOM_THUMBNAIL3,
  TRAVEL_ROOM_THUMBNAIL4,
  TRAVEL_ROOM_THUMBNAIL5,
  TRAVEL_ROOM_THUMBNAIL6,
];

const Home = () => {
  const userData = useRecoilValue(userDataAtom);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { travelRoomData } = useGetTravelRoom();

  const navigate = useNavigate();

  const handleCreateTravel = () => {
    navigate(ROUTES.createTravel);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleLogout = () => {
    authUtil.clearStorage();
    navigate(ROUTES.login, { replace: true });
  };

  useEffect(() => {
    if (userData?.status === 'NEW') {
      navigate(ROUTES.authTest);
    }
  }, [navigate, userData]);

  useEffect(() => {
    const roomId = authUtil.getRoomId();

    const joinNewTravelRoom = async () => {
      try {
        await tentenInstance.post(`/travel-rooms/${roomId}`);
      } catch (error) {
        console.error(error);
      }
    };

    if (roomId) {
      joinNewTravelRoom();
      authUtil.clearRoomId();
    }
  }, []);

  return (
    <>
      {isOpen && (
        <div className={styles.sideBar}>
          <div className={styles.sideBarHeader}>
            <div className={styles.sideBarIcon}>
              {TRAVEL_ICON[userData?.travelType as TravelType]}
            </div>
            <div className={styles.sideBarFamily}>
              <div className={styles.sideBarRole}>{userData?.familyRole}</div>
              <div className={styles.sideBarDescription}>
                {TRAVEL_DESCRIPTION[userData?.travelType as TravelType]}
              </div>
            </div>
          </div>
          <div className={styles.sideBarTest}>
            <p>테스트 결과 보기</p>
          </div>
          <div className={styles.logout} onClick={handleLogout}>
            <Logout />
            <p>로그아웃</p>
          </div>
        </div>
      )}
      {!travelRoomData || travelRoomData.length < 1 ? (
        <NoTravelRoom
          isOpen={isOpen}
          onClick={handleCreateTravel}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      ) : (
        <div className={`${styles.wrapper} ${isOpen ? styles.open : ''}`} onClick={handleClose}>
          <MainHeader handleOpen={handleOpen} />

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
                    <img src={THUMBNAIL_IMAGES[index % 6]} />
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

          <div className={styles.buttonWrapper}>
            <div className={styles.plusButton} onClick={handleCreateTravel}>
              <Plus />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
