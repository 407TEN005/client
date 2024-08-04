import { tentenInstance } from '@constants/axios';
import ROUTES from '@constants/routes';
import authUtil from '@utils/authUtil';
import { useNavigate } from 'react-router-dom';

interface CreateRoomData {
  roomName?: string;
  startDate?: string;
  endDate?: string;
  maxHeadCount?: number;
}

const useCreateTravelRoom = () => {
  const navigate = useNavigate();

  const userId = authUtil.getUserId();

  const fetchCreateTravelRoom = async (createRoomData: CreateRoomData) => {
    try {
      await tentenInstance.post(`/users/${userId}/travel-rooms`, createRoomData);
    } catch (error) {
      console.error(error);
    } finally {
      navigate(ROUTES.home);
    }
  };

  return { fetchCreateTravelRoom };
};

export default useCreateTravelRoom;
