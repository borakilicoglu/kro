import React from "react";
import SaveTwoToneIcon from "@material-ui/icons/SaveTwoTone";
import AssessmentTwoToneIcon from "@material-ui/icons/AssessmentTwoTone";
import TuneTwoToneIcon from "@material-ui/icons/TuneTwoTone";

export default function PageHeader(props) {
  return (
    <div className="flex items-center justify-between w-full my-4 px-4 xs:pr-0">
      <div className="mr-6">
        <h2 className="m-0 text-3xl font-semibold">{props.title}</h2>
        <div className="text-secondary tracking-tight">{props.desc}</div>
      </div>
      <div className="flex items-center">
        <button className="border border-gray-400 ml-2 hover:bg-gray-300 text-gray-800 font-normal py-2 px-4 rounded inline-flex items-center">
          <SaveTwoToneIcon style={{ color: "#64748b" }} fontSize="small" />
          <span className="ml-2">Export</span>
        </button>

        <button className="border border-gray-400 ml-2 hover:bg-gray-300 text-gray-800 font-normal py-2 px-4 rounded inline-flex items-center">
          <AssessmentTwoToneIcon
            style={{ color: "#64748b" }}
            fontSize="small"
          />
          <span className="ml-2">Reports</span>
        </button>

        <button className="border border-gray-400 ml-2 hover:bg-gray-300 text-gray-800 font-normal py-2 px-4 rounded inline-flex items-center">
          <TuneTwoToneIcon style={{ color: "#64748b" }} fontSize="small" />
          <span className="ml-2">Settings</span>
        </button>

        {/* <div className="hidden xs:flex">
          <button
            aria-haspopup="true"
            className="mat-menu-trigger"
            ng-reflect-menu="[object Object]"
          >
            <span className="flex">
              <svg
                x="480"
                y="1200"
                viewBox="0 0 24 24"
                fit=""
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
              </svg>
            </span>
          </button>
        </div> */}
      </div>
    </div>
  );
}
