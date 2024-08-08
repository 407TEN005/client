import useGetUserData from '@apis/useGetUserData';
import styles from './MyTestResult.module.scss';
import {
  TRAVEL_DESCRIPTION,
  TRAVEL_DETAIL,
  TRAVEL_HASH_TAG,
  TRAVEL_TYPE,
} from '@constants/testResult';
import Button from '@components/Button';
import { LeftArrow } from '@images/index';
import { useNavigate } from 'react-router-dom';
import ROUTES from '@constants/routes';

const MyTestResult = () => {
  const navigate = useNavigate();
  const { userData } = useGetUserData();

  const handleGoBack = () => {
    navigate(ROUTES.travel);
  };

  const handleAuthTest = () => {
    navigate(ROUTES.authTest);
  };

  if (!userData) {
    return null;
  }

  const { travelType } = userData;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.goBack} onClick={handleGoBack}>
          <LeftArrow />
        </div>
      </div>
      <div className={styles.subTitle}>나의 여행 성향은</div>
      <div className={styles.title}>{TRAVEL_DESCRIPTION[travelType]}</div>
      <div className={styles.tagsWrapper}>
        {TRAVEL_HASH_TAG[travelType].slice(0, 3).map((tag) => (
          <div className={styles.tag} key={tag}>
            {tag}
          </div>
        ))}
      </div>
      {TRAVEL_TYPE[travelType]}

      <div className={styles.descriptionWrapper}>
        <div className={styles.description}>
          {TRAVEL_DETAIL[travelType].title.map((title, index) => (
            <p key={index}>{title}</p>
          ))}
        </div>
        <div className={styles.description}>
          {TRAVEL_DETAIL[travelType].subTitle.map((subTitle, index) => (
            <p key={index}>{subTitle}</p>
          ))}
        </div>
      </div>
      <Button className={styles.button} variant="blue" size="xl" isActive onClick={handleAuthTest}>
        성향 테스트 다시하기
      </Button>
    </div>
  );
};

export default MyTestResult;
