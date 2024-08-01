import { AnalysisImg } from '@images/index';
import styles from './Analysis.module.scss';
import LoadingSpinner from '@components/LoadingSpinner';

const Analysis = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>여행 10계명 생성 시작!</div>
      <div className={styles.description}>
        <p className={styles.subTitle}>AI가 모든 가족 구성원의 성향을 반영해</p>
        <p className={styles.subTitle}>맞춤형 10계명을 생성하고 있어요</p>
        <div className={styles.statement}>예상 소요시간 40초 이내</div>
      </div>
      <div className={styles.imgWrapper}>
        <AnalysisImg />
      </div>
      <LoadingSpinner width={54} height={54} />
    </div>
  );
};

export default Analysis;
