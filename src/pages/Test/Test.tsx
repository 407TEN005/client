import { TestLogo } from '@images/index';
import Button from '@components/Button';
import styles from './Test.module.scss';
import { useNavigate } from 'react-router-dom';
import ROUTES from '@constants/routes';

const Test = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(ROUTES.testSurvey);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.title}>행복을 위해 떠나는 우리 가족 여행</p>
        <p className={styles.title}>이젠 싸우지 말고 텐션 UP!</p>
        <p className={styles.subTitle}>서로의 여행 성향을 공유하고</p>
        <p className={styles.subTitle}>우리 가족 맞춤형 10계명을 만들어요</p>

        <TestLogo />
      </div>

      <Button isActive className={styles.button} onClick={handleButtonClick}>
        테스트 시작하기
      </Button>
    </div>
  );
};

export default Test;
