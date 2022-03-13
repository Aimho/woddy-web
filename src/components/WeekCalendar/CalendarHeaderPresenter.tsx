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
  <Box>
    <Grid container justifyContent={"space-between"} alignItems="center">
      <Grid item>
        <IconButton disableRipple onClick={onClickBack} sx={{ paddingX: 0 }}>
          <ArrowBackIosNew fontSize="small" />
        </IconButton>
      </Grid>
      <Grid item flex={1}>
        <Typography textAlign={"center"} variant="h5">
          {label}
        </Typography>
      </Grid>
      <Grid item>
        <IconButton disableRipple onClick={onClickForward} sx={{ paddingX: 0 }}>
          <ArrowForwardIos fontSize="small" />
        </IconButton>
      </Grid>
    </Grid>
  </Box>
);

export default CalendarHeaderPresenter;
