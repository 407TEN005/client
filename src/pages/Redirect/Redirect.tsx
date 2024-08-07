import { tentenInstance } from '@constants/axios';
import ROUTES from '@constants/routes';
import authUtil from '@utils/authUtil';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HOME_URL = import.meta.env.VITE_HOME_URL;

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const accessToken = params.get('accessToken');

    const roomId = authUtil.getRoomId();

    console.log('roomId : 2', roomId);

    if (accessToken) {
      authUtil.setTokens({ accessToken });
    }

    const fetchUserData = async () => {
      try {
        const response = await tentenInstance.get('/users/current');

        const { status } = response.data;

        if (status === 'NEW') {
          window.location.href = `${HOME_URL}${ROUTES.authTest}`;
        } else {
          window.location.href = `${HOME_URL}${ROUTES.travel}`;
        }
      } catch (error) {
        console.error(error);
      }
    };

    const joinNewTravelRoom = async () => {
      try {
        await tentenInstance.post(`/travel-rooms/${roomId}`);

        console.log('fetch');
      } catch (error) {
        console.error(error);
      }
    };

    if (roomId) {
      joinNewTravelRoom();
    }

    fetchUserData();
  }, [navigate]);

  return <></>;
};

export default Redirect;
