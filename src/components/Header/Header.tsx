import Button from '../Button';
import styles from './Header.module.scss';

// todo : 버튼 자리에 이미지 들어갈 예정

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Button variant="outlined" size="m">
        1
      </Button>
      <Button variant="outlined" size="m">
        2
      </Button>
    </div>
  );
};

export default Header;
