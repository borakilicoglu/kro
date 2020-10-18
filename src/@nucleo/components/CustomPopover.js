import React from "react";
import _ from "lodash";

import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";

import CloseIcon from "@material-ui/icons/Close";
import MessageTwoToneIcon from "@material-ui/icons/MessageTwoTone";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import IconButton from "@material-ui/core/IconButton";

const CustomPopover = ({ icon, children, size, style }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="mr-2">
      <IconButton onClick={handleClick} size={size} className={style}>
        {icon}
      </IconButton>
      {children && (
        <Popover
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
          {children}
        </Popover>
      )}
    </div>
  );
};

export default CustomPopover;
