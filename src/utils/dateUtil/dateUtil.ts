import { differenceInDays, format } from 'date-fns';

export const today = format(new Date(), 'yyyy-MM-dd');

export const parsedStartedDate = (startDate: string) => {
  return differenceInDays(startDate, today);
};

export const dday = (startDate: string) => {
  const parsedDate = parsedStartedDate(startDate);

  return parsedDate === 0 ? 'D-Day' : parsedDate < 0 ? `D+${-parsedDate}` : `D-${parsedDate}`;
};
