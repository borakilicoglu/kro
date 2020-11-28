import React from "react";
import _ from "lodash";

import Popover from "@material-ui/core/Popover";
import BookmarksTwoToneIcon from "@material-ui/icons/BookmarksTwoTone";
import CreateTwoToneIcon from "@material-ui/icons/CreateTwoTone";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
import ListAltTwoToneIcon from "@material-ui/icons/ListAltTwoTone";
import IconButton from "@material-ui/core/IconButton";

export default function Shortcuts() {
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
        <BookmarksTwoToneIcon style={{ color: "#64748b" }} />
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
        <div className="border-t-4 border-indigo-600">
          <div className="border-b flex py-3 pl-6 pr-4 justify-between items-center bg-gray-200">
            <h3 className="flex-grow text-base align-middle">Shortcuts</h3>
            <IconButton>
              <CreateTwoToneIcon style={{ color: "#64748b" }} />
            </IconButton>
            <IconButton>
              <AddCircleTwoToneIcon style={{ color: "#64748b" }} />
            </IconButton>
          </div>
        </div>
        <div
          className="overflow-scroll flex flex-wrap h-56"
          style={{ maxWidth: "360px" }}
        >
          {_.times(12, (i) => (
            <div
              className="w-1/2 border-b hover:bg-gray-200 cursor-pointer"
              key={i}
            >
              <div class="flex flex-col items-center justify-center px-8 py-6 border-r">
                <div className="bg-indigo-200 p-3 rounded-full mb-3">
                  <ListAltTwoToneIcon style={{ color: "#5A67D8" }} />
                </div>
                <strong className="font-normal">Changelog</strong>
                <small>Latest version: v1.2</small>
              </div>
            </div>
          ))}
        </div>
      </Popover>
    </div>
  );
}
