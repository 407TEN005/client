import Button from '@components/Button';
import styles from './Loading.module.scss';
import { LoadingLogo } from '@images/index';
import { useNavigate } from 'react-router-dom';
import ROUTES from '@src/constants/routes';

const Loading = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.test);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <LoadingLogo />
        </div>
        <p className={styles.title}>아직 준비 중이에요...</p>

        <Button isActive className={styles.button} onClick={handleClick}>
          서비스 사용해보기
        </Button>
      </div>
    </div>
  );
};

export default Loading;
