import React, { Component, useState, useEffect } from "react";
import ContactDetails from "./ContactDetails";

import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
import IconButton from "@material-ui/core/IconButton";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import CreateTwoToneIcon from "@material-ui/icons/CreateTwoTone";
import CancelTwoToneIcon from "@material-ui/icons/CancelTwoTone";
import SaveTwoToneIcon from "@material-ui/icons/SaveTwoTone";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import CloseIcon from "@material-ui/icons/Close";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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

const Contact = (props) => {
  const [edit, setEdit] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setEdit(!edit);
  };

  return (
    <div className="w-full bg-white h-full">
      <div className="absolute right-0 top-0 mt-8 mr-10">
        {!edit ? (
          <div>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
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
              <div className="flex flex-col py-2">
                <StyledButton
                  onClick={handleClose}
                  startIcon={
                    <CreateTwoToneIcon
                      style={{ color: "#64738b", fontSize: 24 }}
                    />
                  }
                >
                  Edit contact
                </StyledButton>
              </div>
            </Popover>
            <Tooltip title="Close">
              <IconButton aria-label="close" onClick={props.close}>
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </div>
        ) : (
          <div>
            <Tooltip title="Cancel">
              <IconButton aria-label="cancel" onClick={handleClose}>
                <CancelTwoToneIcon style={{ color: "#64738b", fontSize: 24 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Save">
              <IconButton aria-label="save" onClick={props.close}>
                <SaveTwoToneIcon style={{ color: "#64738b", fontSize: 24 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton aria-label="delete" onClick={props.close}>
                <DeleteTwoToneIcon style={{ color: "#64738b", fontSize: 24 }} />
              </IconButton>
            </Tooltip>
          </div>
        )}
      </div>
      <ContactDetails contact={props.contact} edit={edit} close={props.close} />
    </div>
  );
};

export default Contact;
