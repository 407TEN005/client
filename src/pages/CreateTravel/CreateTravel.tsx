import styles from './CreateTravel.module.scss';
import Input from '@components/Input';
import useInput from '@hooks/useInput';

import { format } from 'date-fns';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const TRAVEL_NAME_PLACEHOLDER = 'ex. 우리 가족 첫 일본 여행';
const TRAVEL_NAME_ERROR_MESSAGE = '최대 20자까지 입력 가능해요';

const CreateTravel = () => {
  const {
    data: name,
    errorMessage: nameErrorMessage,
    handleChange: handleNameChange,
  } = useInput(TRAVEL_NAME_ERROR_MESSAGE);

  return (
    <div className={styles.wrapper}>
      <Input
        id="travelName"
        label="어떤 여행인가요?"
        value={name}
        errorMessage={nameErrorMessage}
        placeholder={TRAVEL_NAME_PLACEHOLDER}
        isRequired
        isError={Boolean(nameErrorMessage)}
        onChange={(e) => handleNameChange(e.target.value)}
      />
      {/* <Input
        label="함께하는 가족은 몇 명인가요?"
        isRequired
        // isError
        ErrorMessage="에러메시지에러메시지에러메시지"
        placeholder="ex. 4"
      /> */}
      <label className={styles.label}>
        여행 일정을 입력해 주세요. <span>*</span>
      </label>
      <div className={styles.dayPickerWrapper}>
        <DayPickerInput
          dayPickerProps={{
            locale: 'ko',
          }}
          inputProps={{
            className: `${styles.input} ${styles.dayPickerInput}`,
          }}
          onDayChange={(day) => console.log(day)}
          placeholder={`${format(new Date(), 'yyyy-MM-dd')}`}
        />
        <p> ~ </p>
        <DayPickerInput
          inputProps={{
            className: `${styles.input} ${styles.dayPickerInput}`,
          }}
          onDayChange={(day) => console.log(day)}
          classNames={{
            overlayWrapper: styles.dayPicker,
            container: '',
            overlay: '',
          }}
          placeholder={`${format(new Date(), 'yyyy-MM-dd')}`}
        />
      </div>
    </div>
  );
};

export default CreateTravel;
