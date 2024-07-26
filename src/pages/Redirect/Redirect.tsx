import authUtil from '@utils/authUtil';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HOME_URL = import.meta.env.VITE_HOME_URL;

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const accessToken = params.get('accessToken');

    if (accessToken) {
      authUtil.setTokens({ accessToken });
    }

    window.location.href = HOME_URL;
  }, [navigate]);

  return <></>;
};

export default Redirect;
