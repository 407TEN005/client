import axios from 'axios';

const CLOVA_API_URL = import.meta.env.VITE_CLOVA_API_URL;

const NCP_CLOVASTUDIO_API_KEY = import.meta.env.VITE_NCP_CLOVASTUDIO_API_KEY;
const NCP_APIGW_API_KEY = import.meta.env.VITE_NCP_APIGW_API_KEY;
const NCP_CLOVASTUDIO_REQUEST_ID = import.meta.env.VITE_NCP_CLOVASTUDIO_REQUEST_ID;

const useClova = () => {
  const callClovaApi = async (text?: string) => {
    try {
      const response = await axios.post(
        CLOVA_API_URL,
        {
          text: text,
        },
        {
          headers: {
            'X-NCP-CLOVASTUDIO-API-KEY': NCP_CLOVASTUDIO_API_KEY,
            'X-NCP-APIGW-API-KEY': NCP_APIGW_API_KEY,
            'X-NCP-CLOVASTUDIO-REQUEST-ID': NCP_CLOVASTUDIO_REQUEST_ID,
            'Content-Type': 'application/json',
            Accept: 'text/event-stream',
          },
        },
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return { callClovaApi };
};

export default useClova;
