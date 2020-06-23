import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import SettingsTwoToneIcon from "@material-ui/icons/SettingsTwoTone";
import LensTwoToneIcon from "@material-ui/icons/LensTwoTone";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

import Status from "./Status";

const StyledMenu = withStyles({
  paper: {
    // border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: "#edf2f7",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
    "&:focus": {
      backgroundColor: "#edf2f7",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton className="relative" onClick={handleClick}>
        <AccountCircleTwoToneIcon style={{ color: "#96a6ba" }} />
        <span
          className="status online bg-green-500 w-2 absolute h-2 rounded-full"
          style={{ bottom: "8px", right: "8px" }}
        ></span>
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem style={{ padding: "0px 16px", marginBottom: "8px" }}>
          <ListItemText
            primary={
              <Typography
                variant="subtitle1"
                style={{
                  color: "#27303f",
                  padding: "0px",
                  fontSize: "13px",
                }}
              >
                Signed in as
                <br></br>
                <strong>watkins.andrew@company.com</strong>
              </Typography>
            }
          />
        </StyledMenuItem>

        <Divider />

        <StyledMenuItem style={{ marginTop: "8px" }}>
          <ListItemIcon style={{ minWidth: "auto", marginRight: "12px" }}>
            <AccountCircleTwoToneIcon style={{ color: "#64738b" }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                variant="subtitle1"
                style={{ color: "#27303f", fontSize: "14px" }}
              >
                Profile
              </Typography>
            }
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon style={{ minWidth: "auto", marginRight: "12px" }}>
            <SettingsTwoToneIcon style={{ color: "#64738b" }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                variant="subtitle1"
                style={{ color: "#27303f", fontSize: "14px" }}
              >
                Settings
              </Typography>
            }
          />
        </StyledMenuItem>

        <Status />

        {/* <StyledMenuItem style={{ marginBottom: "8px" }}>
          <ListItemIcon style={{ minWidth: "auto", marginRight: "12px" }}>
            <LensTwoToneIcon style={{ color: "#64738b" }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                variant="subtitle1"
                style={{ color: "#27303f", fontSize: "14px" }}
              >
                Status
              </Typography>
            }
          />
        </StyledMenuItem> */}

        <Divider />

        <StyledMenuItem style={{ marginTop: "8px" }}>
          <ListItemIcon style={{ minWidth: "auto", marginRight: "12px" }}>
            <PowerSettingsNewIcon style={{ color: "#64738b" }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                variant="subtitle1"
                style={{ color: "#27303f", fontSize: "14px" }}
              >
                Sign out
              </Typography>
            }
          />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
