import { tentenInstance } from '@constants/axios';

interface CreateRoomData {
  roomName?: string;
  startDate?: string;
  endDate?: string;
  maxHeadcount?: number;
}

const useCreateTravelRoom = (
  setRoomId: React.Dispatch<React.SetStateAction<string | undefined>>,
) => {
  const fetchCreateTravelRoom = async (createRoomData: CreateRoomData) => {
    try {
      const response = await tentenInstance.post(`/travel-rooms`, createRoomData);

      const { roomId } = response.data;

      setRoomId(roomId);
    } catch (error) {
      console.error(error);
    }
  };

  return { fetchCreateTravelRoom };
};

export default useCreateTravelRoom;
