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
  const [data, setData] = useState<TravelRoomData[]>([]);

  const userId = authUtil.getUserId();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/users/${userId}/travel-rooms`);

        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return { data };
};

export default useGetTravelRoom;
