import { useState } from 'react';
import styles from './FamilyRoleSurvey.module.scss';
import Button from '@components/Button';
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
import Header from '@components/Header';

const FamilyRoleSurvey = ({ onAnswer }: { onAnswer: (answer: string) => void }) => {
  const [selectedRole, setSelectedRole] = useState<string | undefined>(undefined);

  const handleSelect = (value: string) => {
    if (value === selectedRole) {
      setSelectedRole(undefined);
    } else {
      setSelectedRole(value);
    }
  };

  const handleClick = () => {
    if (selectedRole) {
      onAnswer(selectedRole);
    }
  };

  const isDisabled = !selectedRole;

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.title}>가족 중 어떤 구성원에 해당하나요?</p>
          <p className={styles.subTitle}>테스트에 앞서 나의 역할을 선택해주세요.</p>
          <p className={styles.subTitle}>선택한 역할에 따라 맞춤형 질문이 제공됩니다.</p>

          <div className={styles.familyWrapper}>
            <div
              className={`
              ${styles.family} 
              ${selectedRole === 'DAD' ? styles.selected : ''}`}
              onClick={() => handleSelect('DAD')}
            >
              <div className={styles.image}>
                {selectedRole === 'DAD' ? <SelectedTestFather /> : <TestFather />}
              </div>
              <label>아빠</label>
            </div>
            <div
              className={`
              ${styles.family} 
              ${selectedRole === 'MOM' ? styles.selected : ''}`}
              onClick={() => handleSelect('MOM')}
            >
              <div className={styles.image}>
                {selectedRole === 'MOM' ? <SelectedTestMother /> : <TestMother />}
              </div>
              <label>엄마</label>
            </div>
            <div
              className={`
              ${styles.family} 
              ${selectedRole === 'SON' ? styles.selected : ''}`}
              onClick={() => handleSelect('SON')}
            >
              <div className={styles.image}>
                {selectedRole === 'SON' ? <SelectedTestSon /> : <TestSon />}
              </div>
              <label>아들</label>
            </div>
            <div
              className={`
              ${styles.family} 
              ${selectedRole === 'DAUGHTER' ? styles.selected : ''}`}
              onClick={() => handleSelect('DAUGHTER')}
            >
              <div className={styles.image}>
                {selectedRole === 'DAUGHTER' ? <SelectedTestDaughter /> : <TestDaughter />}
              </div>
              <label>딸</label>
            </div>
          </div>
        </div>

        <Button isActive className={styles.button} onClick={handleClick} disabled={isDisabled}>
          다음
        </Button>
      </div>
    </>
  );
};

export default FamilyRoleSurvey;
