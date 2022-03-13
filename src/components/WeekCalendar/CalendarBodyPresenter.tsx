import { Box, Grid, IconButton, Typography, useTheme } from "@mui/material";
import { IWeekCalendarProps } from ".";

interface IProps extends Pick<IWeekCalendarProps, "onChangeDate"> {
  today: string;
  days: {
    date: Date;
    day: string;
    month: string;
    isMark: boolean;
    isSelected: boolean;
  }[];
}

const CalendarBodyPresenter = ({ today, days, onChangeDate }: IProps) => {
  const theme = useTheme();
  const RenderMark: React.FC<{ isMark: boolean }> = ({ isMark }) => {
    if (!isMark) return null;
    return (
      <Box
        width={6}
        height={6}
        borderRadius={3}
        sx={{
          backgroundColor: theme.palette.primary.main,
          position: "absolute",
          bottom: 6,
          left: "calc(50% - 3px)",
        }}
      />
    );
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Grid
        container
        wrap="nowrap"
        alignItems="center"
        justifyContent="space-between"
      >
        {days.map(({ date, day, month, isMark, isSelected }) => {
          const todayColor =
            theme.palette.text[day === today ? "main" : "secondary"];
          const backgroundColor = isSelected
            ? theme.palette.background.box
            : "transparent";
          const onClick = () => onChangeDate(date);

          return (
            <Grid key={day} item textAlign="center">
              <Typography
                component="p"
                variant={"subtitle1"}
                color={theme.palette.text.primary}
              >
                {month}
              </Typography>
              <IconButton
                disableRipple
                onClick={onClick}
                sx={{ padding: 0, overflow: "hidden" }}
              >
                <Box
                  width={40}
                  height={40}
                  sx={{
                    backgroundColor,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    gutterBottom
                    component="p"
                    color={todayColor}
                    variant={"subtitle1"}
                  >
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
