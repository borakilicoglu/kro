import React from "react";

import CustomPopover from "../../../@nucleo/components/CustomPopover";
import LocalPostOfficeTwoToneIcon from "@material-ui/icons/LocalPostOfficeTwoTone";

import LabelTwoToneIcon from "@material-ui/icons/LabelTwoTone";
import LabelImportantTwoToneIcon from "@material-ui/icons/LabelImportantTwoTone";
import StarTwoToneIcon from "@material-ui/icons/StarTwoTone";
import MoreVertTwoToneIcon from "@material-ui/icons/MoreVertTwoTone";

const Mail = ({ mail, labels }) => {
  return (
    <div className="w-2/4 border-r h-100">
      {mail && mail ? (
        <div className="flex flex-col justify-center">
          <div className="border-b flex py-3 px-6">
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
          <div className="border-b flex px-6 py-4">
            <h3 className="text-2xl font-normal">{mail.subject}</h3>
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
