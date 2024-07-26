import { AnalysisImg } from '@src/assets/images';
import styles from './Analysis.module.scss';
import LoadingSpinner from '@src/components/LoadingSpinner';

interface AnalysisProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  timeStatement?: boolean;
  imageSrc?: string;
}

const Analysis = ({
  title = '분석중',
  description = '나는 어떤 여행 성향을 가지고 있을까요? \n 10계명에 반영될 특징들을 파악하고 있어요...',
  timeStatement = false,
}: AnalysisProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={`${styles.description} ${timeStatement ? styles.withStatement : ''}`}>
        {description}
      </div>
      {timeStatement && <div className={styles.statement}>예상 소요시간 40초 이내</div>}
      <div>
        <div className={styles.imgWrapper}>
          <AnalysisImg className={styles.img} />
        </div>
        <LoadingSpinner width={54} height={54} />
      </div>
    </div>
  );
};

export default Analysis;
