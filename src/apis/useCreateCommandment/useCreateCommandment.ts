import { tentenInstance } from '@src/constants/axios';
import { useState } from 'react';

const useCreateCommandment = () => {
  const [commandment, setCommandment] = useState<any>();

  const createCommandment = async (roomId?: string) => {
    try {
      const response = await tentenInstance.get(`/travel-rooms/${roomId}/commandments`);

      console.log(response);

      setCommandment(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return { commandment, createCommandment };
};

export default useCreateCommandment;
