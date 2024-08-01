import { atom } from 'recoil';

const testAnswersAtom = atom<string[]>({
  key: 'testAnswersAtom',
  default: [],
});

export default testAnswersAtom;
