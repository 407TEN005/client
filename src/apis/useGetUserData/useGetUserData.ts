import { tentenInstance } from '@constants/axios';
import userDataAtom from '@recoil/userData';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

const useGetUserData = () => {
  const [userData, setUserData] = useRecoilState(userDataAtom);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await tentenInstance.get('/users/current');

        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return { userData };
};

export default useGetUserData;
