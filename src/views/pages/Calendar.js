import React, { useState, useEffect } from "react";
import _ from "lodash";
import * as moment from "moment";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  FormControlLabel,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TodayTwoToneIcon from "@material-ui/icons/TodayTwoTone";

import { events } from "../../@fake-db/calendar/calendar";

const currentMonthDates = new Array(moment().daysInMonth())
  .fill(null)
  .map((x, i) => moment().startOf("month").add(i, "days"));

const prevMonthDates = new Array(moment().subtract(1, "month").daysInMonth())
  .fill(null)
  .map((x, i) => moment().subtract(1, "month").startOf("month").add(i, "days"));

const getFirstDayOfTheCurrentMonth = () => {
  let firstDay;
  switch (currentMonthDates[0].format("ddd")) {
    case "Mon":
      firstDay = 0;
      break;
    case "Tue":
      firstDay = 1;
      break;
    case "Wed":
      firstDay = 2;
      break;
    case "Thu":
      firstDay = 3;
      break;
    case "Fri":
      firstDay = 4;
      break;
    case "Sat":
      firstDay = 5;
      break;
    case "Sun":
      firstDay = 6;
  }
  return firstDay;
};

const calendarProgram = (day) => {
  let data = events.find((event) => moment(event.start).format("DD") == day);
  return data && <span>{data.title}</span>;
};

const days = [
  ..._.takeRight(prevMonthDates, getFirstDayOfTheCurrentMonth()),
  ...currentMonthDates,
].map((date, i) => (
  <div
    key={i}
    className="border-b border-r flex-col items-center justify-center"
  >
    <p className="uppercase text-xs font-bold py-2 text-gray-500">
      {i < 7 && date.format("ddd")}
    </p>
    <span
      className={
        "rounded-full w-6 h-6 leading-6 text-xs my-1 m-auto block " +
        (moment().format("L") == date.format("L")
          ? "bg-indigo-600 text-white"
          : null)
      }
    >
      {date._d.getDate()}
    </span>
    {calendarProgram(date._d.getDate())}
  </div>
));

const calendar = (
  <div className="grid grid-cols-7 gap-0 text-center h-full">{days}</div>
);

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Calendar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [structure, setStructure] = React.useState(1);

  const handleChangeStructure = (event) => {
    setStructure(event.target.value);
  };

  return (
    <div className="flex flex-col flex-auto w-full xs:p-2">
      <div className="flex flex-wrap w-full h-full bg-white">
        <div className="w-1/4 border-r px-8">
          <h2 className="text-3xl font-bold mt-6">Calendar</h2>
          <p className="text-lg mt-6 mb-1">Calendars</p>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                />
              }
              label="Personal"
            />
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedB}
                  onChange={handleChange}
                  name="checkedB"
                  color="#444"
                />
              }
              label="Work"
            />
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedB}
                  onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Appointment"
            />
          </div>
        </div>
        <div className="w-3/4 min-h-full">
          <div className="flex flex-col h-full">
            <div className="flex items-center border-b px-8 py-4">
              <p className="font-medium text-xl mr-4">July 2020</p>
              <IconButton aria-label="delete">
                <ChevronLeftIcon />
              </IconButton>
              <IconButton aria-label="delete" style={{ marginRight: "8px" }}>
                <ChevronRightIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <TodayTwoToneIcon />
              </IconButton>
              <div className="ml-auto">
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  size="small"
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Structure
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={structure}
                    onChange={handleChangeStructure}
                    label="Structure"
                  >
                    <MenuItem value={1}>Month</MenuItem>
                    <MenuItem value={2}>Week</MenuItem>
                    <MenuItem value={3}>Day</MenuItem>
                    <MenuItem value={4}>Schedule</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            {structure === 1 && calendar}
            {structure === 2 && <div className="">{structure}</div>}
            {structure === 3 && <div className="">{structure}</div>}
            {structure === 4 && <div className="">{structure}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
