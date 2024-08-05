import { tentenInstance } from '@constants/axios';
import { useState } from 'react';

interface TravelRoomData {
  id: number;
  headCount: number;
  maxHeadCount: number;
  roomName: string;
  startDate: string;
  endDate: string;
  users: {
    id: number;
    admin: boolean;
    travelType: string;
  }[];
  commandments: string[];
}

const useGetTravelRoomDetail = () => {
  const [travelRoomData, setTravelRoomData] = useState<TravelRoomData | undefined>(undefined);

  const fetchTravelRoomDetail = async (travelRoomId?: string) => {
    try {
      const response = await tentenInstance.get(`/travel-rooms/${travelRoomId}`);

      console.log('response : ', response.data);

      setTravelRoomData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return { travelRoomData, fetchTravelRoomDetail };
};

export default useGetTravelRoomDetail;
