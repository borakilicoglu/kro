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

console.log(currentMonthDates);

const days = currentMonthDates.map((date, i) => (
  <div key={i}>
    {date._d.getDate()}
    {date.format("dd")}
  </div>
));

const wrapper = <div className="grid grid-cols-7 gap-0">{days}</div>;

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
        <div className="w-3/4">
          <div className="flex items-center border-b px-8 py-4">
            <p className="font-medium text-xl mr-4">June 2020</p>
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
              <FormControl variant="outlined" className={classes.formControl}>
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

          {structure === 1 && <div className="">{wrapper}</div>}
          {structure === 2 && <div className="">{structure}</div>}
          {structure === 3 && <div className="">{structure}</div>}
          {structure === 4 && <div className="">{structure}</div>}
        </div>
      </div>
    </div>
  );
}
