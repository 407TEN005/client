import styles from './Travel.module.scss';
import Button from '@components/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Analysis from '@src/components/Analysis';
import { EmptyRoom, IconCallendar, IconCrown } from '@src/assets/images';

const TRAVEL_DATA = {
  id: 1,
  roomName: '가족들과 3박 4일 오사카 여행4',
  startDate: '2024-08-13',
  endDate: '2024-08-17',
  headcount: 2,
  maxHeadcount: 4,
  existCommandments: false,
};

const FAMILY_MEMBERS = [
  { id: 1, name: '엄마', isLeader: true },
  { id: 2, name: '아빠', isLeader: false },
  { id: 3, name: '아들', isLeader: false },
  { id: 4, name: '딸', isLeader: false },
];

const COMMANDMENTS_INFO_MESSAGE = [
  '이번 가족 여행을 위한 10계명 공개 직전! 모두 입장할 때까지 잠시만 기다려주세요...',
  '함께하는 가족 구성원이 모두 모였다면 \n이번 여행을 위한 10계명을 생성해 보세요!',
];

const Travel = () => {
  const navigate = useNavigate();
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);

  const isLeader = true;

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

  const handleOpenAnalysis = () => {
    setIsAnalysisOpen(true);
  };

  if (isAnalysisOpen) {
    return (
      <Analysis
        title="여행 10계명 생성 시작!"
        description="AI가 모든 가족 구성원의 성향을 반영해 
맞춤형 10계명을 생성하고 있어요"
        timeStatement={true}
      />
    );
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
        <div className={styles.title}>온가족이 함께 하는 방콕 휴가</div>
        <div className={styles.travelDate}>
          <IconCallendar />
          2024.08.12 - 2024.08.20
        </div>
      </div>

      <div className={styles.familyMemberTitle}>함께하는 우리 가족</div>
      <div className={styles.familyMemberContainer}>
        {FAMILY_MEMBERS.map((member, index) => (
          <div key={index} className={styles.familyMemberList}>
            <div className={member.isLeader ? styles.familyAdminImg : styles.familyMemberImg}>
              {member.isLeader && (
                <div className={styles.iconWrapper}>
                  <IconCrown className={styles.icon} />
                </div>
              )}
            </div>
            <div className={styles.familyMemberName}>{member.name}</div>
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

export default Travel;
