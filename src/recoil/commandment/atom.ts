import { atom } from 'recoil';

const commandmentAtom = atom<string[]>({
  key: 'commandment',
  default: [],
});

export default commandmentAtom;
