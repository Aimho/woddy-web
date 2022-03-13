import { Box } from "@mui/material";
import CalendarBodyContainer from "./CalendarBodyContainer";
import CalendarHeaderContainer from "./CalendarHeaderContainer";

export interface IWeekCalendarProps {
  date: Date;
  onChangeDate: (value: Date) => void;
  markDays?: string[];
}

const WeekCalendar = ({ date, onChangeDate, markDays }: IWeekCalendarProps) => {
  return (
    <Box component="section">
      <CalendarHeaderContainer date={date} onChangeDate={onChangeDate} />
      <CalendarBodyContainer
        date={date}
        onChangeDate={onChangeDate}
        markDays={markDays}
      />
    </Box>
  );
};

export default WeekCalendar;
