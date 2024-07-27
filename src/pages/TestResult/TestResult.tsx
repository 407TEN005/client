import { ResultP1 } from '@images/index';
import styles from './TestResult.module.scss';
import Button from '@components/Button';
import { useNavigate } from 'react-router-dom';

const TRAVEL_TYPE = {
  travelType: 'P1',
  description: '열정 넘치는 불꽃 부모',
  advantage: '활기찬 여행 분위기를 조성하며 새로운 경험에 언제나 활짝 열려있군요!',
  caution: '다소 강한 감정 표현이 앞서 갈등이 발생하지 않도록 주의하세요!',
  hashtag: ['#감정폭발주의', '#도전은내운명', '#즉흥여행의달인', '#내말이곧법'],
};

const TestResult = () => {
  const navigate = useNavigate();
  const handleStartTenTen = () => {
    navigate('/travel/:travelId');
  };

  const splitTextWithLineBreaks = (text: string): (string | JSX.Element)[] => {
    return text.split(' ').reduce<(string | JSX.Element)[]>((prev, current, i) => {
      if (i !== 0 && i % 5 === 0) {
        return [...prev, <br key={i} />, current];
      }
      return [...prev, ` ${current}`];
    }, []);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.subTitle}>나의 여행 성향은</div>
      <div className={styles.title}>{TRAVEL_TYPE.description}</div>
      <div className={styles.tagsWrapper}>
        {TRAVEL_TYPE.hashtag.slice(0, 3).map((tag) => (
          <div className={styles.tag} key={tag}>
            {tag}
          </div>
        ))}
      </div>
      <ResultP1 className={styles.characterImg} />
      <div className={styles.descriptionWrapper}>
        <div className={styles.description}>{splitTextWithLineBreaks(TRAVEL_TYPE.advantage)}</div>
        <div className={styles.description}>{splitTextWithLineBreaks(TRAVEL_TYPE.caution)}</div>
      </div>
      <Button variant="gray" size="xl" isActive onClick={handleStartTenTen}>
        텐텐 시작하기
      </Button>
    </div>
  );
};

export default TestResult;
