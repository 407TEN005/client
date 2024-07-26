import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@components/Button';
import styles from './TestSurvey.module.scss';
import {
  TestFather,
  TestMother,
  TestSon,
  TestDaughter,
  SelectedTestFather,
  SelectedTestMother,
  SelectedTestSon,
  SelectedTestDaughter,
} from '@images/index';

const TestSurvey = () => {
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState<string | undefined>(undefined);

  const handleSelect = (value: string) => {
    if (value === selectedRole) {
      setSelectedRole(undefined);
    } else {
      setSelectedRole(value);
    }
  };

  const handleClick = () => {
    navigate('/test/survey/1');
  };

  const isDisabled = !selectedRole;

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.title}>가족 중 어떤 구성원에 해당하나요?</p>
        <p className={styles.subTitle}>테스트에 앞서, 나의 역할을 선택해주세요.</p>
        <p className={styles.subTitle}>선택한 역할에 따라 맞춤형 질문이 제공됩니다.</p>

        <div className={styles.familyWrapper}>
          <div
            className={`
              ${styles.family} 
              ${selectedRole === 'father' ? styles.selected : ''}`}
            onClick={() => handleSelect('father')}
          >
            <div className={styles.image}>
              {selectedRole === 'father' ? <SelectedTestFather /> : <TestFather />}
            </div>
            <label>아빠</label>
          </div>
          <div
            className={`
              ${styles.family} 
              ${selectedRole === 'mother' ? styles.selected : ''}`}
            onClick={() => handleSelect('mother')}
          >
            <div className={styles.image}>
              {selectedRole === 'mother' ? <SelectedTestMother /> : <TestMother />}
            </div>
            <label>엄마</label>
          </div>
          <div
            className={`
              ${styles.family} 
              ${selectedRole === 'son' ? styles.selected : ''}`}
            onClick={() => handleSelect('son')}
          >
            <div className={styles.image}>
              {selectedRole === 'son' ? <SelectedTestSon /> : <TestSon />}
            </div>
            <label>아들</label>
          </div>
          <div
            className={`
              ${styles.family} 
              ${selectedRole === 'daughter' ? styles.selected : ''}`}
            onClick={() => handleSelect('daughter')}
          >
            <div className={styles.image}>
              {selectedRole === 'daughter' ? <SelectedTestDaughter /> : <TestDaughter />}
            </div>
            <label>딸</label>
          </div>
        </div>
      </div>

      <Button isActive className={styles.button} onClick={handleClick} disabled={isDisabled}>
        다음
      </Button>
    </div>
  );
};

export default TestSurvey;
