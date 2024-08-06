import styles from './TravelDetail.module.scss';
import Button from '@components/Button';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Analysis from '@components/Analysis';
import { EmptyRoom, IconCallendar, IconCrown, LeftArrowWhite, PlusWhite } from '@images/index';
import useGetTravelRoomDetail, { FamilyRole } from '@apis/useGetTravelRoomDetail';
import { format } from 'date-fns';
import { TRAVEL_ICON, TravelType } from '@constants/testResult';
import ROUTES from '@constants/routes';
import { dday } from '@utils/dateUtil';

const COMMANDMENTS_INFO_MESSAGE = [
  '함께하는 가족 구성원이 모두 모였다면 \n이번 여행을 위한 10계명을 생성해 보세요!',
];

const FAMILY_DESCRIPTION: Record<FamilyRole, string> = {
  DAD: '아빠',
  MOM: '엄마',
  SON: '아들',
  DAUGHTER: '딸',
};

const TravelDetail = () => {
  const { travelId } = useParams();
  const navigate = useNavigate();

  const { travelRoomData, fetchTravelRoomDetail } = useGetTravelRoomDetail();

  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);

  useEffect(() => {
    fetchTravelRoomDetail(travelId);
  }, []);

  if (!travelRoomData) {
    return null;
  }

  const { startDate, endDate, roomName, users, commandments, headcount, maxHeadcount } =
    travelRoomData;

  const handleOpenAnalysis = () => {
    setIsAnalysisOpen(true);
  };

  const handleGoBack = () => {
    navigate(ROUTES.travel);
  };

  if (isAnalysisOpen) {
    return <Analysis />;
  }

  const renderInfoMessage = (message: string) => {
    return message.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index === 0 && <br />}
      </span>
    ));
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
          <div className={styles.familyWrapper}>
            <PlusWhite />
            <div className={styles.familyMemberName}>초대</div>
          </div>
        )}
      </div>
      <div className={styles.commandmentListContainer}>
        <div className={styles.commandmentListTitle}>서로를 배려하는 여행 10계명</div>

        <div className={styles.commandmentItem}>
          <EmptyRoom />
          <div className={styles.info}>
            {hasCommandment ? '' : renderInfoMessage(COMMANDMENTS_INFO_MESSAGE[0])}
          </div>
          <div className={styles.buttonWrapper}>
            {hasCommandment ? (
              ''
            ) : (
              <Button
                variant="outlined"
                className={styles.button}
                isActive
                size="m"
                onClick={handleOpenAnalysis}
              >
                여행 10계명 생성하기
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelDetail;
