import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import ROUTES from '@constants/routes';
import { tentenInstance } from '@constants/axios';
import testResponseAtom from '@recoil/testResponse';

interface AnswerData {
  familyRole: string;
  answers: string[];
}

const useTestWithAuth = () => {
  const navigate = useNavigate();

  const setTestResponseData = useSetRecoilState(testResponseAtom);

  const createTestWithAuth = async (answerData: AnswerData) => {
    try {
      const response = await tentenInstance.post(`/tests`, answerData);

      setTestResponseData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      navigate(ROUTES.authTestResult);
    }
  };

  return { createTestWithAuth };
};

export default useTestWithAuth;
