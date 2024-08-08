import { useEffect, useState } from 'react';

import styles from './CreateTravel.module.scss';

import Input from '@components/Input';
import Button from '@components/Button';
import useDayPicker from '@hooks/useDayPicker';
import useCreateTravelRoom from '@apis/useCreateTravelRoom';

import { addDays, format } from 'date-fns';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { LeftArrow } from '@images/index';
import { useNavigate } from 'react-router-dom';
import ROUTES from '@constants/routes';
import InviteUser from '@components/InviteUser';

// ? 여행 이름 constant
const TRAVEL_ROOM_NAME_PLACEHOLDER = 'ex. 우리 가족 첫 일본 여행';
const TRAVEL_ROOM_NAME_ERROR_MESSAGE = '최대 20자까지 입력 가능해요';

// ? 여행 인원 수 constant
const TRAVEL_FAMILY_COUNT_ERROR_MESSAGE = '2 ~ 4 사이의 숫자만 입력 가능해요.';
const TRAVEL_FAMILY_COUNT_PLACEHOLDER = 'ex. 4';

// ? 여행 날짜 constant
const TRAVEL_DATE_ERROR_MESSAGE = '가는 날 이후 날짜를 선택해주세요.';

const CreateTravel = () => {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState<string | undefined>(undefined);

  const [roomName, setRoomName] = useState<string | undefined>(undefined);
  const [roomNameErrorMessage, setRoomNameErrorMessage] = useState<string | undefined>(undefined);

  const [count, setCount] = useState<string | undefined>(undefined);
  const [countErrorMessage, setCountErrorMessage] = useState<string | undefined>(undefined);

  const { date: startDate, handleDateChange: handleStartDateChange } = useDayPicker();
  const { date: endDate, handleDateChange: handleEndDateChange } = useDayPicker();
  const [dateErrorMessage, setDateErrorMessage] = useState<string | undefined>();

  const { fetchCreateTravelRoom } = useCreateTravelRoom(setRoomId);

  const handleRoomNameChange = (value: string) => {
    setRoomName(value);
  };

  const handleCountChange = (value: string) => {
    setCount(value);
  };

  const handleButtonClick = async () => {
    await fetchCreateTravelRoom({
      roomName,
      startDate,
      endDate,
      maxHeadcount: Number(count),
    });
  };

  const handleGoHome = () => {
    navigate(ROUTES.travel);
  };

  const handleGoTravelRoom = () => {
    navigate(`/travel/${roomId}`);
  };

  const isButtonDisabled =
    !(roomName && count && startDate && endDate) ||
    !!(roomNameErrorMessage || countErrorMessage || dateErrorMessage);

  useEffect(() => {
    if (roomName && roomName.length > 20) {
      setRoomNameErrorMessage(TRAVEL_ROOM_NAME_ERROR_MESSAGE);
    } else {
      setRoomNameErrorMessage(undefined);
    }
  }, [roomName]);

  useEffect(() => {
    if (startDate && endDate && startDate > endDate) {
      setDateErrorMessage(TRAVEL_DATE_ERROR_MESSAGE);
    } else {
      setDateErrorMessage(undefined);
    }
  }, [startDate, endDate]);

  useEffect(() => {
    if ((count && isNaN(Number(count))) || (count && (Number(count) < 2 || Number(count) > 4))) {
      setCountErrorMessage(TRAVEL_FAMILY_COUNT_ERROR_MESSAGE);
    } else {
      setCountErrorMessage(undefined);
    }
  }, [count]);

  if (roomId) {
    return (
      <InviteUser
        roomId={roomId}
        handleGoTravelRoom={handleGoTravelRoom}
        roomName={roomName}
        startDate={startDate}
        endDate={endDate}
        maxHeadcount={count}
      />
    );
  }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.goBack} onClick={handleGoHome}>
          <LeftArrow />
        </div>
        <p>새로운 여행방 만들기</p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.inputWrapper}>
          <Input
            id="travelRoomName"
            label="어떤 여행인가요?"
            value={roomName}
            errorMessage={roomNameErrorMessage}
            placeholder={TRAVEL_ROOM_NAME_PLACEHOLDER}
            isRequired
            isError={Boolean(roomNameErrorMessage)}
            onChange={(e) => handleRoomNameChange(e.target.value)}
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
            subLabel="현재는 정확한 결과를 위해 2명 추천, 최대 4인까지 가능해요"
            isRequired
            value={count}
            errorMessage={countErrorMessage}
            placeholder={TRAVEL_FAMILY_COUNT_PLACEHOLDER}
            isError={Boolean(countErrorMessage)}
            onChange={(e) => handleCountChange(e.target.value)}
          />
        </div>

        <Button
          className={styles.createButton}
          isActive
          disabled={isButtonDisabled}
          onClick={handleButtonClick}
        >
          생성하기
        </Button>
      </div>
    </>
  );
};

export default CreateTravel;
