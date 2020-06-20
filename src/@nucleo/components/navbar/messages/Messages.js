import React from "react";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
import CloseIcon from "@material-ui/icons/Close";
import MessageTwoToneIcon from "@material-ui/icons/MessageTwoTone";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function Messages() {
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

  return (
    <div className="mr-2">
      <IconButton onClick={handleClick}>
        <MessageTwoToneIcon style={{ color: "#64748b" }} />
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
        <div className="border-t-4 border-indigo-600">
          <div className="border-b flex py-3 pl-6 pr-4 justify-between items-center bg-gray-200">
            <h3 className="text-base align-middle">Messages</h3>
            <IconButton>
              <PlaylistAddCheckIcon />
            </IconButton>
          </div>
        </div>
        <div className="h-56 overflow-scroll">
          {_.times(4, (i) => (
            <div className="flex py-4 px-6 border-b hover:bg-gray-200" key={i}>
              <div>
                <img
                  className="w-8 rounded-full"
                  src="https://treo.pulsethemes.com/angular/demo/assets/images/avatars/male-01.jpg"
                  alt=""
                />
              </div>
              <div className="ml-4">
                <p className="font-semibold">Gary Peters</p>
                <p>We should talk about that at lunch!</p>
                <small className="text-gray-600">Jun 13, 12:12 PM</small>
              </div>
              <div className="ml-2 flex flex-col">
                <Tooltip title="Mark as read" aria-label="Mark as read">
                  <IconButton>
                    <FiberManualRecordIcon
                      style={{ color: "#5c6ac4", fontSize: 14 }}
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Remove" aria-label="Remove">
                  <IconButton aria-label="delete">
                    <CloseIcon style={{ fontSize: 14 }} />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          ))}
        </div>
        {/* <Typography className={classes.typography}>
          The content of the Popover.
        </Typography> */}
      </Popover>
    </div>
  );
}
