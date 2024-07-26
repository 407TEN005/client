import { ACCESS_TOKEN } from '@constants/auth';

const isAuth = () => {
  return !!authUtil.getAccessToken();
};

const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};

const setTokens = ({ accessToken }: { accessToken: string }) => {
  localStorage.setItem(ACCESS_TOKEN, accessToken);
};

const clearStorage = () => {
  localStorage.clear();
};

const authUtil = {
  isAuth,
  setTokens,
  clearStorage,
  getAccessToken,
};

export default authUtil;
