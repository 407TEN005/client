import styles from './CreateTravel.module.scss';
import Input from '@components/Input';

// todo : 일정 라이브러리 찾아보기

const CreateTravel = () => {
  return (
    <div className={styles.wrapper}>
      <Input
        label="어떤 여행인가요?"
        isRequired
        // isError
        ErrorMessage="에러메시지에러메시지에러메시지"
        placeholder="ex. 우리 가족 첫 일본 여행"
      />
      <Input
        label="함께하는 가족은 몇 명인가요?"
        isRequired
        // isError
        ErrorMessage="에러메시지에러메시지에러메시지"
        placeholder="ex. 4"
      />
    </div>
  );
};

export default CreateTravel;
