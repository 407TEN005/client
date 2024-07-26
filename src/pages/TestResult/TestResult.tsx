import { ResultSample } from '@src/assets/images';
import styles from './TestResult.module.scss';
import Button from '@src/components/Button';
import { useNavigate } from 'react-router-dom';

const TAG_MESSAGES = ['#도전은내운명', '#감정폭발주의', '#즉흥여행의달인'];
// description 부분 줄바꿈 처리 추가 예정

const TestResult = () => {
  const navigate = useNavigate();
  const handleStartTenTen = () => {
    navigate('/travel/:travelId');
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.subTitle}>나의 여행 성향은</div>
      <div className={styles.title}>열정 넘치는 불꽃 부모</div>
      <div className={styles.tagsWrapper}>
        {TAG_MESSAGES.map((tag) => (
          <div className={styles.tag} key={tag}>
            {tag}
          </div>
        ))}
      </div>
      <ResultSample className={styles.characterImg} />
      <div className={styles.descriptionWrapper}>
        <div className={styles.description}>
          활기찬 여행 분위기를 조성하며 <br /> 새로운 경험에 언제나 활짝 열려있군요!
        </div>
        <div className={styles.description}>
          다소 강한 감정 표현이 앞서 <br /> 갈등이 발생하지 않도록 주의하세요!
        </div>
      </div>
      <Button variant="gray" size="xl" isActive onClick={handleStartTenTen}>
        텐텐 시작하기
      </Button>
    </div>
  );
};

export default TestResult;
