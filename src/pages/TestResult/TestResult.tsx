import styles from './TestResult.module.scss';
import Button from '@src/components/Button';
import Sample from '@src/assets/images/testresultimg.svg';

const TestResult = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.subTitle}>나의 여행 성향은</div>
      <div className={styles.title}>열정 넘치는 불꽃 부모</div>
      <div className={styles.tagsWrapper}>
        <div className={styles.tag}>#도전은내운명</div>
        <div className={styles.tag}>#도전은내운명</div>
        <div className={styles.tag}>#즉흥여행의달인</div>
      </div>
      <div className={styles.characterImg}>
        <img src={Sample} />
      </div>
      <div className={styles.description}></div>
      <div className={styles.description}></div>
      <Button variant="gray" size="xl">
        텐텐 시작하기
      </Button>
    </div>
  );
};

export default TestResult;
