import React from "react";
import _ from "lodash";
import Messages from "./messages/Messages";
import Shortcuts from "./shortcuts/Shortcuts";
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
        <Shortcuts {...props} />
        <Messages />
      </div>
    </header>
  );
}
