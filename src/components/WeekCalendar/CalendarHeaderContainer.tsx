import { addDays, format, getWeekOfMonth } from "date-fns";
import CalendarHeaderPresenter from "./CalendarHeaderPresenter";

interface IProps {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

const CalendarHeaderContainer = ({ date, setDate }: IProps) => {
  const label = `${format(date, "M")}월 ${getWeekOfMonth(date)}주차`;
  const onClickBack = () => setDate((value) => addDays(value, -7));
  const onClickForward = () => setDate((value) => addDays(value, 7));

  return (
    <CalendarHeaderPresenter
      label={label}
      onClickBack={onClickBack}
      onClickForward={onClickForward}
    />
  );
};

export default CalendarHeaderContainer;
