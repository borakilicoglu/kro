import React from "react";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
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
    <div>
      <IconButton onClick={handleClick}>
        <svg
          className="w-6"
          x="768"
          y="1152"
          viewBox="0 0 24 24"
          fit=""
          fill="#64748b"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <path
            opacity=".3"
            d="M20 4H4v13.17L5.17 16H20V4zm-2 10H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
          ></path>
          <path d="M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h12v2H6zm0-3h12v2H6zm0-3h12v2H6z"></path>
        </svg>
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
          <div className="border-b flex py-4 px-6 justify-between items-center bg-gray-200">
            <h3 className="font-semibold align-middle">Messages</h3>
            <IconButton>
              <svg
                className="w-6"
                x="432"
                y="1440"
                viewBox="0 0 24 24"
                fit=""
                fill="#64748b"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path d="M2 6h12v2H2zm0 4h12v2H2zm0 4h8v2H2zm14.01 3L13 14l-1.5 1.5 4.51 4.5L23 13l-1.5-1.5z"></path>
              </svg>
            </IconButton>
          </div>
        </div>
        <div className="h-56 overflow-scroll">
          {_.times(4, (i) => (
            <div className="flex py-4 px-6 border-b hover:bg-gray-200" key={i}>
              <div>
                <img
                  className="w-12 rounded-full"
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
                    <DeleteIcon style={{ fontSize: 14 }} />
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
