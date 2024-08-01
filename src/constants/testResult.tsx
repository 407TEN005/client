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
