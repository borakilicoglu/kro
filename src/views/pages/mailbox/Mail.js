import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import CustomPopover from "../../../@nucleo/components/CustomPopover";
import LocalPostOfficeTwoToneIcon from "@material-ui/icons/LocalPostOfficeTwoTone";
import LabelTwoToneIcon from "@material-ui/icons/LabelTwoTone";
import LabelImportantTwoToneIcon from "@material-ui/icons/LabelImportantTwoTone";
import StarTwoToneIcon from "@material-ui/icons/StarTwoTone";
import MoreVertTwoToneIcon from "@material-ui/icons/MoreVertTwoTone";
import ArrowDropDownTwoToneIcon from "@material-ui/icons/ArrowDropDownTwoTone";

const useStyles = makeStyles({
  root: {
    width: 20,
    height: 20,
  },
});

const format = (content) => {
  return <div>Content</div>;
};

const avatar = (mail) => {
  let url = require(`../../../assets/images/avatars/${mail.from.avatar}.jpg`);
  return (
    <img src={url} alt={mail.from.contact} className="w-10 rounded-full" />
  );
};

const label = (mail) => {
  return (
    <div className="">
      <span>
        <strong>from:</strong> {mail.from.contact}
      </span>
      <span>
        <strong>to: </strong> {mail.to}
      </span>
      <span>
        <strong>date: </strong> {mail.to}
      </span>
      <span>
        <strong>subject: </strong> {mail.to}
      </span>
    </div>
  );
};

const Mail = ({ mail, labels }) => {
  const classes = useStyles();
  return (
    <div className="w-2/4 border-r h-100">
      {mail && mail ? (
        <div className="flex flex-col justify-center bg-gray-100">
          <div className="border-b flex py-3 px-6 bg-white">
            <CustomPopover
              icon={<LabelTwoToneIcon style={{ color: "#64748b" }} />}
            ></CustomPopover>
            <CustomPopover
              icon={<LabelImportantTwoToneIcon style={{ color: "#64748b" }} />}
            ></CustomPopover>
            <CustomPopover
              icon={<StarTwoToneIcon style={{ color: "#64748b" }} />}
            ></CustomPopover>
            <CustomPopover
              icon={<MoreVertTwoToneIcon style={{ color: "#64748b" }} />}
            ></CustomPopover>
          </div>
          <div className="border-b flex px-6 py-4 bg-white">
            <h3 className="text-2xl font-normal">{mail.subject}</h3>
          </div>
          <div className="p-4">
            <div className="bg-white border py-4 px-6 rounded">
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
              {format(mail.content)}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-full items-center justify-center">
          <LocalPostOfficeTwoToneIcon
            style={{ color: "#64748b", fontSize: "150px" }}
          />
          <p className="text-3xl text-gray-500">Select a mail to read</p>
        </div>
      )}
    </div>
  );
};

export default Mail;
