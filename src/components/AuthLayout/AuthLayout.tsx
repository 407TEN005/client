import authUtil from '@utils/authUtil';
import { Navigate, Outlet, useNavigate, useParams } from 'react-router-dom';
import ROUTES from '@constants/routes';
import { useEffect } from 'react';

const AuthLayout = ({ shouldProtect }: { shouldProtect: boolean }) => {
  const navigate = useNavigate();

  const { pathname } = useParams();

  console.log('pathname : ', pathname);

  const hasAuth = authUtil.isAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const roomId = params.get('roomId');

    console.log('roomId : ', roomId);

    if (roomId) {
      authUtil.setRoomId({ roomId });
    }
  }, [navigate]);

  if (!hasAuth && shouldProtect) {
    return <Navigate replace={true} to={ROUTES.login} />;
  }

  if (hasAuth && !shouldProtect) {
    return <Navigate replace={true} to={ROUTES.travel} />;
  }

  return <Outlet />;
};

export default AuthLayout;
