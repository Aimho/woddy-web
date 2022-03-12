import { useCallback } from "react";
import { addDays, format, startOfWeek } from "date-fns";
import { ko } from "date-fns/locale";

import CalendarBodyPresenter from "./CalendarBodyPresenter";

interface IProps {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  markDays?: string[];
}

const CalendarBodyContainer = ({ date, setDate, markDays }: IProps) => {
  const startOfWeekDay = startOfWeek(date);

  const days = useCallback(() => {
    const isMark = (day: string) => (markDays ? markDays.includes(day) : false);

    return Array.from({ length: 7 }, (_, i) => {
      const m_date = addDays(startOfWeekDay, i);

      return {
        date: m_date,
        day: format(m_date, "d"),
        month: format(m_date, "eee", { locale: ko }),
        isMark: isMark(format(m_date, "yyyy-MM-dd")),
      };
    });
  }, [startOfWeekDay, markDays])();

  const today = format(Date.now(), "d");
  const selectedDay = format(date, "d");

  return (
    <CalendarBodyPresenter
      days={days}
      today={today}
      onClickDay={setDate}
      selectedDay={selectedDay}
    />
  );
};

export default CalendarBodyContainer;
