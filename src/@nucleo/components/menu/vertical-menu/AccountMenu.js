import React from "react";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Popover from "@material-ui/core/Popover";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import SettingsTwoToneIcon from "@material-ui/icons/SettingsTwoTone";
import { withStyles } from "@material-ui/core/styles";
import LensTwoToneIcon from "@material-ui/icons/LensTwoTone";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

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
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [status, setStatus] = React.useState({ status: "" });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Divider />

          <div className="flex flex-col">
            <StyledButton className="flex px-2 capitalize">
              <AccountCircleTwoToneIcon style={{ color: "#64738b" }} />
              Profile
            </StyledButton>

            <StyledButton className="flex px-2">
              <SettingsTwoToneIcon style={{ color: "#64738b" }} />
              Seetings
            </StyledButton>

            <StyledButton className="flex px-2">
              <LensTwoToneIcon style={{ color: "#64738b" }} />
              Status
            </StyledButton>

            <Divider />

            <StyledButton className="flex px-2">
              <PowerSettingsNewIcon style={{ color: "#64738b" }} />
              Profile
            </StyledButton>
          </div>
        </Popover>
      </div>
    </ThemeProvider>
  );
}
