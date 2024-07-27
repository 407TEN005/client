import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { Exit, LeftArrow } from '@images/index';

const Header = ({ onBack }: { onBack: () => void }) => {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate(-1);
  };

  return (
    <div className={styles.wrapper}>
      <div onClick={onBack}>
        <LeftArrow />
      </div>
      <div onClick={handleExit}>
        <Exit />
      </div>
    </div>
  );
};

export default Header;
