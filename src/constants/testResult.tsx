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
  MiniIconC1,
  MiniIconC2,
  MiniIconC3,
  MiniIconC4,
  MiniIconC5,
  MiniIconC6,
  MiniIconP1,
  MiniIconP2,
  MiniIconP3,
  MiniIconP4,
  MiniIconP5,
  MiniIconP6,
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

export const TRAVEL_MINI_ICON: Record<TravelType, React.ReactNode> = {
  P1: <MiniIconP1 />,
  P2: <MiniIconP2 />,
  P3: <MiniIconP3 />,
  P4: <MiniIconP4 />,
  P5: <MiniIconP5 />,
  P6: <MiniIconP6 />,
  C1: <MiniIconC1 />,
  C2: <MiniIconC2 />,
  C3: <MiniIconC3 />,
  C4: <MiniIconC4 />,
  C5: <MiniIconC5 />,
  C6: <MiniIconC6 />,
};

export const TRAVEL_HASH_TAG: Record<TravelType, string[]> = {
  P1: ['#도전은내운명', '#감정폭발주의', '#즉흥여행의달인'],
  P2: ['#웃음백신접종완료', '#모험은나의힘', '#자녀의견존중매니아'],
  P3: ['#걱정이곧사랑', '#계획은필수', '#부모님말씀은진리'],
  P4: ['#평화주의자', '#안전지대선호', '#여유있는계획'],
  P5: ['#중재의달인', '#적당한도전환영', '#융통성있는계획'],
  P6: ['#안전한도전선호', '#즉흥속의계획', '#부모의경험중시'],
  C1: ['#폭풍감정표현', '#도전이곧인생', '#즉흥여행전문가'],
  C2: ['#웃음폭포', '#모험은나의것', '#즉흥여행선호'],
  C3: ['#걱정대마왕', '#안전지대사수', '#계획은필수'],
  C4: ['#평화주의자', '#여유있는계획선호', '#부모님의견존중'],
  C5: ['#중재전문가', '#적당한도전환영', '#내의견도중요'],
  C6: ['#현실주의자', '#안전한도전선호', '#계획은필수'],
};

export const TRAVEL_DETAIL: Record<TravelType, { title: string[]; subTitle: string[] }> = {
  P1: {
    title: ['활기찬 여행 분위기를 조성하며', '새로운 경험에 언제나 활짝 열려있군요!'],
    subTitle: ['다소 강한 감정 표현이 앞서', '갈등이 발생하지 않도록 주의하세요!'],
  },
  P2: {
    title: ['스트레스 상황에서도 유연하게 대처하는군요!'],
    subTitle: ['지나친 낙관으로 현실적 문제를', '간과하지 않도록 주의하세요!'],
  },
  P3: {
    title: ['철저한 준비와 안전을 고려하는군요!'],
    subTitle: ['과도한 걱정으로 가족의 즐거움이', '저하되지 않도록 주의하세요!'],
  },
  P4: {
    title: ['스트레스 없는 여행 분위기를 조성하는군요!'],
    subTitle: ['지나친 여유로 시간 관리에', '실패하지 않도록 주의하세요!'],
  },
  P5: {
    title: ['가족 간 의견을 잘 조율하는군요!'],
    subTitle: ['결정 과정에서 우유부단해지지 않도록 주의하세요!'],
  },
  P6: {
    title: ['체계적인 여행계획을 수립하는군요!'],
    subTitle: ['지나친 계산으로 즉흥적인 즐거움이', '감소하지 않도록 주의하세요!'],
  },
  C1: {
    title: ['모험과 호기심이 풍부하군요!'],
    subTitle: ['위험한 상황을 초래하지 않도록 주의하세요!'],
  },
  C2: {
    title: ['어떤 상황에서도 즐거움을 찾는군요!'],
    subTitle: ['현실적인 문제 인식이 부족하지 않도록', '주의하세요!'],
  },
  C3: {
    title: ['안전과 세부사항을 주의 깊게 관찰하는군요!'],
    subTitle: ['새로운 경험에 대해 지나치게 두려워하지', '않도록 주의하세요!'],
  },
  C4: {
    title: ['스트레스 없이 여행을 즐기는군요!'],
    subTitle: ['여행 준비나 결정에 소극적이지 않도록', '주의하세요!'],
  },
  C5: {
    title: ['가족 간 의견을 잘 조율하는군요!'],
    subTitle: ['본인의 선호도 표현이 부족하지 않도록', '주의하세요!'],
  },
  C6: {
    title: ['효율적인 여행 계획을 수립하는군요!'],
    subTitle: ['지나친 실용성 추구로 특별한 경험을 놓치지', '않도록 주의하세요!'],
  },
};
