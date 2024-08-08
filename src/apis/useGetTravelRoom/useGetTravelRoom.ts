import { tentenInstance } from '@constants/axios';
import authUtil from '@utils/authUtil';
import { useEffect, useState } from 'react';

interface TravelRoomData {
  id: number;
  headcount: number;
  maxHeadcount: number;
  roomName: string;
  startDate: string;
  endDate: string;
  existCommandments: boolean;
  admin: boolean;
}

const useGetTravelRoom = () => {
  const [travelRoomData, setTravelRoomData] = useState<TravelRoomData[] | undefined>(undefined);

  useEffect(() => {
    const roomId = authUtil.getRoomId();

    const joinNewTravelRoom = async () => {
      try {
        await tentenInstance.post(`/travel-rooms/${roomId}`);
      } catch (error) {
        console.error(error);
      } finally {
        try {
          const response = await tentenInstance.get(`/travel-rooms`);

          setTravelRoomData(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    const fetchTravelRoomData = async () => {
      try {
        const response = await tentenInstance.get(`/travel-rooms`);

        setTravelRoomData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (roomId) {
      joinNewTravelRoom();
    } else {
      fetchTravelRoomData();
    }
  }, []);

  return { travelRoomData };
};

export default useGetTravelRoom;
