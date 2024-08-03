import Header from '@components/Header';
import styles from './CheckType.module.scss';

import { useRecoilValue } from 'recoil';
import testResponseAtom from '@recoil/testResponse';
import { useState } from 'react';
import Button from '@components/Button';
import testAnswersAtom from '@recoil/testAnswers';
import useCommandmentWithoutAuth from '@apis/useCommandmentWithoutAuth';
import Analysis from '@components/Analysis';
import commandmentAtom from '@recoil/commandment';
import Commandment from './Commandment';
import { CHILDREN_DATA, PARENT_DATA } from '@constants/testResult';

const CheckType = () => {
  const testResult = useRecoilValue(testResponseAtom);
  const testAnswers = useRecoilValue(testAnswersAtom);
  const commandment = useRecoilValue(commandmentAtom);

  const [selectedType, setSelectedType] = useState<string | undefined>(undefined);

  const { loading, createCommandmentWithoutAuth } = useCommandmentWithoutAuth();

  if (!testResult || !testAnswers) {
    return null;
  }

  const { travelType } = testResult;
  const [role, ...answers] = testAnswers;

  const handleClick = async () => {
    if (selectedType) {
      await createCommandmentWithoutAuth({
        role,
        myTravelType: travelType,
        answers,
        targetTravelType: selectedType,
      });
    }
  };

  if (loading) {
    return <Analysis />;
  }

  if (commandment.length > 0) {
    return (
      <Commandment
        onClick={handleClick}
        commandments={commandment}
        travelType={travelType}
        selectedTravelType={selectedType}
      />
    );
  }

  const isParent = travelType.includes('P');

  const isDisabled = selectedType === undefined;

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.title}>원하는 {isParent ? '자녀' : '부모'} 유형을 선택해</p>
          <p className={styles.title}>여행 10계명을 생성해 보세요.</p>
          <p className={styles.subTitle}>현재는 정확한 결과 도출을 위해 1명만 선택 가능해요.</p>
          <div className={styles.cardWrapper}>
            {(isParent ? PARENT_DATA : CHILDREN_DATA).map((data) => {
              const { value, icon, selectedIcon, tagName } = data;

              const handleClick = (value: string) => {
                if (selectedType === value) {
                  setSelectedType(undefined);
                } else {
                  setSelectedType(value);
                }
              };

              return (
                <div
                  className={`${styles.card} ${selectedType === value ? styles.selected : ''}`}
                  onClick={() => handleClick(value)}
                  key={value}
                >
                  <div className={styles.image}>{selectedType === value ? selectedIcon : icon}</div>
                  {tagName.map((tag, index) => (
                    <p key={index}>{tag}</p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
        <Button size="xl" isActive disabled={isDisabled} onClick={handleClick}>
          이 조합으로 10계명 생성하기
        </Button>
      </div>
    </>
  );
};

export default CheckType;
