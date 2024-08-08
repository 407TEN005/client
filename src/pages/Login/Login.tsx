import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';

import { KakaoLogo, MainLogo } from '@images/index';
import ROUTES from '@constants/routes';
import { useEffect } from 'react';
import authUtil from '@src/utils/authUtil';

const KAKAO_LOGIN_URL = import.meta.env.VITE_KAKAO_LOGIN_URL;

const Login = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    window.location.href = KAKAO_LOGIN_URL;
  };

  const handleNotLoginClick = () => {
    navigate(ROUTES.test);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const roomId = params.get('roomId');

    if (roomId) {
      authUtil.setRoomId({ roomId });
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.mainLogo}>
          <MainLogo />
        </div>
        <div className={styles.buttons}>
          <div className={styles.kakaoButton} onClick={handleLoginClick}>
            <KakaoLogo />
            <p>카카오로 간편 회원가입</p>
          </div>
          <p className={styles.notLogin} onClick={handleNotLoginClick}>
            로그인 없이 사용하기
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
