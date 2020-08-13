import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import SettingsTwoToneIcon from "@material-ui/icons/SettingsTwoTone";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles({
  paper: {
    background: "#f1f5f9",
  },
  list: {
    width: 320,
  },
  fullList: {
    width: "auto",
  },
});

export default function Customizer() {
  const classes = useStyles();

  const [theme, setTheme] = React.useState("light");

  const handleTheme = (event) => {
    setTheme(event.target.value);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className="fixed right-0" style={{ top: "50%" }}>
      <React.Fragment key={"right"}>
        <button
          onClick={toggleDrawer("right", true)}
          className="bg-red-600 p-3"
        >
          <SettingsTwoToneIcon
            style={{ color: "#fff" }}
            className="animate-spin"
          />
        </button>
        <Drawer
          classes={{ paper: classes.paper }}
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          <div className="flex flex-row w-full items-center px-6 h-20 min-h-20 border-b">
            <SettingsTwoToneIcon style={{ color: "#64738b" }} />
            <h2 className="text-md font-semibold tracking-wide ml-3">
              SETTINGS
            </h2>
          </div>

          <div className="flex flex-col w-full px-6 border-b py-6">
            <h2 className="mb-3 text-xs font-medium text-gray-600 tracking-widest">
              THEME
            </h2>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="gender"
                name="theme"
                value={theme}
                onChange={handleTheme}
              >
                <FormControlLabel
                  value="auto"
                  control={<Radio />}
                  label="Auto"
                />
                <FormControlLabel
                  value="dark"
                  control={<Radio />}
                  label="Dark"
                />
                <FormControlLabel
                  value="light"
                  control={<Radio />}
                  label="Light"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="flex flex-col p-6">
            <div className="mb-4 text-sm font-medium text-secondary tracking-widest">
              LAYOUT
            </div>
            <div className="flex flex-col items-center mb-6 cursor-pointer ng-star-inserted">
              <button onClick={() => context.switchLayout("vertical")}>
                <img
                  className="w-full p-1 border-4 rounded-sm text-primary light:border-cool-gray-300 dark:border-cool-gray-900 light:bg-card dark:bg-cool-gray-600"
                  src={layoutImage}
                  alt="Empty Layout"
                />
              </button>
              <div className="mt-2 text-md font-medium text-secondary tracking-wide">
                Empty
              </div>
            </div>
            <div className="flex flex-col items-center mb-6 cursor-pointer ng-star-inserted">
              <button onClick={() => context.switchLayout("horizontal")}>
                <img
                  className="w-full p-1 border-4 rounded-sm text-primary light:border-cool-gray-300 dark:border-cool-gray-900 light:bg-card dark:bg-cool-gray-600"
                  src={layoutImage}
                  alt="Empty Layout"
                />
              </button>
              <div className="mt-2 text-md font-medium text-secondary tracking-wide">
                Basic
              </div>
            </div>
            <div className="flex flex-col items-center mb-6 cursor-pointer ng-star-inserted">
              <button onClick={() => context.switchLayout("vertical")}>
                <img
                  className="w-full p-1 border-4 rounded-sm text-primary light:border-cool-gray-300 dark:border-cool-gray-900 light:bg-card dark:bg-cool-gray-600"
                  src={layoutImage}
                  alt="Empty Layout"
                />
              </button>
              <div className="mt-2 text-md font-medium text-secondary tracking-wide">
                Classic
              </div>
            </div>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
