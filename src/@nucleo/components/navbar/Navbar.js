import React from "react";
import _ from "lodash";
import Messages from "./messages/Messages";
import Search from "./search/Search";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export default function Navbar(props) {
  return (
    <header className="w-full flex items-center bg-white hidden sm:flex shadow z-50 relative">
      <div className="w-1/2">
        <IconButton onClick={() => props.toggle()}>
          <MenuIcon />
        </IconButton>
      </div>
      <div className="w-1/2 flex justify-end">
        <Search {...props} />

        <IconButton>
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
        </IconButton>

        <Messages />
      </div>
    </header>
  );
}
