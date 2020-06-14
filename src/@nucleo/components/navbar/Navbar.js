import React from "react";
import _ from "lodash";
import Popup from "../popup/Popup.js";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

export default function Navbar(props) {
  return (
    <header className="w-full flex items-center bg-white py-2 px-6 hidden sm:flex shadow z-50">
      <div className="w-1/2">
        <button
          onClick={() => props.toggle()}
          className="navigation-toggle-button mat-icon-button mat-button-base align-middle p-2"
        >
          <svg
            className="w-6"
            x="672"
            y="1152"
            viewBox="0 0 24 24"
            fill="#64748b"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </button>
      </div>
      <div className="relative w-1/2 flex justify-end">
        {/* <button className="mat-focus-indicator search-toggle-open mat-icon-button mat-button-base ng-tns-c100-2 ng-star-inserted p-3"> */}
        <IconButton aria-label="delete">
          <svg
            className="w-6"
            x="1104"
            y="1584"
            viewBox="0 0 24 24"
            fit=""
            fill="#64748b"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </IconButton>
        {/* </button> */}
        <button className="mat-focus-indicator search-toggle-open mat-icon-button mat-button-base ng-tns-c100-2 ng-star-inserted p-3">
          <svg
            className="w-6"
            x="912"
            y="192"
            viewBox="0 0 24 24"
            fit=""
            fill="#64748b"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path d="M19 1H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 4H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2zm0 14.97l-5-2.15-5 2.15V7h10v12.97z"></path>
            <path opacity=".3" d="M5 19.97l5-2.15 5 2.15V7H5z"></path>
          </svg>
        </button>

        <Popup
          styles={`p-3`}
          button={
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
          }
          content={
            <div className="origin-top-right absolute right-0 w-64 rounded-md shadow-lg border-t-4 border-indigo-600">
              <div className="rounded-md bg-white shadow-xs">
                <div className="header py-4 px-6 flex justify-between bg-gray-200 border-b">
                  <h3 className="font-semibold">Messages</h3>
                  <button>
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
                  </button>
                </div>
                <div className="h-56 overflow-scroll">
                  {_.times(4, (i) => (
                    <div
                      className="flex py-4 px-6 border-b hover:bg-gray-200"
                      key={i}
                    >
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
                        <small className="text-gray-600">
                          Jun 13, 12:12 PM
                        </small>
                      </div>
                      <div>
                        <Tooltip title="Add" aria-label="add">
                          <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                        </Tooltip>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }
        />
      </div>
    </header>
  );
}
