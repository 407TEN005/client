import styles from './Commandment.module.scss';
import Button from '@components/Button';

const Commandment = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>00가족의 10계명</div>
      <div className={styles.subTitle}>2024.07.24 (수) 17:30</div>
      <div className={styles.commandmentWrapper}>
        <div className={styles.commandmentTitle}>이번 여행의 10계명</div>
        <div className={styles.line}></div>
        <div className={styles.commandmentItem}>즉흥적인 아빠는 계획이 있는 아들과 균형!</div>
        <div>즉흥적인 아빠는 계획이 있는 아들과 균형!</div>
        <div>즉흥적인 아빠는 계획이 있는 아들과 균형!</div>
        <div>즉흥적인 아빠는 계획이 있는 아들과 균형!</div>
        <div>즉흥적인 아빠는 계획이 있는 아들과 균형!</div>
        <div>즉흥적인 아빠는 계획이 있는 아들과 균형!</div>
        <div>즉흥적인 아빠는 계획이 있는 아들과 균형!</div>
        <div>즉흥적인 아빠는 계획이 있는 아들과 균형!</div>
        <div>즉흥적인 아빠는 계획이 있는 아들과 균형!</div>
        <div>즉흥적인 아빠는 계획이 있는 아들과 균형!</div>
      </div>
      <Button variant="outlined" size="xl">
        재생성 하기
      </Button>
      <Button variant="outlined" size="xl">
        공유버튼
      </Button>
    </div>
  );
};

export default Commandment;
