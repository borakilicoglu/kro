import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import Popover from "@material-ui/core/Popover";
import { toggleMarkAsRead } from "../../../redux/actions/mailbox";

import { IconButton, Button } from "@material-ui/core";
import MoreVertTwoToneIcon from "@material-ui/icons/MoreVertTwoTone";
import EmailTwoToneIcon from "@material-ui/icons/EmailTwoTone";
import ErrorTwoToneIcon from "@material-ui/icons/ErrorTwoTone";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";

const StyledButton = withStyles({
  root: {
    fontFamily: "Inter",
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

const MailMenu = ({ mail }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const [state, setState] = React.useState();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    console.log("Mail changed " + mail.unread);
    setState(mail);
    return () => {};
  }, [mail]);

  return (
    <div className="mr-2">
      <IconButton onClick={handleClick} size="small">
        <MoreVertTwoToneIcon style={{ color: "#64748b" }} />
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
            onClick={() => dispatch(toggleMarkAsRead(state.id))}
            startIcon={
              <EmailTwoToneIcon style={{ color: "#64738b", fontSize: 24 }} />
            }
          >
            {state && state.unread ? (
              <span>Mark as read</span>
            ) : (
              <span>Mark as unread</span>
            )}
          </StyledButton>
          <StyledButton
            startIcon={
              <ErrorTwoToneIcon style={{ color: "#64738b", fontSize: 24 }} />
            }
          >
            Spam
          </StyledButton>
          <StyledButton
            startIcon={
              <DeleteTwoToneIcon style={{ color: "#64738b", fontSize: 24 }} />
            }
          >
            Delete
          </StyledButton>
        </div>
      </Popover>
    </div>
  );
};

export default MailMenu;
