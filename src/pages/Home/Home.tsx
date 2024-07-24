import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';
import Button from '@components/Button';

const Home = () => {
  const navigate = useNavigate();

  const handleCreateTravel = () => {
    navigate('/create');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}></div>
      <p className={styles.title}>가족 여행을 계획중이신가요?</p>
      <p className={styles.subTitle}>서로 다른 여행 성향을 파악하고</p>
      <p className={styles.subTitle}>우리 가족만의 여행 10계명을 생성해 보세요!</p>
      <Button variant="outlined" size="m" onClick={handleCreateTravel}>
        여행방 만들기
      </Button>
    </div>
  );
};

export default Home;
