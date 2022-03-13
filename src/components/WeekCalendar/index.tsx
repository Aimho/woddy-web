import { useEffect } from "react";
import CalendarBodyContainer from "./CalendarBodyContainer";
import CalendarHeaderContainer from "./CalendarHeaderContainer";

export interface IWeekCalendarProps {
  date: Date;
  onChangeDate: (value: Date) => void;
  markDays?: string[];
}

const WeekCalendar = ({ date, onChangeDate, markDays }: IWeekCalendarProps) => {
  useEffect(() => {
    onChangeDate(date);
  }, [date, onChangeDate]);

  return (
    <section>
      <CalendarHeaderContainer date={date} onChangeDate={onChangeDate} />
      <CalendarBodyContainer
        date={date}
        onChangeDate={onChangeDate}
        markDays={markDays}
      />
    </section>
  );
};

export default WeekCalendar;
