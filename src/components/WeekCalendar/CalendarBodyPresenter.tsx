import { Box, Grid, IconButton, Typography, useTheme } from "@mui/material";

interface IProps {
  today: string;
  days: {
    date: Date;
    day: string;
    month: string;
    isMark: boolean;
  }[];
  selectedDay: string;
  onClickDay: React.Dispatch<React.SetStateAction<Date>>;
}

const CalendarBodyPresenter = ({
  today,
  days,
  selectedDay,
  onClickDay,
}: IProps) => {
  const theme = useTheme();
  const RenderMark: React.FC<{ isMark: boolean }> = ({ isMark }) => {
    if (!isMark) return null;
    return (
      <Box
        width={6}
        height={6}
        borderRadius={3}
        sx={{ backgroundColor: theme.palette.primary.main, marginX: "auto" }}
      />
    );
  };

  return (
    <Box flex={1} sx={{ mt: 4 }}>
      <Grid
        container
        flex={1}
        justifyContent={"space-between"}
        alignItems="center"
      >
        {days.map(({ date, day, month, isMark }) => {
          const variant = day === today ? "primary" : "subtitle1";
          const backgroundColor =
            day === selectedDay ? theme.palette.background.box : "transparent";
          const onClick = () => onClickDay(date);

          return (
            <Grid key={day} item flex={1} textAlign="center">
              <Typography variant={"subtitle1"} component="span">
                {month}
              </Typography>
              <IconButton onClick={onClick} sx={{ backgroundColor }}>
                <Box width={34} height={34}>
                  <Typography variant={variant} component="span">
                    {day}
                  </Typography>
                  <RenderMark isMark={isMark} />
                </Box>
              </IconButton>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CalendarBodyPresenter;
