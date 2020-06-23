import React, { Component } from "react";
import classnames from "classnames";
import menuConfig from "../../../../configs/horizontalMenuConfig";
import IconButton from "@material-ui/core/IconButton";
import NotificationsActiveTwoToneIcon from "@material-ui/icons/NotificationsActiveTwoTone";
import AccountMenu from "./AccountMenu";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const NavItem = (item) => (
  <div>
    {item.navLink ? (
      <NavLink
        exact
        to={item.navLink}
        className={`flex items-center py-3 text-xs px-6 transition ease-in duration-200 w-full ${
          !item.icon && "pl-16"
        }`}
        activestyle={{ background: "rgb(20, 24, 35)" }}
      >
        {item.icon}
        {item.title}
        {item.chip && item.chip}
      </NavLink>
    ) : (
      <div>
        <button
          onClick={toggleMenu}
          className={`flex items-center py-3 text-xs px-6 transition ease-in duration-200 w-full ${
            !item.icon && "pl-16"
          }`}
        >
          {item.icon}
          {item.title}
          {item.chip && item.chip}
          <span
            className={`material-icons ml-auto transform text-base ${
              window.location.toString().includes(item.id) && `rotate-90`
            }`}
          >
            chevron_right
          </span>
        </button>
        <div
          className={`transition-all ease-in-out duration-700 ${
            !window.location.toString().includes(item.id) && "hidden"
          }`}
        >
          {item.pages.map((page, i) => {
            return <NavItem {...page} key={i} />;
          })}
        </div>
      </div>
    )}
  </div>
);

const toggleMenu = (e) => {
  e.target.parentElement.lastChild.classList.toggle("hidden");
  e.target.lastChild.classList.toggle("rotate-90");
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
            <a
              href="index.html"
              className="text-white text-3xl font-semibold hover:text-gray-300"
              style={{ lineHeight: "normal" }}
            >
              Nucleo
            </a>
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
