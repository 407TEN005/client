import styles from './AuthTestResult.module.scss';
import Button from '@components/Button';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import testResponseAtom from '@recoil/testResponse';
import ROUTES from '@constants/routes';
import { TRAVEL_TYPE, TravelType } from '@constants/testResult';
import { splitTextWithLineBreaks } from '@utils/textUtil';

const AuthTestResult = () => {
  const navigate = useNavigate();
  const testResult = useRecoilValue(testResponseAtom);

  if (!testResult) {
    return null;
  }

  const { travelType, description, hashtag, advantage, caution } = testResult;

  const handleStartTenTen = async () => {
    navigate(ROUTES.travel);
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

export default AuthTestResult;
