import {
  Container,
  Typography,
  Box,
  Grid,
  Switch,
  SwitchProps,
  Collapse,
  Divider,
  useTheme,
} from "@mui/material";
import WeekCalendar, {
  IWeekCalendarProps,
} from "../../components/WeekCalendar";

interface IProps {
  calendarProps: IWeekCalendarProps;
  contentsProps: {
    title: string;
    wod?: string;
    isControl: boolean;
    switchProps: SwitchProps;
  };
}

const Presenter = ({ calendarProps, contentsProps }: IProps) => {
  const theme = useTheme();
  const { title, wod, isControl, switchProps } = contentsProps;
  const isVisibleSwitch = isControl && Boolean(wod);

  const RenderTrainingLabel = () => {
    let label = "운동 안 했어요";
    let color = theme.palette.text.secondary;

    if (switchProps.checked) {
      label = "운동 했어요";
      color = theme.palette.text.main!;
    }

    return (
      <Typography variant="subtitle2" color={color}>
        {label}
      </Typography>
    );
  };

  const RenderWod = () => {
    let label = wod;
    if (!wod) {
      label = switchProps.disabled
        ? "크로스핏 W.O.D가 아직 안 나왔어요."
        : "크로스핏 수업이 없어요.";
    }

    return (
      <Typography
        variant="subtitle2"
        color={theme.palette.text.secondary}
        whiteSpace="pre-wrap"
      >
        {label}
      </Typography>
    );
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      <WeekCalendar {...calendarProps} />

      <Box sx={{ mt: 6, mb: 2 }} component="section">
        <Grid container alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Typography variant="subtitle1">{title}</Typography>
            <Collapse in={isVisibleSwitch}>
              <RenderTrainingLabel />
            </Collapse>
          </Box>
          <Collapse in={isVisibleSwitch}>
            <Switch {...switchProps} />
          </Collapse>
        </Grid>
      </Box>
      <Divider />
      <Box sx={{ mt: 1 }}>
        <RenderWod />
      </Box>
    </Container>
  );
};

export default Presenter;
