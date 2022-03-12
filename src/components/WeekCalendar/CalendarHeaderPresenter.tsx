import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";

interface IProps {
  label: string;
  onClickBack: () => void;
  onClickForward: () => void;
}

const CalendarHeaderPresenter = ({
  label,
  onClickBack,
  onClickForward,
}: IProps) => (
  <Box flex={1}>
    <Grid
      container
      justifyContent={"space-between"}
      alignItems="center"
      flex={1}
    >
      <Grid item>
        <IconButton onClick={onClickBack}>
          <ArrowBackIosNew fontSize="small" />
        </IconButton>
      </Grid>
      <Grid item flex={1}>
        <Typography textAlign={"center"} variant="h5">
          {label}
        </Typography>
      </Grid>
      <Grid item>
        <IconButton onClick={onClickForward}>
          <ArrowForwardIos fontSize="small" />
        </IconButton>
      </Grid>
    </Grid>
  </Box>
);

export default CalendarHeaderPresenter;
