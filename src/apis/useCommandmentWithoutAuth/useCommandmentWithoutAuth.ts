import { axiosInstance } from '@src/constants/axios';
import commandmentAtom from '@src/recoil/commandment/atom';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

interface CommandmentsData {
  role: string;
  myTravelType: string;
  answers: string[];
  targetTravelType: string;
}

const useCommandmentWithoutAuth = () => {
  const setCommandment = useSetRecoilState(commandmentAtom);

  const [loading, setLoading] = useState<boolean>(false);

  const createCommandmentWithoutAuth = async (commandmentsData: CommandmentsData) => {
    try {
      setLoading(true);

      const response = await axiosInstance.post(
        '/derive-commandments-without-auth',
        commandmentsData,
      );

      setCommandment(response.data);
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
