import { TravelType } from '@constants/testResult';
import { atom } from 'recoil';

interface UserData {
  id: number;
  nickname: string;
  authority: string;
  status: 'ACTIVE' | 'NEW';
  familyRole: string;
  travelType: TravelType;
}

const userDataAtom = atom<UserData | undefined>({
  key: 'userDataAtom',
  default: undefined,
});

export default userDataAtom;
