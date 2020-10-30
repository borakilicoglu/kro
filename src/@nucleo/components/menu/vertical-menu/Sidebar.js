import React, { Component, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import menuConfig from "../../../../configs/horizontalMenuConfig";
import AccountMenu from "./AccountMenu";
import Notifications from "./Notifications";

import { makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  listItemIcon: {
    minWidth: "24px",
    marginRight: "16px",
  },
  listItemLight: {
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
    "&:hover": {
      background: "#edf2f7",
    },
    "&.active": {
      background: "#e2e8f0",
    },
  },
  listItemDark: {
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
    "&:hover": {
      background: "#2d3748",
    },
    "&.active": {
      background: "#000",
    },
  },
  listItemText: {
    marginBottom: "0px",
    marginTop: "0px",
    "& span": {
      fontSize: "13px",
    },
  },
}));

const NavItem = (item) => {
  const { tasks } = useSelector((state) => state.tasks);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(false);
    if (item.title.match(/\s/g)) {
      window.location.pathname.includes(
        item.title.substr(0, item.title.indexOf(" ")).toLowerCase()
      ) && setOpen(true);
    } else {
      window.location.pathname.includes(item.title.toLowerCase()) &&
        setOpen(true);
    }
    return () => {};
  }, [item]);

  return (
    <div>
      {item.navLink ? (
        <ListItem
          button
          component={NavLink}
          exact
          to={item.navLink}
          className={
            item.sidebarDark ? classes.listItemDark : classes.listItemLight
          }
        >
          <ListItemIcon className={classes.listItemIcon}>
            {item.icon}
          </ListItemIcon>

          <div className="flex-grow">
            <ListItemText
              primary={item.title}
              className={classes.listItemText}
            />
            {tasks.length > 0 && item.title == "Tasks" ? (
              <div className="font-base text-xs text-gray-500">
                {tasks.filter((task) => task.completed == false).length}{" "}
                remaining tasks
              </div>
            ) : (
              <div className="font-base text-xs text-gray-500">
                {item.desc && item.desc}
              </div>
            )}
          </div>

          {item.chip && <div>{item.chip}</div>}
        </ListItem>
      ) : (
        <div>
          <ListItem
            button
            onClick={handleClick}
            className={
              item.sidebarDark ? classes.listItemDark : classes.listItemLight
            }
          >
            <ListItemIcon className={classes.listItemIcon}>
              {item.icon}
            </ListItemIcon>
            <div className="flex-grow">
              <ListItemText
                primary={item.title}
                className={classes.listItemText}
              />
              <div className="font-base text-xs text-gray-500">
                {item.desc && item.desc}
              </div>
            </div>

            {item.chip && <div>{item.chip}</div>}
            {open ? <ExpandMore /> : <ChevronRight />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.pages.map((page, index) => {
                return (
                  <NavItem
                    {...page}
                    key={index}
                    sidebarDark={item.sidebarDark}
                  />
                );
              })}
            </List>
          </Collapse>
        </div>
      )}
    </div>
  );
};

export class Sidebar extends Component {
  render() {
    let { collapsed, activeLayout, sidebarDark } = this.props;
    let asideClass = classNames({
      "overflow-scroll": true,
      "bg-gray-900 shadow-xl": sidebarDark,
      "bg-white border-r": !sidebarDark,
      collapsed: collapsed,
    });

    let logoPart = classNames({
      "w-full flex items-center pl-6 pr-4": true,
      "border-b": activeLayout == "basic",
    });

    let textColor = classNames({
      "text-white": sidebarDark,
      "text-gray-500": !sidebarDark,
    });

    return (
      <aside className={asideClass}>
        <div className={logoPart} style={{ minHeight: "64px" }}>
          <NavLink
            to="/"
            className="logo flex items-center flex-grow text-2xl font-semibold align-middle"
          >
            {!sidebarDark && (
              <span
                className="h-6 w-6 rounded-full inline-block mr-2"
                style={{ backgroundColor: "rgb(246, 0, 86)" }}
              ></span>
            )}
            <span style={{ color: sidebarDark ? "rgb(246, 0, 86)" : "" }}>
              NUCLEO
            </span>
          </NavLink>
          {activeLayout && activeLayout !== "basic" && (
            <React.Fragment>
              <div className="align-middle">
                <Notifications />
              </div>

              <div className="align-middle">
                <AccountMenu />
              </div>
            </React.Fragment>
          )}
        </div>

        {activeLayout && activeLayout !== "basic" && (
          <div className="p-4 px-6 flex items-center w-full flex-col mb-4">
            <img
              alt=""
              src="https://davidgrzyb.com/storage/david-grzyb-animoji.jpg"
              className="rounded-full w-24"
            />

            <div className="mt-4 text-center">
              <div
                className={`${sidebarDark ? "text-white" : "text-gray-500"}`}
              >
                Stefan Schmitz
              </div>
              <div
                className={`${sidebarDark ? "text-gray-500" : "text-gray-500"}`}
              >
                stefan.schmitz@company.com
              </div>
            </div>
          </div>
        )}

        {menuConfig.map((value, index) => {
          return (
            <div
              className={`${
                index == 0 && activeLayout == "basic" ? "pt-8 pb-4" : "py-4"
              }`}
              key={index}
            >
              <h3 className="font-semibold font-xs text-indigo-500 uppercase px-6">
                {value.name}
              </h3>
              <small className="text-gray-600 px-6">{value.desc}</small>
              <nav
                className={`text-base pt-3 ${
                  sidebarDark ? "text-gray-400" : "text-gray-700"
                }`}
              >
                {value.pages.map((page, index) => {
                  return (
                    <NavItem {...page} key={index} sidebarDark={sidebarDark} />
                  );
                })}
              </nav>
            </div>
          );
        })}
      </aside>
    );
  }
}

export default Sidebar;
