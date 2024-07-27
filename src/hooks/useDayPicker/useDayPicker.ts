import { format } from 'date-fns';
import { useState } from 'react';

const useDayPicker = () => {
  const [date, setDate] = useState<string | undefined>(undefined);

  const handleDateChange = (value: Date) => {
    setDate(format(value, 'yyyy-MM-dd'));
  };

  return {
    date,
    handleDateChange,
  };
};

export default useDayPicker;
