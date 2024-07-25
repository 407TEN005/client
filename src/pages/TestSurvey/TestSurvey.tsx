import Button from '@components/Button';
import styles from './TestSurvey.module.scss';

// todo : 사진 추가 예정

const TestSurvey = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.title}>가족 중 어떤 구성원에 해당하나요?</p>
        <p className={styles.subTitle}>테스트에 앞서, 나의 역할을 선택해주세요.</p>
        <p className={styles.subTitle}>선택한 역할에 따라 맞춤형 질문이 제공됩니다.</p>

        <div className={styles.familyWrapper}>
          <div className={styles.family}>아빠</div>
          <div className={styles.family}>엄마</div>
          <div className={styles.family}>아들</div>
          <div className={styles.family}>딸</div>
        </div>
      </div>

      <Button isActive className={styles.button} onClick={() => alert('기능 개발')}>
        다음
      </Button>
    </div>
  );
};

export default TestSurvey;
