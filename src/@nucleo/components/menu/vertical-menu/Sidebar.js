import React, { Component, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import classnames from "classnames";

import menuConfig from "../../../../configs/horizontalMenuConfig";
import NotificationsActiveTwoToneIcon from "@material-ui/icons/NotificationsActiveTwoTone";
import AccountMenu from "./AccountMenu";

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
  listItem: {
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
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
    window.location.pathname == item.navLink && setOpen(true);
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
          className={classes.listItem}
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
          <ListItem button onClick={handleClick} className={classes.listItem}>
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
              {item.pages.map((page, i) => {
                return <NavItem {...page} key={i} />;
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
    let { collapsed } = this.props;
    return (
      <aside
        className={classnames(
          `theme-dark bg-sidebar shadow-xl overflow-scroll`,
          {
            collapsed: collapsed,
          }
        )}
      >
        <div className="py-4 pl-6 pr-4 w-full flex items-center">
          <div className="logo flex-grow">
            <NavLink
              to="/"
              className="text-white text-3xl font-semibold hover:text-gray-300 align-middle"
            >
              NUCLEO
            </NavLink>
          </div>

          <div className="align-middle">
            <IconButton>
              <NotificationsActiveTwoToneIcon style={{ color: "#96a6ba" }} />
            </IconButton>
          </div>

          <div className="align-middle">
            <AccountMenu />
          </div>
        </div>

        <div className="p-4 px-6 flex items-center w-full flex-col mb-4">
          <img
            alt=""
            src="https://davidgrzyb.com/storage/david-grzyb-animoji.jpg"
            className="rounded-full w-24"
          />

          <div className="mt-4 text-center">
            <div className="name">Stefan Schmitz</div>
            <div className="email text-secondary">
              stefan.schmitz@company.com
            </div>
          </div>
        </div>

        {menuConfig.map((value, index) => {
          return (
            <div className="py-4" key={index}>
              <h3 className="font-semibold font-xs text-indigo-400 uppercase px-6">
                {value.name}
              </h3>
              <small className="text-gray-600 px-6">{value.desc}</small>
              <nav className="text-gray-400 text-base pt-3">
                {value.pages.map((page, index) => {
                  return <NavItem {...page} key={index} />;
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
