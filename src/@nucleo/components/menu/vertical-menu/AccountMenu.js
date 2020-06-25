import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Popover from "@material-ui/core/Popover";
import LensIcon from "@material-ui/icons/Lens";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import SettingsTwoToneIcon from "@material-ui/icons/SettingsTwoTone";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import LensTwoToneIcon from "@material-ui/icons/LensTwoTone";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#63728b",
    },
  },
});

const StyledButton = withStyles({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    borderRadius: 0,
    border: 0,
    color: "#27303f",
    height: 48,
    fontWeight: 400,
    padding: "0 18px",
    position: "relative",
  },
  label: {
    textTransform: "none",
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
    lineHeight: "15px",
  },
  select: {
    padding: "10px 0px",
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

export default function AccountMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <IconButton className="relative" onClick={handleClick}>
          <AccountCircleTwoToneIcon style={{ color: "#96a6ba" }} />
          <span
            className="status online bg-green-500 w-2 absolute h-2 rounded-full"
            style={{ bottom: "8px", right: "8px" }}
          ></span>
        </IconButton>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <div className="flex flex-col py-2">
            <div className="flex flex-col px-4 py-2" style={{ lineHeight: 1 }}>
              <span>Signed in as</span>
              <strong
                style={{ fontSize: "13px", marginTop: "6px" }}
                className="text-gray-800"
              >
                stefan.schmitz@company.com
              </strong>
            </div>

            <hr className="mt-2 mb-2" />

            <StyledButton
              startIcon={
                <AccountCircleTwoToneIcon
                  style={{ color: "#64738b", fontSize: 24 }}
                />
              }
            >
              Profile
            </StyledButton>

            <StyledButton
              startIcon={
                <SettingsTwoToneIcon
                  style={{ color: "#64738b", fontSize: 24 }}
                />
              }
            >
              Seetings
            </StyledButton>

            <StyledButton
              startIcon={
                <LensTwoToneIcon style={{ color: "#64738b", fontSize: 24 }} />
              }
            >
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Status
                </InputLabel>
                <Select
                  className={classes.select}
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={status}
                  onChange={handleChange}
                  label="Status"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Online</MenuItem>
                  <MenuItem value={20}>Busy</MenuItem>
                  <MenuItem value={30}>Away</MenuItem>
                  <MenuItem value={30}>Away</MenuItem>
                </Select>
              </FormControl>
            </StyledButton>

            <hr className="mt-2 mb-2" />

            <StyledButton
              startIcon={
                <PowerSettingsNewIcon
                  style={{ color: "#64738b", fontSize: 24 }}
                />
              }
            >
              Sign out
            </StyledButton>
          </div>
        </Popover>
      </div>
    </ThemeProvider>
  );
}
