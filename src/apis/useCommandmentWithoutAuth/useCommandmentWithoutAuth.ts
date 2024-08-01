import { axiosInstance } from '@src/constants/axios';
import { useState } from 'react';

interface CommandmentsData {
  role: string;
  myTravelType: string;
  answers: string[];
  targetTravelType: string;
}

const useCommandmentWithoutAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const createCommandmentWithoutAuth = async (commandmentsData: CommandmentsData) => {
    try {
      setLoading(true);

      const response = await axiosInstance.post(
        '/derive-commandments-without-auth',
        commandmentsData,
      );

      console.log('response : ', response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    createCommandmentWithoutAuth,
  };
};

export default useCommandmentWithoutAuth;
