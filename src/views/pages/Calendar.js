import React from "react";
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

const currentMonthDates = new Array(moment().daysInMonth())
  .fill(null)
  .map((x, i) => moment().startOf("month").add(i, "days"));

const prevMonthDates = new Array(moment().subtract(1, "month").daysInMonth())
  .fill(null)
  .map((x, i) => moment().subtract(1, "month").startOf("month").add(i, "days"));

console.log(moment().startOf("month"));

let day;

switch (currentMonthDates[0].format("ddd")) {
  case "Mon":
    day = 0;
    break;
  case "Tue":
    day = 1;
    break;
  case "Wed":
    day = 2;
    break;
  case "Thu":
    day = 3;
    break;
  case "Fri":
    day = 4;
    break;
  case "Sat":
    day = 5;
    break;
  case "Sun":
    day = 6;
}

const composite = [..._.takeRight(prevMonthDates, day), ...currentMonthDates];
// console.log(35 - composite.length);

const days = composite.map((date, i) => (
  <div key={i} className="border-b border-r">
    <p className="uppercase text-xs font-bold py-2 text-gray-500">
      {i < 7 && date.format("ddd")}
    </p>
    <span
      className={
        "rounded-full w-6 h-6 inline-flex items-center justify-center leading-none text-xs my-1 " +
        (moment().format("L") == date.format("L")
          ? "bg-indigo-600 text-white"
          : null)
      }
    >
      {date._d.getDate()}
    </span>
  </div>
));

const wrapper = (
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

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [structure, setStructure] = React.useState(1);

  const handleChangeStructure = (event) => {
    setStructure(event.target.value);
  };

  return (
    <div className="flex flex-col flex-auto w-full xs:p-2">
      <div className="flex flex-wrap w-full min-h-screen bg-white">
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
                  color="primary"
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

            {structure === 1 && wrapper}
            {structure === 2 && <div className="">{structure}</div>}
            {structure === 3 && <div className="">{structure}</div>}
            {structure === 4 && <div className="">{structure}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
