import styles from './TestResult.module.scss';
import Button from '@components/Button';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import testResponseAtom from '@recoil/testResponse';
import ROUTES from '@constants/routes';
import { TRAVEL_TYPE, TravelType } from '@constants/testResult';
import { splitTextWithLineBreaks } from '@utils/textUtil';
import commandmentAtom from '@recoil/commandment';
import { useEffect } from 'react';

const TestResult = () => {
  const testResult = useRecoilValue(testResponseAtom);
  const navigate = useNavigate();

  const resetCommandment = useResetRecoilState(commandmentAtom);

  useEffect(() => {
    return () => {
      resetCommandment();
    };
  }, [resetCommandment]);

  if (!testResult) {
    return null;
  }

  const { travelType, description, hashtag, advantage, caution } = testResult;

  const handleStartTenTen = () => {
    navigate(ROUTES.checkType);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.subTitle}>나의 여행 성향은</div>
      <div className={styles.title}>{description}</div>
      <div className={styles.tagsWrapper}>
        {hashtag.slice(0, 3).map((tag) => (
          <div className={styles.tag} key={tag}>
            {tag}
          </div>
        ))}
      </div>
      {TRAVEL_TYPE[travelType as TravelType]}

      <div className={styles.descriptionWrapper}>
        <div className={styles.description}>{splitTextWithLineBreaks(advantage)}</div>
        <div className={styles.description}>{splitTextWithLineBreaks(caution)}</div>
      </div>
      <Button variant="gray" size="xl" isActive onClick={handleStartTenTen}>
        텐텐 시작하기
      </Button>
    </div>
  );
};

export default TestResult;
