import { tentenInstance } from '@src/constants/axios';
import ROUTES from '@src/constants/routes';
import authUtil from '@utils/authUtil';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HOME_URL = import.meta.env.VITE_HOME_URL;

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const accessToken = params.get('accessToken');
    const userId = params.get('userId');

    if (accessToken && userId) {
      authUtil.setTokens({ accessToken, userId });
    }

    const fetchUserData = async () => {
      try {
        const response = await tentenInstance.get('/users/current');

        const { travelTypes } = response.data;

        if (travelTypes && travelTypes.length < 1) {
          window.location.href = `${HOME_URL}${ROUTES.authTest}`;
        } else {
          window.location.href = `${HOME_URL}${ROUTES.home}`;
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [navigate]);

  return <></>;
};

export default Redirect;
