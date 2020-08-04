import React, { Component } from "react";
import classnames from "classnames";
import menuConfig from "../../../../configs/horizontalMenuConfig";
import IconButton from "@material-ui/core/IconButton";
import NotificationsActiveTwoToneIcon from "@material-ui/icons/NotificationsActiveTwoTone";
import AccountMenu from "./AccountMenu";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

function NavItem(item) {
  // const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      {item.navLink ? (
        <ListItem button>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItem>
      ) : (
        <div>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
            {open ? <ExpandMore /> : <ChevronRight />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
            </List>
          </Collapse>
        </div>
      )}
    </div>
  );
  // <div>
  //   {item.navLink ? (
  //     <NavLink
  //       exact
  //       to={item.navLink}
  //       className={`flex items-center py-3 text-xs px-6 transition ease-in duration-200 w-full ${
  //         !item.icon && "pl-16"
  //       }`}
  //       activestyle={{ background: "rgb(20, 24, 35)" }}
  //     >
  //       <div>{item.icon}</div>
  //       <div className="flex-grow">
  //         <p className="text-left">{item.title}</p>
  //         <small className="font-base">{item.desc && item.desc}</small>
  //       </div>
  //       {item.chip && <div>{item.chip}</div>}
  //     </NavLink>
  //   ) : (
  //     <div>
  //       <button
  //         onClick={toggleMenu}
  //         className={`flex items-center py-3 text-xs px-6 transition ease-in duration-200 w-full ${
  //           !item.icon && "pl-16"
  //         }`}
  //       >
  //         <div>{item.icon}</div>
  //         <div className="flex-grow">
  //           <p className="text-left">{item.title}</p>
  //           <small className="font-base">{item.desc && item.desc}</small>
  //         </div>
  //         {item.chip && <div>{item.chip}</div>}
  //         <span
  //           className={`material-icons ml-auto transform text-base ${
  //             window.location.toString().includes(item.id) && `rotate-90`
  //           }`}
  //         >
  //           chevron_right
  //         </span>
  //       </button>
  //       <div
  //         className={`transition-all ease-in-out duration-700 ${
  //           !window.location.toString().includes(item.id) && "hidden"
  //         }`}
  //       >
  //         {item.pages.map((page, i) => {
  //           return <NavItem {...page} key={i} />;
  //         })}
  //       </div>
  //     </div>
  //   )}
  // </div>
}

const toggleMenu = (e) => {
  e.currentTarget.parentElement.lastChild.classList.toggle("hidden");
  e.currentTarget.parentElement.lastChild.classList.toggle("rotate-90");
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
              className="text-white text-3xl font-semibold hover:text-gray-300"
            >
              Nucleo
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
