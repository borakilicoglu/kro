import React from "react";
import * as moment from "moment";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  IconButton,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TodayTwoToneIcon from "@material-ui/icons/TodayTwoTone";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const CalendarHeader = ({
  currentDate,
  mode,
  changeMode,
  prev,
  next,
  reset,
}) => {
  const classes = useStyles();
  return (
    <div className="flex items-center border-b px-8 py-2">
      <p className="font-medium text-xl mr-4">
        {moment(currentDate).format("MMMM YYYY")}
      </p>
      <IconButton aria-label="prev" onClick={prev}>
        <ChevronLeftIcon />
      </IconButton>
      <IconButton
        aria-label="next"
        style={{ marginRight: "8px" }}
        onClick={next}
      >
        <ChevronRightIcon />
      </IconButton>
      <IconButton aria-label="today" onClick={reset}>
        <TodayTwoToneIcon style={{ color: "#64748b" }} />
      </IconButton>
      <div className="ml-auto">
        <FormControl
          variant="outlined"
          className={classes.formControl}
          size="small"
        >
          <InputLabel>Mode</InputLabel>
          <Select value={mode} onChange={changeMode} label="Mode">
            <MenuItem value={1}>Month</MenuItem>
            <MenuItem value={2}>Week</MenuItem>
            <MenuItem value={3}>Day</MenuItem>
            <MenuItem value={4}>Schedule</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default CalendarHeader;
