import ROUTES from '@constants/routes';
import authUtil from '@utils/authUtil';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = () => {
  const navigate = useNavigate();

  console.log(1);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    console.log(params);

    const accessToken = params.get('accessToken');

    if (accessToken) {
      authUtil.setTokens({ accessToken });
    }

    navigate(ROUTES.home);
  }, [navigate]);

  return <></>;
};

export default Redirect;
