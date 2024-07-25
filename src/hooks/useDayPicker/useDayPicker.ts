import { useState } from 'react';

const useDayPicker = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleDateChange = (value: Date) => {
    setDate(value);
  };

  return {
    date,
    handleDateChange,
  };
};

export default useDayPicker;
