import { useEffect, useState } from 'react';

import styles from './CreateTravel.module.scss';

import Input from '@components/Input';
import Button from '@components/Button';
import useDayPicker from '@hooks/useDayPicker';

import { addDays, format } from 'date-fns';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

// ? 여행 이름 constant
const TRAVEL_NAME_PLACEHOLDER = 'ex. 우리 가족 첫 일본 여행';
const TRAVEL_NAME_ERROR_MESSAGE = '최대 20자까지 입력 가능해요';

// ? 여행 인원 수 constant
const TRAVEL_FAMILY_COUNT_ERROR_MESSAGE = '숫자만 입력 가능해요.';
const TRAVEL_FAMILY_COUNT_PLACEHOLDER = 'ex. 4';

// ? 여행 날짜 constant
const TRAVEL_DATE_ERROR_MESSAGE = '가는 날 이후 날짜를 선택해주세요.';

const CreateTravel = () => {
  const [name, setName] = useState<string | undefined>(undefined);
  const [nameErrorMessage, setNameErrorMessage] = useState<string | undefined>(undefined);

  const [count, setCount] = useState<string | undefined>(undefined);
  const [countErrorMessage, setCountErrorMessage] = useState<string | undefined>(undefined);

  const { date: startDate, handleDateChange: handleStartDateChange } = useDayPicker();
  const { date: endDate, handleDateChange: handleEndDateChange } = useDayPicker();
  const [dateErrorMessage, setDateErrorMessage] = useState<string | undefined>();

  const handleNameChange = (value: string) => {
    setName(value);
  };

  const handleCountChange = (value: string) => {
    setCount(value);
  };

  const isButtonDisabled =
    !(name && count && startDate && endDate) ||
    !!(nameErrorMessage || countErrorMessage || dateErrorMessage);

  useEffect(() => {
    if (name && name.length > 20) {
      setNameErrorMessage(TRAVEL_NAME_ERROR_MESSAGE);
    } else {
      setNameErrorMessage(undefined);
    }
  }, [name]);

  useEffect(() => {
    if (startDate && endDate && startDate > endDate) {
      setDateErrorMessage(TRAVEL_DATE_ERROR_MESSAGE);
    } else {
      setDateErrorMessage(undefined);
    }
  }, [startDate, endDate]);

  useEffect(() => {
    if (count && isNaN(Number(count))) {
      setCountErrorMessage(TRAVEL_FAMILY_COUNT_ERROR_MESSAGE);
    } else {
      setCountErrorMessage(undefined);
    }
  }, [count]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
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

        <label className={styles.label}>
          여행 일정을 입력해 주세요. <span>*</span>
        </label>

        <div className={styles.dayPickerWrapper}>
          <div className={styles.dayPickerInputWrapper}>
            <DayPickerInput
              value={startDate && format(startDate, 'yyyy.MM.dd')}
              onDayChange={handleStartDateChange}
              placeholder={`${format(new Date(), 'yyyy.MM.dd')}`}
              inputProps={{
                className: `${styles.input} ${styles.dayPickerInput}`,
                readOnly: true,
              }}
            />
            <p> ~ </p>
            <DayPickerInput
              value={endDate && format(endDate, 'yyyy.MM.dd')}
              onDayChange={handleEndDateChange}
              placeholder={`${format(addDays(new Date(), 3), 'yyyy.MM.dd')}`}
              inputProps={{
                className: `${styles.input} ${styles.dayPickerInput}`,
                readOnly: true,
              }}
              classNames={{
                overlayWrapper: styles.dayPicker,
                container: '',
                overlay: '',
              }}
            />
          </div>
          {dateErrorMessage && <p className={styles.dateErrorMessage}>{dateErrorMessage}</p>}
        </div>

        <Input
          id="travelCount"
          label="함께하는 가족은 몇 명인가요?"
          subLabel="본인을 포함한 총 인원수를 입력해주세요!"
          isRequired
          value={count}
          errorMessage={countErrorMessage}
          placeholder={TRAVEL_FAMILY_COUNT_PLACEHOLDER}
          isError={Boolean(countErrorMessage)}
          onChange={(e) => handleCountChange(e.target.value)}
        />
      </div>

      <Button className={styles.createButton} isActive disabled={isButtonDisabled}>
        생성하기
      </Button>
    </div>
  );
};

export default CreateTravel;
