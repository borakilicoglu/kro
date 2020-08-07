import React from "react";
import _ from "lodash";
import Messages from "./messages/Messages";
import Shortcuts from "./shortcuts/Shortcuts";
import Search from "./search/Search";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export default function Navbar(props) {
  return (
    <header className="bg-white shadow">
      <div className="w-1/2">
        <IconButton onClick={() => props.toggle()}>
          <MenuIcon />
        </IconButton>
        {props.fixed ? "true" : "false"}
      </div>
      <div className="w-1/2 flex justify-end">
        <Search {...props} />
        <Shortcuts />
        <Messages />
      </div>
    </header>
  );
}
