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
import { findLastIndex } from "lodash";
import { AlignCenter } from "react-feather";
import { light } from "@material-ui/core/styles/createPalette";

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
              <div className="absolute h-24 w-24 bg-red-500">
                Popup Menu Test
              </div>
            </StyledButton>

            <StyledButton
              startIcon={
                <LensTwoToneIcon style={{ color: "#64738b", fontSize: 24 }} />
              }
            >
              Status
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
