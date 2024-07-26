import styles from './Analysis.module.scss';
import LoadingSpinner from '@src/components/LoadingSpinner';

const Analysis = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>분석중</div>
      <div className={styles.description}>
        나는 어떤 여행 성향을 가지고 있을까요? <br /> 10계명에 반영될 특징들을 파악하고 있어요...
      </div>
      <div>
        <div className={styles.imgWrapper}>
          <div className={styles.img}></div>
        </div>
        <LoadingSpinner width={54} height={54} />
      </div>
    </div>
  );
};

export default Analysis;
