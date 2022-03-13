import { useCallback } from "react";
import { addDays, format, startOfWeek } from "date-fns";
import { ko } from "date-fns/locale";

import CalendarBodyPresenter from "./CalendarBodyPresenter";
import { IWeekCalendarProps } from ".";

const CalendarBodyContainer = ({
  date,
  onChangeDate,
  markDays,
}: IWeekCalendarProps) => {
  const today = format(Date.now(), "d");
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
        isSelected: date.getDay() === m_date.getDay(),
      };
    });
  }, [date, startOfWeekDay, markDays])();

  return (
    <CalendarBodyPresenter
      days={days}
      today={today}
      onChangeDate={onChangeDate}
    />
  );
};

export default CalendarBodyContainer;
