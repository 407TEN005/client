import styles from './TravelDetail.module.scss';
import Button from '@components/Button';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EmptyRoom, IconCallendar, IconCrown, LeftArrowWhite, PlusWhite } from '@images/index';
import useGetTravelRoomDetail, { FamilyRole } from '@apis/useGetTravelRoomDetail';
import { format } from 'date-fns';
import { TRAVEL_ICON, TravelType } from '@constants/testResult';
import ROUTES from '@constants/routes';
import { dday } from '@utils/dateUtil';
import useInviteUser from '@hooks/useInviteUser';
import useGetUserData from '@apis/useGetUserData';
import useCreateCommandment from '@apis/useCreateCommandment';
import Analysis from '@components/Analysis';

const FAMILY_DESCRIPTION: Record<FamilyRole, string> = {
  DAD: '아빠',
  MOM: '엄마',
  SON: '아들',
  DAUGHTER: '딸',
};

const TravelDetail = () => {
  const { travelId } = useParams();
  const navigate = useNavigate();

  const { userData } = useGetUserData();

  const { travelRoomData, fetchTravelRoomDetail } = useGetTravelRoomDetail();

  const { handleInvite } = useInviteUser({
    travelId,
    roomName: travelRoomData?.roomName,
    userName: userData?.nickname,
  });

  const { isLoading, createCommandment } = useCreateCommandment();

  useEffect(() => {
    fetchTravelRoomDetail(travelId);
  }, [isLoading]);

  if (!travelRoomData) {
    return null;
  }

  if (isLoading) {
    return <Analysis />;
  }

  const { startDate, endDate, roomName, users, commandments, headcount, maxHeadcount } =
    travelRoomData;

  const isAdmin = users.filter((data) => data.id === userData?.id)[0]?.admin;

  const handleOpenAnalysis = async () => {
    await createCommandment(travelId);
  };

  const handleGoCommandment = () => {
    navigate(`/travel/${travelId}/commandment`);
  };

  const handleGoBack = () => {
    navigate(ROUTES.travel);
  };

  const hasCommandment = commandments && commandments.length > 1;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.back} onClick={handleGoBack}>
          <LeftArrowWhite />
        </div>
      </div>
      <div className={styles.titleContainer}>
        <div className={styles.dday}>{dday(startDate)}</div>
        <div className={styles.title}>{roomName}</div>
        <div className={styles.travelDate}>
          <IconCallendar />
          {format(startDate, 'yyyy.MM.dd')} - {format(endDate, 'yyyy.MM.dd')}
        </div>
      </div>

      <div className={styles.familyMemberTitle}>함께하는 우리 가족</div>
      <div className={styles.familyMemberContainer}>
        {users.map(({ admin, id, travelType, familyRole }) => (
          <div key={id} className={styles.familyWrapper}>
            <div
              key={id}
              className={`${styles.familyMemberList} 
              ${admin ? styles.familyAdminImg : styles.familyMemberImg}`}
            >
              {admin && <IconCrown className={styles.icon} />}
              <div className={styles.travelIcon}>{TRAVEL_ICON[travelType as TravelType]}</div>
            </div>
            <div className={styles.familyMemberName}>{FAMILY_DESCRIPTION[familyRole]}</div>
          </div>
        ))}
        {maxHeadcount > headcount && (
          <div className={`${styles.familyWrapper} ${styles.invite}`} onClick={handleInvite}>
            <PlusWhite />
            <div className={styles.familyMemberName}>초대</div>
          </div>
        )}
      </div>
      <div className={styles.commandmentListContainer}>
        <div className={styles.commandmentListTitle}>서로를 배려하는 여행 10계명</div>

        {hasCommandment ? (
          <div className={styles.commandmentList}>
            {commandments.map((commandment, index) => {
              return <p key={index}>{commandment}</p>;
            })}
            <div className={styles.buttonTop}></div>
            <div className={styles.regenerateButton}>
              <Button
                variant="outlined"
                className={styles.inviteButton}
                isActive
                size="m"
                onClick={handleGoCommandment}
              >
                여행 10계명 전체보기
              </Button>
            </div>
          </div>
        ) : (
          <div className={styles.commandmentItem}>
            <EmptyRoom />
            <div className={styles.info}>
              {users.length < 2 ? (
                <>
                  <p>여행 10계명을 함께 만들고 싶은</p>
                  <p>가족 구성원을 초대해 보세요!</p>
                </>
              ) : isAdmin ? (
                <>
                  <p>함께하는 가족 구성원이 모두 모였다면</p>
                  <p>이번 여행을 위한 10계명을 생성해 보세요!</p>
                </>
              ) : (
                <>
                  <p>이번 가족 여행을 위한 10계명 공개 직전!</p>
                  <p>모두 입장할 때 까지 잠시만 기다려주세요...</p>
                </>
              )}
            </div>
            <div className={styles.buttonWrapper}>
              {users.length < 2 ? (
                <Button
                  variant="outlined"
                  className={styles.button}
                  isActive
                  size="m"
                  onClick={handleOpenAnalysis}
                >
                  초대하기
                </Button>
              ) : isAdmin ? (
                <Button
                  variant="outlined"
                  className={styles.button}
                  isActive
                  size="m"
                  onClick={handleOpenAnalysis}
                >
                  여행 10계명 생성하기
                </Button>
              ) : (
                <p>방장만 생성 가능</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TravelDetail;
