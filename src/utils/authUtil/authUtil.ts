import { ACCESS_TOKEN, ROOM_ID, USER_ID } from '@constants/auth';

const isAuth = () => {
  return !!authUtil.getAccessToken();
};

const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};

const getUserId = () => {
  return localStorage.getItem(USER_ID);
};

const setTokens = ({ accessToken }: { accessToken: string }) => {
  localStorage.setItem(ACCESS_TOKEN, accessToken);
};

const setRoomId = ({ roomId }: { roomId: string }) => {
  localStorage.setItem(ROOM_ID, roomId);
};

const clearStorage = () => {
  localStorage.clear();
};

const authUtil = {
  isAuth,
  setTokens,
  setRoomId,
  clearStorage,
  getUserId,
  getAccessToken,
};

export default authUtil;
