import React from "react";
import _ from "lodash";
import Messages from "./messages/Messages";
import Shortcuts from "./shortcuts/Shortcuts";
import Search from "./search/Search";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import AccountMenu from "../menu/vertical-menu/AccountMenu";
import Notifications from "../menu/vertical-menu/Notifications";

export default function Navbar(props) {
  console.log(props);
  return (
    <header className="bg-white shadow w-full justify-between flex relative">
      <IconButton onClick={() => props.toggle()}>
        <MenuIcon />
      </IconButton>

      <div className="flex">
        <Search {...props} />
        <Shortcuts />
        <Messages />
        {props.activeLayout && props.activeLayout == "basic" && (
          <React.Fragment>
            <Notifications />
            <AccountMenu />
          </React.Fragment>
        )}
      </div>
    </header>
  );
}
