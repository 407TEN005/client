import { axiosInstance } from '@src/constants/axios';
import { useState } from 'react';

const useGetUserData = () => {
  const [data, setData] = useState();

  const fetchUserData = async () => {
    try {
      const response = await axiosInstance.get('/users/current');

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

  return { data, fetchUserData };
};

export default useGetUserData;
