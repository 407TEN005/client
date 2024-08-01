import {
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
