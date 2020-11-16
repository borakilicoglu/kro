import React from "react";
import classNames from "classnames";
import _ from "lodash";

import Messages from "./messages/Messages";
import Shortcuts from "./shortcuts/Shortcuts";
import Search from "./search/Search";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import AccountMenu from "../menu/vertical-menu/AccountMenu";
import Notifications from "../menu/vertical-menu/Notifications";

export default function Navbar(props) {
  let { activeLayout } = props;
  let navbarClass = classNames({
    "bg-white w-full justify-between flex relative": true,
    shadow: activeLayout !== "basic",
    "border-b": activeLayout == "basic",
  });
  return (
    <header className={navbarClass}>
      <IconButton onClick={() => props.toggle()}>
        <MenuIcon />
      </IconButton>

      <div className="flex">
        <Search {...props} />
        <Shortcuts />
        <Messages />
        {console.log(activeLayout)}
        {activeLayout == "basic" || activeLayout == "classic" ? (
          <React.Fragment>
            <Notifications color={"#64748b"} />
            <AccountMenu color={"#64748b"} />
          </React.Fragment>
        ) : null}
      </div>
    </header>
  );
}
