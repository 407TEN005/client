import authUtil from '@utils/authUtil';
import { Navigate, Outlet } from 'react-router-dom';
import ROUTES from '@constants/routes';

const AuthLayout = ({ shouldProtect }: { shouldProtect: boolean }) => {
  const hasAuth = authUtil.isAuth();

  console.log(hasAuth);

  if (!hasAuth && shouldProtect) {
    return <Navigate replace={true} to={ROUTES.login} />;
  }

  if (hasAuth && !shouldProtect) {
    return <Navigate replace={true} to={ROUTES.home} />;
  }

  return <Outlet />;
};

export default AuthLayout;
