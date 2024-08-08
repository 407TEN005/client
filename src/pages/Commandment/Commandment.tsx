import useGetTravelRoomDetail from '@src/apis/useGetTravelRoomDetail';
import styles from './Commandment.module.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CommandmentIlust, DashLine, Refresh, Share } from '@images/index';
import Tooltip from '@components/Tooltip';
import useCreateCommandment from '@apis/useCreateCommandment';
import Analysis from '@components/Analysis';
import useShareCommandment from '@src/hooks/useShareCommandment';

const Commandment = () => {
  const { travelId } = useParams();
  const { travelRoomData, fetchTravelRoomDetail } = useGetTravelRoomDetail();
  const { isLoading, createCommandment } = useCreateCommandment();

  const { handleShare } = useShareCommandment({ travelId });

  const handleCreateNewCommandment = async () => {
    await createCommandment(travelId);
  };

  useEffect(() => {
    fetchTravelRoomDetail(travelId);
  }, []);

  if (isLoading) {
    return <Analysis />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}></div>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{travelRoomData?.roomName}</div>
      </div>

      <div className={styles.commandmentWrapper}>
        <CommandmentIlust className={styles.backgroundIllustration} />
        <div className={styles.contentOverlay}>
          <div className={styles.commandmentTitle}>서로를 배려하는 여행 10계명</div>
          <DashLine />
          <div className={styles.itemWrapper}>
            {travelRoomData?.commandments.map((commandment, index) => (
              <p key={index} className={styles.commandmentItem}>
                {commandment}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={handleShare}>
            <Share />
            <div className={styles.info}>공유하기</div>
          </button>
        </div>
        {travelRoomData?.commandments && travelRoomData?.commandments.length < 10 && (
          <div className={styles.buttons}>
            <Tooltip content="10계명이 모두 나타나지 않았다면? 클릭!" />
            <button className={styles.button} onClick={handleCreateNewCommandment}>
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
