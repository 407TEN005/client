import { axiosInstance } from '@src/constants/axios';
import authUtil from '@src/utils/authUtil';
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
  const [travelRoomData, setTravelRoomData] = useState<TravelRoomData[]>([]);

  const userId = authUtil.getUserId();

  useEffect(() => {
    const fetchTravelRoomData = async () => {
      try {
        const response = await axiosInstance.get(`/users/${userId}/travel-rooms`);

        setTravelRoomData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTravelRoomData();
  }, []);

  return { travelRoomData };
};

export default useGetTravelRoom;
