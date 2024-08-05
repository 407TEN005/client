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

export type TravelType =
  | 'P1'
  | 'P2'
  | 'P3'
  | 'P4'
  | 'P5'
  | 'P6'
  | 'C1'
  | 'C2'
  | 'C3'
  | 'C4'
  | 'C5'
  | 'C6';

export const TRAVEL_TYPE: Record<TravelType, React.ReactNode> = {
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

export const TRAVEL_DESCRIPTION: Record<TravelType, string> = {
  P1: '열정 넘치는 불꽃 부모',
  P2: '긍정 에너지 만렙 부모',
  P3: '걱정 많은 안전제일 부모',
  P4: '느긋한 여유파 부모',
  P5: '융통성 있는 중재자 부모',
  P6: '꼼꼼한 현실주의 부모',
  C1: '열정 가득 도전 자녀',
  C2: '긍정 뿜뿜 모험 자녀',
  C3: '걱정 많은 신중 자녀',
  C4: '느긋한 안전 자녀',
  C5: '균형 잡힌 협력 자녀',
  C6: '꼼꼼한 실속 자녀',
};

export const PARENT_DATA = [
  {
    value: 'C1',
    icon: <MiniC1 />,
    selectedIcon: <SelectedMiniC1 />,
    tagName: ['열정 가득', '도전 자녀'],
  },
  {
    value: 'C2',
    icon: <MiniC2 />,
    selectedIcon: <SelectedMiniC2 />,
    tagName: ['긍정 뿜뿜', '모험 자녀'],
  },
  {
    value: 'C3',
    icon: <MiniC3 />,
    selectedIcon: <SelectedMiniC3 />,
    tagName: ['걱정 많은', '신중 자녀'],
  },
  {
    value: 'C4',
    icon: <MiniC4 />,
    selectedIcon: <SelectedMiniC4 />,
    tagName: ['느긋한', '안전 자녀'],
  },
  {
    value: 'C5',
    icon: <MiniC5 />,
    selectedIcon: <SelectedMiniC5 />,
    tagName: ['균형 잡힌', '협력 자녀'],
  },
  {
    value: 'C6',
    icon: <MiniC6 />,
    selectedIcon: <SelectedMiniC6 />,
    tagName: ['꼼꼼한', '실속 자녀'],
  },
];

export const CHILDREN_DATA = [
  {
    value: 'P1',
    icon: <MiniP1 />,
    selectedIcon: <SelectedMiniP1 />,
    tagName: ['열정 가득', '도전 부모'],
  },
  {
    value: 'P2',
    icon: <MiniP2 />,
    selectedIcon: <SelectedMiniP2 />,
    tagName: ['긍정 뿜뿜', '모험 부모'],
  },
  {
    value: 'P3',
    icon: <MiniP3 />,
    selectedIcon: <SelectedMiniP3 />,
    tagName: ['걱정 많은', '신중 부모'],
  },
  {
    value: 'P4',
    icon: <MiniP4 />,
    selectedIcon: <SelectedMiniP4 />,
    tagName: ['느긋한', '안전 부모'],
  },
  {
    value: 'P5',
    icon: <MiniP5 />,
    selectedIcon: <SelectedMiniP5 />,
    tagName: ['균형 잡힌', '협력 부모'],
  },
  {
    value: 'P6',
    icon: <MiniP6 />,
    selectedIcon: <SelectedMiniP6 />,
    tagName: ['꼼꼼한', '실속 부모'],
  },
];

export const TRAVEL_ICON: Record<TravelType, React.ReactNode> = {
  P1: <SelectedMiniP1 />,
  P2: <SelectedMiniP2 />,
  P3: <SelectedMiniP3 />,
  P4: <SelectedMiniP4 />,
  P5: <SelectedMiniP5 />,
  P6: <SelectedMiniP6 />,
  C1: <SelectedMiniC1 />,
  C2: <SelectedMiniC2 />,
  C3: <SelectedMiniC3 />,
  C4: <SelectedMiniC4 />,
  C5: <SelectedMiniC5 />,
  C6: <SelectedMiniC6 />,
};
