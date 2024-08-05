import { TooltipArrow } from '@images/index';
import styles from './Tooltip.module.scss';

const Tooltip = ({ content }: { content: string }) => {
  return (
    <div className={styles.wrapper}>
      <div aria-label="tooltipContent" className={styles.tooltip}>
        <div className={styles.content}>{content}</div>
        <TooltipArrow className={styles.tooltipArrow} />
      </div>
    </div>
  );
};

export default Tooltip;
