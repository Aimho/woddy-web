import { Container } from "@mui/material";
import WeekCalendar from "../../components/WeekCalendar";

interface IProps {
  onChangeDate: (value: Date) => void;
}

const Presenter = ({ onChangeDate }: IProps) => {
  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      <WeekCalendar onChangeDate={onChangeDate} markDays={["2022-02-28"]} />
    </Container>
  );
};

export default Presenter;
