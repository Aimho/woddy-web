import { useEffect, useState } from "react";
import CalendarBodyContainer from "./CalendarBodyContainer";
import CalendarHeaderContainer from "./CalendarHeaderContainer";

interface IProps {
  onChangeDate: (value: Date) => void;
  markDays?: string[];
}

const WeekCalendar = ({ onChangeDate, markDays }: IProps) => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    onChangeDate(date);
  }, [date, onChangeDate]);

  return (
    <section>
      <CalendarHeaderContainer date={date} setDate={setDate} />
      <CalendarBodyContainer
        date={date}
        setDate={setDate}
        markDays={markDays}
      />
    </section>
  );
};

export default WeekCalendar;
