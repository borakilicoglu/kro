import React, { useEffect } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import SettingsTwoToneIcon from "@material-ui/icons/SettingsTwoTone";
import { withStyles } from "@material-ui/core/styles";

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

const CalendarSidebar = ({ filter, changeFilter }) => {
  useEffect(() => {
    return () => {};
  }, [filter]);
  return (
    <div className="w-1/4 border-r px-8">
      <h2 className="text-3xl font-bold mt-6">Calendar</h2>
      <p className="text-lg mt-6 mb-1 font-seminbold text-gray-700">
        Calendars
      </p>
      <div>
        <FormControlLabel
          control={
            <TealCheckbox
              checked={filter.checkedA}
              onChange={changeFilter}
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
              checked={filter.checkedB}
              onChange={changeFilter}
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
              checked={filter.checkedC}
              onChange={changeFilter}
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
  );
};
export default CalendarSidebar;
