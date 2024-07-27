import Button from '../Button';
import styles from './Header.module.scss';

const Header = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className={styles.wrapper}>
      <Button variant="outlined" size="m" onClick={onBack}>
        1
      </Button>
      <Button variant="outlined" size="m">
        2
      </Button>
    </div>
  );
};

export default Header;
