import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import CustomPopover from "../../../@nucleo/components/CustomPopover";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LabelTwoToneIcon from "@material-ui/icons/LabelTwoTone";
import LabelImportantTwoToneIcon from "@material-ui/icons/LabelImportantTwoTone";
import StarTwoToneIcon from "@material-ui/icons/StarTwoTone";
import MoreVertTwoToneIcon from "@material-ui/icons/MoreVertTwoTone";
import ArrowDropDownTwoToneIcon from "@material-ui/icons/ArrowDropDownTwoTone";
import EmailTwoToneIcon from "@material-ui/icons/EmailTwoTone";
import ErrorTwoToneIcon from "@material-ui/icons/ErrorTwoTone";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";

import { labels } from "../../../configs/mailboxConfig";

const useStyles = makeStyles({
  root: {
    width: 20,
    height: 20,
  },
});

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
    fontFamily: "Inter",
  },
  label: {
    textTransform: "none",
  },
})(Button);

const avatar = (mail) => {
  let url = require(`../../../assets/images/avatars/${mail.from.avatar}.jpg`);
  return (
    <img src={url} alt={mail.from.contact} className="w-10 rounded-full" />
  );
};

const label = (mail) => {
  return (
    <div className="flex flex-col p-4">
      <span>
        <strong>from:</strong> {mail.from.contact}
      </span>
      <span>
        <strong>to: </strong> {mail.to}
      </span>
      <span>
        <strong>date: </strong> {mail.date}
      </span>
      <span>
        <strong>subject: </strong> {mail.subject}
      </span>
    </div>
  );
};

const menu = () => {
  return (
    <div className="flex flex-col py-2">
      <StyledButton
        startIcon={
          <EmailTwoToneIcon style={{ color: "#64738b", fontSize: 24 }} />
        }
      >
        Mark as read
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
  );
};

const Mail = ({ mail }) => {
  const classes = useStyles();
  return mail && mail ? (
    <div className="w-2/4 overflow-scroll relative bg-gray-100">
      <div className="flex flex-col justify-center relative sticky top-0 z-40">
        <div className="border-b flex py-3 px-6 bg-white">
          <CustomPopover
            icon={<LabelTwoToneIcon style={{ color: "#64748b" }} />}
          ></CustomPopover>
          <CustomPopover
            icon={
              <LabelImportantTwoToneIcon
                style={{ color: mail.important ? "#f56565" : "#64748b" }}
              />
            }
          ></CustomPopover>
          <CustomPopover
            icon={
              <StarTwoToneIcon
                style={{ color: mail.starred ? "#f56565" : "#64748b" }}
              />
            }
          ></CustomPopover>
          <CustomPopover
            icon={<MoreVertTwoToneIcon style={{ color: "#64748b" }} />}
            content={menu()}
          ></CustomPopover>
        </div>
        <div className="border-b px-6 py-4 bg-white">
          <h3 className="text-2xl font-normal">{mail.subject}</h3>

          {labels.map((label, index) => {
            return (
              mail.labels.find((element) => element == label.id) && (
                <span
                  className={`text-white bg-${label.color}-500 text-xs rounded-full py-1 px-2 mr-2`}
                  key={index}
                >
                  {label.title}
                </span>
              )
            );
          })}
        </div>
      </div>

      <div className="h-px">
        <div className="flex flex-col justify-center">
          <div className="m-3 bg-white border py-4 px-6 rounded">
            <div className="flex items-center py-4">
              {avatar(mail)}
              <span className="ml-4">
                <strong>
                  {mail.from.contact
                    .slice(0, mail.from.contact.lastIndexOf("<"))
                    .trim()}
                </strong>
                <span className="flex items-center">
                  to <strong className="ml-2">me</strong>
                  <div>
                    <CustomPopover
                      style={classes.root}
                      size="small"
                      icon={
                        <ArrowDropDownTwoToneIcon
                          fontSize="inherit"
                          style={{ color: "#64748b" }}
                        />
                      }
                      content={label(mail)}
                    ></CustomPopover>
                  </div>
                </span>
              </span>
            </div>
            <p className="whitespace-pre-wrap">{mail.content}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-2/4 bg-gray-100">
      <div className="flex flex-col h-full items-center justify-center">
        <MailOutlineIcon style={{ color: "#64748b", fontSize: "120px" }} />
        <p className="text-2xl text-gray-500">Select a mail to read</p>
      </div>
    </div>
  );
};

export default Mail;
