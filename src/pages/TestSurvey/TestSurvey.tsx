import Button from '@components/Button';
import styles from './TestSurvey.module.scss';
import {
  TestFather,
  TestMother,
  TestSon,
  TestDaughter,
  //   선택 추가시 추가예정
  //   SelectedTestFather,
  //   SelectedTestMother,
  //   SelectedTestSon,
  //   SelectedTestDaughter,
} from '@images/index';
import { useNavigate } from 'react-router-dom';

// todo : 사진 추가 예정

const TestSurvey = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/test/survey/1');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.title}>가족 중 어떤 구성원에 해당하나요?</p>
        <p className={styles.subTitle}>테스트에 앞서, 나의 역할을 선택해주세요.</p>
        <p className={styles.subTitle}>선택한 역할에 따라 맞춤형 질문이 제공됩니다.</p>

        <div className={styles.familyWrapper}>
          <div className={styles.family}>
            <div className={styles.label}>
              <span>아빠</span>
            </div>
            <div className={styles.image}>
              <TestFather />
            </div>
          </div>
          <div className={styles.family}>
            <div className={styles.label}>
              <span>엄마</span>
            </div>
            <div className={styles.image}>
              <TestMother />
            </div>
          </div>
          <div className={styles.family}>
            <div className={styles.label}>
              <span>아들</span>
            </div>
            <div className={styles.image}>
              <TestSon />
            </div>
          </div>
          <div className={styles.family}>
            <div className={styles.label}>
              <span>딸</span>
            </div>
            <div className={styles.image}>
              <TestDaughter />
            </div>
          </div>
        </div>
      </div>

      <Button isActive className={styles.button} onClick={handleClick}>
        다음
      </Button>
    </div>
  );
};

export default TestSurvey;
