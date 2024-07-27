import {
  ResultC1,
  ResultC2,
  ResultC3,
  ResultC4,
  ResultC5,
  ResultC6,
  ResultP1,
  ResultP2,
  ResultP3,
  ResultP4,
  ResultP5,
  ResultP6,
} from '@images/index';
import styles from './TestResult.module.scss';
import Button from '@components/Button';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import testResponseAtom from '@recoil/testResponse';

type TravelType = 'P1' | 'P2' | 'P3' | 'P4' | 'P5' | 'P6' | 'C1' | 'C2' | 'C3' | 'C4' | 'C5' | 'C6';

const TRAVEL_TYPE = {
  P1: <ResultP1 />,
  P2: <ResultP2 />,
  P3: <ResultP3 />,
  P4: <ResultP4 />,
  P5: <ResultP5 />,
  P6: <ResultP6 />,
  C1: <ResultC1 />,
  C2: <ResultC2 />,
  C3: <ResultC3 />,
  C4: <ResultC4 />,
  C5: <ResultC5 />,
  C6: <ResultC6 />,
};

const splitTextWithLineBreaks = (text: string): (string | JSX.Element)[] => {
  return text.split(' ').reduce<(string | JSX.Element)[]>((prev, current, i) => {
    if (i !== 0 && i % 5 === 0) {
      return [...prev, <br key={i} />, current];
    }
    return [...prev, ` ${current}`];
  }, []);
};

const TestResult = () => {
  const testResult = useRecoilValue(testResponseAtom);
  const navigate = useNavigate();

  if (!testResult) {
    return null;
  }

  const { travelType, description, hashtag, advantage, caution } = testResult;

  const handleStartTenTen = () => {
    navigate('/checkType');
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
