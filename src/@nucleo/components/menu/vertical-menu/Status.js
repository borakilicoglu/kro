import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Icon from "@material-ui/core/Icon";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import LensTwoToneIcon from "@material-ui/icons/LensTwoTone";
import { makeStyles } from "@material-ui/core/styles";

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

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

function Status() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <StyledMenuItem
        style={{ marginBottom: "8px" }}
        aria-owns={anchorEl ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
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
      </StyledMenuItem>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <MenuItem
          onClick={handlePopoverClose}
          style={{ fontSize: "14px", lineHeight: "34px" }}
        >
          <Icon
            style={{ color: "#0e9f6e", marginRight: "12px" }}
            fontSize="small"
          >
            lens
          </Icon>
          Online
        </MenuItem>
        <MenuItem
          onClick={handlePopoverClose}
          style={{ fontSize: "14px", lineHeight: "34px" }}
        >
          <Icon
            style={{ color: "#ff5a1f", marginRight: "12px" }}
            fontSize="small"
          >
            lens
          </Icon>
          Away
        </MenuItem>
        <MenuItem
          onClick={handlePopoverClose}
          style={{ fontSize: "14px", lineHeight: "34px" }}
        >
          <Icon
            style={{ color: "#f05252", marginRight: "12px" }}
            fontSize="small"
          >
            lens
          </Icon>
          Busy
        </MenuItem>
        <MenuItem
          onClick={handlePopoverClose}
          style={{ fontSize: "14px", lineHeight: "34px" }}
        >
          <Icon
            style={{ color: "#97a6ba", marginRight: "12px" }}
            fontSize="small"
          >
            lens
          </Icon>
          Invisible
        </MenuItem>
      </Popover>
    </div>
  );
}

export default Status;
