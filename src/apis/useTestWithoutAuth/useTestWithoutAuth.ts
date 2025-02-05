import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import ROUTES from '@constants/routes';
import { axiosInstance } from '@constants/axios';
import testResponseAtom from '@recoil/testResponse';

interface AnswerData {
  familyRole: string;
  answers: string[];
}

const useTestWithoutAuth = () => {
  const navigate = useNavigate();

  const setTestResponseData = useSetRecoilState(testResponseAtom);

  const createTestWithoutAuth = async (answerData: AnswerData) => {
    try {
      const response = await axiosInstance.post(`/test-without-auth`, answerData);

      setTestResponseData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      navigate(ROUTES.testResult);
    }
  };

  return { createTestWithoutAuth };
};

export default useTestWithoutAuth;
