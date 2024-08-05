import { tentenInstance } from '@constants/axios';
import { useEffect, useState } from 'react';

interface TravelRoomData {
  id: number;
  headCount: number;
  maxHeadcount: number;
  roomName: string;
  startDate: string;
  endDate: string;
  existCommandments: boolean;
}

const useGetTravelRoom = () => {
  const [travelRoomData, setTravelRoomData] = useState<TravelRoomData[] | undefined>(undefined);

  // useEffect(() => {
  //   const fetchTravelRoomData = async () => {
  //     try {
  //       const response = await tentenInstance.get(`/users/travel-rooms`);

  //       setTravelRoomData(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchTravelRoomData();
  // }, []);

  return { travelRoomData };
};

export default useGetTravelRoom;
