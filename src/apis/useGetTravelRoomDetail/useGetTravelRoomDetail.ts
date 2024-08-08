import { tentenInstance } from '@constants/axios';
import { useState } from 'react';

export type FamilyRole = 'DAD' | 'MOM' | 'SON' | 'DAUGHTER';

interface TravelRoomData {
  id: number;
  headcount: number;
  maxHeadcount: number;
  roomName: string;
  startDate: string;
  endDate: string;
  users: {
    id: number;
    admin: boolean;
    travelType: string;
    familyRole: FamilyRole;
  }[];
  commandments: string[];
}

const useGetTravelRoomDetail = () => {
  const [travelRoomData, setTravelRoomData] = useState<TravelRoomData | undefined>(undefined);

  const fetchTravelRoomDetail = async (travelRoomId?: string) => {
    try {
      const response = await tentenInstance.get(`/travel-rooms/${travelRoomId}`);

      setTravelRoomData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return { travelRoomData, fetchTravelRoomDetail };
};

export default useGetTravelRoomDetail;
