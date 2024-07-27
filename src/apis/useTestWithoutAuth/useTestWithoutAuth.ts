import { axiosInstance } from '@constants/axios';
import testResponseAtom from '@recoil/testResponse';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

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

      console.log('response : ', response.data);
      setTestResponseData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      navigate('/testResult');
    }
  };

  return { createTestWithoutAuth };
};

export default useTestWithoutAuth;
