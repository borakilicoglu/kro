import React, { Component, useState, useEffect } from "react";
import CreateTwoToneIcon from "@material-ui/icons/CreateTwoTone";
import CancelTwoToneIcon from "@material-ui/icons/CancelTwoTone";
import SaveTwoToneIcon from "@material-ui/icons/SaveTwoTone";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import Button from "@material-ui/core/Button";

import { withStyles, makeStyles } from "@material-ui/core/styles";

import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

import CloseIcon from "@material-ui/icons/Close";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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
            <Tooltip title="Close">
              <IconButton aria-label="cancel" onClick={handleClose}>
                <CancelTwoToneIcon style={{ color: "#64738b", fontSize: 24 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Close">
              <IconButton aria-label="save" onClick={props.close}>
                <SaveTwoToneIcon style={{ color: "#64738b", fontSize: 24 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Close">
              <IconButton aria-label="delete" onClick={props.close}>
                <DeleteTwoToneIcon style={{ color: "#64738b", fontSize: 24 }} />
              </IconButton>
            </Tooltip>
          </div>
        )}
      </div>
      {edit ? <ContactForm {...props} /> : <ContactDetails {...props} />}
    </div>
  );
};

// Contact.propTypes = {
//   prop: PropTypes,
// };

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Contact);

export default Contact;
