import { tentenInstance } from '@src/constants/axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useCreateCommandment = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const createCommandment = async (roomId?: string) => {
    setIsLoading(true);

    try {
      await tentenInstance.get(`/travel-rooms/${roomId}/commandments`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      navigate(`/travel/${roomId}/commandment`);
    }
  };

  return { isLoading, createCommandment };
};

export default useCreateCommandment;
