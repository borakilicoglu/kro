// import React, { useRef } from "react";
// import Button from "@material-ui/core/Button";
// import { withStyles } from "@material-ui/core/styles";
// import Popover from "@material-ui/core/Popover";
// import Icon from "@material-ui/core/Icon";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import Typography from "@material-ui/core/Typography";
// import ListItemText from "@material-ui/core/ListItemText";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import LensTwoToneIcon from "@material-ui/icons/LensTwoTone";
// import { makeStyles } from "@material-ui/core/styles";
// import PopupState, {
//   bindHover,
//   bindTrigger,
//   bindPopover,
// } from "material-ui-popup-state";

// const StyledButton = withStyles({
//   root: {
//     display: "flex",
//     justifyContent: "flex-start",
//     borderRadius: 0,
//     border: 0,
//     color: "#27303f",
//     height: 48,
//     fontWeight: 400,
//     padding: "0 18px",
//     position: "relative",
//   },
//   label: {
//     textTransform: "none",
//   },
// })(Button);

// const useStyles = makeStyles((theme) => ({
//   popover: {
//     pointerEvents: "none",
//   },
//   paper: {
//     padding: theme.spacing(1),
//   },
// }));

// function Status() {
//   return (
//     <PopupState variant="popover" popupId="demo-popup-popover">
//       {(popupState) => (
//         <div>
//           <StyledButton
//             {...bindHover(popupState)}
//             startIcon={
//               <LensTwoToneIcon style={{ color: "#64738b", fontSize: 24 }} />
//             }
//           >
//             Status
//           </StyledButton>
//           <Popover
//             {...bindPopover(popupState)}
//             anchorOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "left",
//             }}
//           >
//             <MenuItem
//               style={{ fontSize: "14px", lineHeight: "34px" }}
//               {...bindTrigger(popupState)}
//             >
//               <Icon
//                 style={{ color: "#0e9f6e", marginRight: "12px" }}
//                 fontSize="small"
//               >
//                 lens
//               </Icon>
//               Online
//             </MenuItem>
//             <MenuItem style={{ fontSize: "14px", lineHeight: "34px" }}>
//               <Icon
//                 style={{ color: "#ff5a1f", marginRight: "12px" }}
//                 fontSize="small"
//               >
//                 lens
//               </Icon>
//               Away
//             </MenuItem>
//             <MenuItem style={{ fontSize: "14px", lineHeight: "34px" }}>
//               <Icon
//                 style={{ color: "#f05252", marginRight: "12px" }}
//                 fontSize="small"
//               >
//                 lens
//               </Icon>
//               Busy
//             </MenuItem>
//             <MenuItem style={{ fontSize: "14px", lineHeight: "34px" }}>
//               <Icon
//                 style={{ color: "#97a6ba", marginRight: "12px" }}
//                 fontSize="small"
//               >
//                 lens
//               </Icon>
//               Invisible
//             </MenuItem>
//           </Popover>
//         </div>
//       )}
//     </PopupState>
//   );
// }

// export default Status;

import React from "react";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LensTwoToneIcon from "@material-ui/icons/LensTwoTone";

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
  },
  label: {
    textTransform: "none",
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

export default function MouseOverPopover() {
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
    <div className="flex">
      <StyledButton
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        startIcon={
          <LensTwoToneIcon style={{ color: "#64738b", fontSize: 24 }} />
        }
      >
        Status
      </StyledButton>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
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
        <Typography>I use Popover.</Typography>
      </Popover>
    </div>
  );
}
