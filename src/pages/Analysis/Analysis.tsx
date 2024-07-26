import styles from './Analysis.module.scss';
import LoadingSpinner from '@src/components/LoadingSpinner';

const Analysis = () => {
  return (
    <div>
      <div></div>
      <div></div>
      <div>
        <div className={styles.img}></div>
        <LoadingSpinner width={54} height={54} />
      </div>
    </div>
  );
};

export default Analysis;
