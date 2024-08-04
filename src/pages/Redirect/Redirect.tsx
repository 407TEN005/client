import { tentenInstance } from '@src/constants/axios';
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

        console.log('travelTypes : ', travelTypes);

        // if (travelTypes && travelTypes.length < 1) {
        //   console.log(2);

        //   setData(travelTypes);
        // }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();

    // window.location.href = HOME_URL;
  }, [navigate]);

  return <></>;
};

export default Redirect;
