import { atom } from 'recoil';

interface TestResponseAtom {
  travelType: string;
  description: string;
  advantage: string;
  caution: string;
  hashtag: string[];
}

const testResponseAtom = atom<TestResponseAtom>({
  key: 'testResponseAtom',
  default: undefined,
});

export default testResponseAtom;
