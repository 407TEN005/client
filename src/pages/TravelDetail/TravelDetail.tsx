import styles from './TravelDetail.module.scss';
import Button from '@components/Button';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Analysis from '@components/Analysis';
import { EmptyRoom, IconCallendar, IconCrown } from '@images/index';
import useGetTravelRoomDetail from '@src/apis/useGetTravelRoomDetail';
import { format } from 'date-fns';
import { TRAVEL_ICON, TravelType } from '@src/constants/testResult';

const COMMANDMENTS_INFO_MESSAGE = [
  '이번 가족 여행을 위한 10계명 공개 직전! 모두 입장할 때까지 잠시만 기다려주세요...',
  '함께하는 가족 구성원이 모두 모였다면 \n이번 여행을 위한 10계명을 생성해 보세요!',
];

const TravelDetail = () => {
  const { travelId } = useParams();
  const navigate = useNavigate();

  const { travelRoomData, fetchTravelRoomDetail } = useGetTravelRoomDetail();

  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);

  useEffect(() => {
    fetchTravelRoomDetail(travelId);
  }, []);

  useEffect(() => {
    let timer: number;
    if (isAnalysisOpen) {
      timer = window.setTimeout(() => {
        setIsAnalysisOpen(false);
        navigate('/commandment');
      }, 5000);
    }
    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [isAnalysisOpen, navigate]);

  if (!travelRoomData) {
    return null;
  }

  const { startDate, endDate, roomName, users, commandments } = travelRoomData;

  const isLeader = true;

  const handleOpenAnalysis = () => {
    setIsAnalysisOpen(true);
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

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <div className={styles.dday}>D-17</div>
        <div className={styles.title}>{roomName}</div>
        <div className={styles.travelDate}>
          <IconCallendar />
          {format(startDate, 'yyyy.MM.dd')} - {format(endDate, 'yyyy.MM.dd')}
        </div>
      </div>

      <div className={styles.familyMemberTitle}>함께하는 우리 가족</div>
      <div className={styles.familyMemberContainer}>
        {users.map(({ admin, id, travelType }) => (
          <div className={styles.familyWrapper}>
            <div
              key={id}
              className={`${styles.familyMemberList} 
              ${admin ? styles.familyAdminImg : styles.familyMemberImg}`}
            >
              {admin && <IconCrown className={styles.icon} />}
              <div className={styles.travelIcon}>{TRAVEL_ICON[travelType as TravelType]}</div>
            </div>
            <div className={styles.familyMemberName}>테스트</div>
          </div>
        ))}
      </div>
      <div className={styles.commandmentListContainer}>
        <div className={styles.commandmentListTitle}>서로를 배려하는 여행 10계명</div>

        <div className={styles.commandmentItem}>
          <EmptyRoom />
          <div className={styles.info}>
            {renderInfoMessage(
              isLeader ? COMMANDMENTS_INFO_MESSAGE[1] : COMMANDMENTS_INFO_MESSAGE[0],
            )}
          </div>
          <div className={styles.buttonWrapper}>
            {isLeader ? (
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
              <div className={styles.buttonPlaceholder}></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelDetail;
