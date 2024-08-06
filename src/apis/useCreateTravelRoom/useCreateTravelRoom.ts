import { tentenInstance } from '@constants/axios';
import ROUTES from '@constants/routes';
import { useNavigate } from 'react-router-dom';

interface CreateRoomData {
  roomName?: string;
  startDate?: string;
  endDate?: string;
  maxHeadCount?: number;
}

const useCreateTravelRoom = () => {
  const navigate = useNavigate();

  const fetchCreateTravelRoom = async (createRoomData: CreateRoomData) => {
    try {
      const response = await tentenInstance.post(`/travel-rooms`, createRoomData);

      console.log('response :', response.data);
    } catch (error) {
      console.error(error);
    } finally {
      navigate(ROUTES.travel);
    }
  };

  return { fetchCreateTravelRoom };
};

export default useCreateTravelRoom;
