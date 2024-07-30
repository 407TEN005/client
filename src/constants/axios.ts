import axios from 'axios';
// import authUtil from '@utils/authUtil';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const axiosInstance = axios.create({ baseURL: BASE_URL });

// ? 임시 주석 처리
// axiosInstance.interceptors.request.use((config) => {
//   // 토큰을 로컬 스토리지 또는 다른 방법으로 가져옵니다.
//   const accessToken = authUtil.getAccessToken();

//   if (accessToken) {
//     // 요청 헤더에 토큰 추가
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }

//   return config;
// });
