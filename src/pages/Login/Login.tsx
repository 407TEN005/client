import styles from './Login.module.scss';

import { KakaoLogo, MainLogo } from '@images/index';

const KAKAO_LOGIN_URL = import.meta.env.VITE_KAKAO_LOGIN_URL;

const Login = () => {
  console.log(KAKAO_LOGIN_URL);

  const handleClick = () => {
    window.open(KAKAO_LOGIN_URL);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.mainLogo}>
          <MainLogo />
        </div>
        <div className={styles.buttons}>
          <div className={styles.kakaoButton} onClick={handleClick}>
            <KakaoLogo />
            <p>카카오로 간편 회원가입</p>
          </div>
          <p className={styles.notLogin}>로그인 없이 사용하기</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
