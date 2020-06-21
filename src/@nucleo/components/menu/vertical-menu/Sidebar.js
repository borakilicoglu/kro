import React, { Component } from "react";
import classnames from "classnames";
import menuConfig from "../../../../configs/horizontalMenuConfig";
import IconButton from "@material-ui/core/IconButton";
import NotificationsActiveTwoToneIcon from "@material-ui/icons/NotificationsActiveTwoTone";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

export class Sidebar extends Component {
  toggleMenu(e) {
    e.target.parentElement.lastChild.classList.toggle("hidden");
  }

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
            <IconButton className="relative">
              <AccountCircleTwoToneIcon style={{ color: "#96a6ba" }} />
              <span
                className="status online bg-green-500 w-2 absolute h-2 rounded-full"
                style={{ bottom: "8px", right: "8px" }}
              ></span>
            </IconButton>
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
                  return (
                    <div>
                      {page.navLink ? (
                        <NavLink
                          key={index}
                          exact
                          to={page.navLink}
                          className="flex items-center py-3 text-xs px-6 transition ease-in duration-200"
                          activestyle={{ background: "rgb(20, 24, 35)" }}
                        >
                          {page.icon}
                          {page.title}
                          {page.chip && page.chip}
                        </NavLink>
                      ) : (
                        <div>
                          <button
                            key={index}
                            className="flex items-center py-3 text-xs px-6 transition ease-in duration-200 w-full"
                          >
                            {page.icon}
                            {page.title}
                            {page.chip && page.chip}
                            <span class="material-icons ml-auto">
                              chevron_right
                            </span>
                          </button>
                          {page.childPages.map((childPage, index) => {
                            return (
                              <NavLink
                                key={index}
                                exact
                                to={childPage.navLink}
                                className="flex items-center py-3 text-xs px-6 transition ease-in duration-200 pl-16"
                                activestyle={{ background: "rgb(20, 24, 35)" }}
                              >
                                {childPage.icon}
                                {childPage.title}
                                {childPage.chip && childPage.chip}
                              </NavLink>
                            );
                          })}
                        </div>
                      )}
                    </div>
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
