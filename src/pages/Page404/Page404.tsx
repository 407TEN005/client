import { Error404 } from '@images/index';
import styles from './Page404.module.scss';
import Button from '@components/Button';
import { useNavigate } from 'react-router-dom';
import ROUTES from '@constants/routes';

const Page404 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.travel);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <Error404 />
        </div>
        <p className={styles.title}>요청하신 페이지를 찾을 수 없습니다.</p>
        <p className={styles.subTitle}>페이지의 주소가 잘못 입력되었거나,</p>
        <p className={styles.subTitle}>주소가 변경 혹은 삭제되어 접근이 불가합니다.</p>
        <Button isActive className={styles.button} onClick={handleClick}>
          홈으로 돌아가기
        </Button>
      </div>
    </div>
  );
};

export default Page404;
