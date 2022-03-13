import { addDays, format, getWeekOfMonth } from "date-fns";
import { IWeekCalendarProps } from ".";
import CalendarHeaderPresenter from "./CalendarHeaderPresenter";

interface IProps extends Pick<IWeekCalendarProps, "date" | "onChangeDate"> {}

const CalendarHeaderContainer = ({ date, onChangeDate }: IProps) => {
  const label = `${format(date, "M")}월 ${getWeekOfMonth(date)}주차`;
  const onClickBack = () => onChangeDate(addDays(date, -7));
  const onClickForward = () => onChangeDate(addDays(date, 7));

  return (
    <CalendarHeaderPresenter
      label={label}
      onClickBack={onClickBack}
      onClickForward={onClickForward}
    />
  );
};

export default CalendarHeaderContainer;
