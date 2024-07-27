import { ACCESS_TOKEN, USER_ID } from '@constants/auth';

const isAuth = () => {
  return !!authUtil.getAccessToken();
};

const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};

const getUserId = () => {
  return localStorage.getItem(USER_ID);
};

const setTokens = ({ accessToken, userId }: { accessToken: string; userId: string }) => {
  localStorage.setItem(ACCESS_TOKEN, accessToken);
  localStorage.setItem(USER_ID, userId);
};

const clearStorage = () => {
  localStorage.clear();
};

const authUtil = {
  isAuth,
  setTokens,
  clearStorage,
  getUserId,
  getAccessToken,
};

export default authUtil;
