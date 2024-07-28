import Header from '@components/Header';
import styles from './CheckType.module.scss';
import {
  MiniC1,
  MiniC2,
  MiniC3,
  MiniC4,
  MiniC5,
  MiniC6,
  MiniP1,
  MiniP2,
  MiniP3,
  MiniP4,
  MiniP5,
  MiniP6,
  SelectedMiniC1,
  SelectedMiniC2,
  SelectedMiniC3,
  SelectedMiniC4,
  SelectedMiniC5,
  SelectedMiniC6,
  SelectedMiniP1,
  SelectedMiniP2,
  SelectedMiniP3,
  SelectedMiniP4,
  SelectedMiniP5,
  SelectedMiniP6,
} from '@images/index';
import { useRecoilValue } from 'recoil';
import testResponseAtom from '@recoil/testResponse';
import { useState } from 'react';
import Button from '@components/Button';

const PARENT_DATA = [
  {
    value: 'P1',
    icon: <MiniC1 />,
    selectedIcon: <SelectedMiniC1 />,
    tagName: ['열정 가득', '도전 자녀'],
  },
  {
    value: 'P2',
    icon: <MiniC2 />,
    selectedIcon: <SelectedMiniC2 />,
    tagName: ['긍정 뿜뿜', '모험 자녀'],
  },
  {
    value: 'P3',
    icon: <MiniC3 />,
    selectedIcon: <SelectedMiniC3 />,
    tagName: ['걱정 많은', '신중 자녀'],
  },
  {
    value: 'P4',
    icon: <MiniC4 />,
    selectedIcon: <SelectedMiniC4 />,
    tagName: ['느긋한', '안전 자녀'],
  },
  {
    value: 'P5',
    icon: <MiniC5 />,
    selectedIcon: <SelectedMiniC5 />,
    tagName: ['균형 잡힌', '협력 자녀'],
  },
  {
    value: 'P6',
    icon: <MiniC6 />,
    selectedIcon: <SelectedMiniC6 />,
    tagName: ['꼼꼼한', '실속 자녀'],
  },
];

const CHILDREN_DATA = [
  {
    value: 'C1',
    icon: <MiniP1 />,
    selectedIcon: <SelectedMiniP1 />,
    tagName: ['열정 가득', '도전 부모'],
  },
  {
    value: 'C2',
    icon: <MiniP2 />,
    selectedIcon: <SelectedMiniP2 />,
    tagName: ['긍정 뿜뿜', '모험 부모'],
  },
  {
    value: 'C3',
    icon: <MiniP3 />,
    selectedIcon: <SelectedMiniP3 />,
    tagName: ['걱정 많은', '신중 부모'],
  },
  {
    value: 'C4',
    icon: <MiniP4 />,
    selectedIcon: <SelectedMiniP4 />,
    tagName: ['느긋한', '안전 부모'],
  },
  {
    value: 'C5',
    icon: <MiniP5 />,
    selectedIcon: <SelectedMiniP5 />,
    tagName: ['균형 잡힌', '협력 부모'],
  },
  {
    value: 'C6',
    icon: <MiniP6 />,
    selectedIcon: <SelectedMiniP6 />,
    tagName: ['꼼꼼한', '실속 부모'],
  },
];

const CheckType = () => {
  const testResult = useRecoilValue(testResponseAtom);

  const [selectedType, setSelectedType] = useState<string | undefined>(undefined);

  if (!testResult) {
    return null;
  }

  const handleClick = () => {
    alert('AI 연동 준비중');
  };

  const { travelType } = testResult;

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
