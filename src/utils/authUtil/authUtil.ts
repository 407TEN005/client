import { ACCESS_TOKEN, ROOM_ID } from '@constants/auth';

const isAuth = () => {
  return !!authUtil.getAccessToken();
};

const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};

const getRoomId = () => {
  return localStorage.getItem(ROOM_ID);
};

const setTokens = ({ accessToken }: { accessToken: string }) => {
  localStorage.setItem(ACCESS_TOKEN, accessToken);
};

const setRoomId = ({ roomId }: { roomId: string }) => {
  localStorage.setItem(ROOM_ID, roomId);
};

const clearRoomId = () => {
  localStorage.removeItem(ROOM_ID);
};

const clearStorage = () => {
  localStorage.clear();
};

const authUtil = {
  isAuth,
  setTokens,
  setRoomId,
  clearStorage,
  getRoomId,
  getAccessToken,
  clearRoomId,
};

export default authUtil;
