import authUtil from '@utils/authUtil';
import { Navigate, Outlet } from 'react-router-dom';
import ROUTES from '@constants/routes';
import useGetUserData from '@src/apis/useGetUserData';
import { useEffect } from 'react';

const AuthLayout = ({ shouldProtect }: { shouldProtect: boolean }) => {
  const { data, fetchUserData } = useGetUserData();

  const hasAuth = authUtil.isAuth();

  useEffect(() => {
    fetchUserData();
  }, []);

  if (!hasAuth && shouldProtect) {
    return <Navigate replace={true} to={ROUTES.login} />;
  }

  if (hasAuth && !shouldProtect) {
    console.log(data);

    return <Navigate replace={true} to={ROUTES.home} />;
  }

  return <Outlet />;
};

export default AuthLayout;
