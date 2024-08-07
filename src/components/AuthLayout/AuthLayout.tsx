import authUtil from '@utils/authUtil';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import ROUTES from '@constants/routes';
import { useEffect } from 'react';
import { tentenInstance } from '@src/constants/axios';

const AuthLayout = ({ shouldProtect }: { shouldProtect: boolean }) => {
  const navigate = useNavigate();
  const hasAuth = authUtil.isAuth();

  useEffect(() => {
    const param = new URLSearchParams(window.location.search);

    const roomId = param.get('roomId');

    const joinNewTravelRoom = async () => {
      try {
        await tentenInstance.post(`/travel-rooms/${roomId}`);

        console.log('fetch');
      } catch (error) {
        console.error(error);
      } finally {
        navigate(ROUTES.travel);
      }
    };

    if (hasAuth && roomId) {
      joinNewTravelRoom();
    } else if (hasAuth && !shouldProtect) {
      navigate(ROUTES.travel);
    }
  }, [navigate]);

  if (!hasAuth && shouldProtect) {
    return <Navigate replace={true} to={ROUTES.login} />;
  }

  return <Outlet />;
};

export default AuthLayout;
