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
import SettingsTwoToneIcon from "@material-ui/icons/SettingsTwoTone";
import { events } from "../../@fake-db/calendar/calendar";

const TealCheckbox = withStyles({
  root: {
    color: "#4fd1c5",
    "&$checked": {
      color: "#319795",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const IndigoCheckbox = withStyles({
  root: {
    color: "#7f9cf5",
    "&$checked": {
      color: "#5a67d8",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const RedCheckbox = withStyles({
  root: {
    color: "#fc8181",
    "&$checked": {
      color: "#e53e3e",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const currentMonthDates = new Array(moment().daysInMonth())
  .fill(null)
  .map((x, i) => moment().startOf("month").add(i, "days"));

const prevMonthDates = new Array(moment().subtract(1, "month").daysInMonth())
  .fill(null)
  .map((x, i) => moment().subtract(1, "month").startOf("month").add(i, "days"));

const getFirstDayOfTheCurrentMonth = () => {
  const cases = {
    Mon: () => 0,
    Tue: () => 1,
    Wed: () => 2,
    Thu: () => 3,
    Fri: () => 4,
    Sat: () => 5,
    Sun: () => 6,
  };
  return cases[currentMonthDates[0].format("ddd")];
};

const calendarSetProgram = (day) => {
  let data = events.find((event) => moment(event.start).format("DD") === day);
  return (
    data && (
      <span
        className={
          "p-1 rounded-sm text-white text-xs " +
          (data.type === "personal" ? "bg-teal-600" : "") +
          (data.type === "work" ? "bg-indigo-600" : "") +
          (data.type === "appointment" ? "bg-pink-600" : "")
        }
      >
        {data.title}
      </span>
    )
  );
};

const days = [
  ..._.takeRight(prevMonthDates, getFirstDayOfTheCurrentMonth()),
  ...currentMonthDates,
].map((date, i) => (
  <div
    key={i}
    className="border-b border-r flex-col items-center justify-center"
  >
    {i < 7 && (
      <p className="uppercase text-xs font-bold py-2 text-gray-500">
        {date.format("ddd")}
      </p>
    )}
    <span
      className={
        "rounded-full w-6 h-6 leading-6 text-xs my-1 m-auto block " +
        (moment().format("L") === date.format("L")
          ? "bg-indigo-600 text-white"
          : null)
      }
    >
      {date._d.getDate()}
    </span>
    {calendarSetProgram(date._d.getDate())}
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
    checkedC: true,
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
      <div className="flex flex-wrap flex-auto w-full h-full bg-white">
        <div className="w-1/4 border-r px-8">
          <h2 className="text-3xl font-bold mt-6">Calendar</h2>
          <p className="text-lg mt-6 mb-1">Calendars</p>
          <div>
            <FormControlLabel
              control={
                <TealCheckbox
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
                <IndigoCheckbox
                  checked={state.checkedB}
                  onChange={handleChange}
                  name="checkedB"
                />
              }
              label="Work"
            />
          </div>
          <div>
            <FormControlLabel
              control={
                <RedCheckbox
                  checked={state.checkedC}
                  onChange={handleChange}
                  name="checkedC"
                />
              }
              label="Appointment"
            />
          </div>
          <div className="absolute bottom-0">
            <button className="-ml-2 mb-3 py-2">
              <SettingsTwoToneIcon style={{ color: "#64748b" }} />
              <span className="ml-1 align-text-top">Settings</span>
            </button>
          </div>
        </div>
        <div className="w-3/4 min-h-full">
          <div className="flex flex-col h-full">
            <div className="flex items-center border-b px-8 py-2">
              <p className="font-medium text-xl mr-4">July 2020</p>
              <IconButton aria-label="delete">
                <ChevronLeftIcon />
              </IconButton>
              <IconButton aria-label="delete" style={{ marginRight: "8px" }}>
                <ChevronRightIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <TodayTwoToneIcon style={{ color: "#64748b" }} />
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
