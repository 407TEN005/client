import styles from './Home.module.scss';
import Button from '@components/Button';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Button size="l">테스트 버튼</Button>
    </div>
  );
};

export default Home;
