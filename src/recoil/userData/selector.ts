import { selector } from 'recoil';
import userDataAtom from './atom';

export const userTravelTypeSelector = selector({
  key: 'userTravelTypeSelector',
  get: ({ get }) => {
    const userData = get(userDataAtom);

    return userData?.travelType;
  },
});
