import {
  Container,
  Typography,
  Box,
  Grid,
  Switch,
  SwitchProps,
} from "@mui/material";
import WeekCalendar, {
  IWeekCalendarProps,
} from "../../components/WeekCalendar";

interface IProps {
  calendarProps: IWeekCalendarProps;
  contentsProps: {
    title: string;
    switchProps: SwitchProps;
  };
}

const Presenter = ({ calendarProps, contentsProps }: IProps) => {
  const { title, switchProps } = contentsProps;

  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      <WeekCalendar {...calendarProps} />

      <Box sx={{ mt: 6 }}>
        <Grid container alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Typography variant="subtitle1">{title}</Typography>
          </Box>
          <Switch {...switchProps} />
        </Grid>
      </Box>
    </Container>
  );
};

export default Presenter;
