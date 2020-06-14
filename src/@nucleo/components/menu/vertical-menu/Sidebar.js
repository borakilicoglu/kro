import React, { Component } from "react";
import classnames from "classnames";
import IconButton from "@material-ui/core/IconButton";
import NotificationsActiveTwoToneIcon from "@material-ui/icons/NotificationsActiveTwoTone";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

export class Sidebar extends Component {
  render() {
    let { collapsed } = this.props;
    return (
      <aside
        className={classnames(
          `theme-dark bg-sidebar shadow-xl overflow-scroll`,
          {
            collapsed: collapsed === true,
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
                style={{ bottom: "12px", right: "12px" }}
              ></span>
            </IconButton>
          </div>
        </div>

        <div className="p-4 px-6 flex items-center w-full flex-col mb-3">
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

        <div className="py-4">
          <h3 className="font-semibold font-xs text-indigo-400 uppercase px-6">
            Dashboards
          </h3>
          <small className="text-gray-600 px-6">Unique dashboard designs</small>
          <nav className="text-gray-400 text-base font-thin pt-3">
            <NavLink
              to="/"
              exact
              className="flex items-center py-3 text-xs px-6 transition ease-in duration-200"
              activeStyle={{ background: "rgb(20, 24, 35)" }}
            >
              <svg
                className="w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fit=""
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              Finance
            </NavLink>
            <NavLink
              to="/analytics"
              className="flex items-center py-3 text-xs px-6 transition ease-in duration-200"
              activeStyle={{ background: "rgb(20, 24, 35)" }}
            >
              <svg
                className="w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fit=""
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                ></path>
              </svg>
              Analytics
            </NavLink>
            <NavLink
              to="/crypto"
              className="flex items-center py-3 text-xs px-6 transition ease-in duration-200"
              activeStyle={{ background: "rgb(20, 24, 35)" }}
            >
              <svg
                className="w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fit=""
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Crypto
            </NavLink>
          </nav>
        </div>

        <div className="py-4">
          <h3 className="font-semibold font-xs text-indigo-400 uppercase px-6">
            Applications
          </h3>
          <small className="text-gray-600 px-6">
            Custom made application designs
          </small>
          <nav className="text-gray-400 text-base font-thin pt-3">
            <NavLink
              to="/calendar"
              exact
              className="flex items-center py-3 text-xs px-6 transition ease-in duration-200"
              activeStyle={{ background: "rgb(20, 24, 35)" }}
            >
              <svg
                className="w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fit=""
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              <div className="flex flex-col">
                Calendar
                <small>3 upcoming events</small>
              </div>
            </NavLink>
            <NavLink
              to="/contacts"
              exact
              className="flex items-center py-3 text-xs px-6 transition ease-in duration-200"
              activeStyle={{ background: "rgb(20, 24, 35)" }}
            >
              <svg
                className="w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fit=""
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                ></path>
              </svg>
              Contacts
            </NavLink>
            <NavLink
              to="/ecommerce"
              exact
              className="flex items-center py-3 text-xs px-6 transition ease-in duration-200"
              activeStyle={{ background: "rgb(20, 24, 35)" }}
            >
              <svg
                className="w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fit=""
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              ECommerce
            </NavLink>
            <NavLink
              to="/mailbox"
              exact
              className="flex items-center py-3 text-xs px-6 transition ease-in duration-200"
              activeStyle={{ background: "rgb(20, 24, 35)" }}
            >
              <svg
                className="w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fit=""
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Mailbox
            </NavLink>
            <NavLink
              to="/tasks"
              exact
              className="flex items-center py-3 text-xs px-6 transition ease-in duration-200"
              activeStyle={{ background: "rgb(20, 24, 35)" }}
            >
              <svg
                className="w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fit=""
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Tasks
            </NavLink>
          </nav>
        </div>

        <div className="py-4">
          <h3 className="font-semibold font-xs text-indigo-400 uppercase px-6">
            Pages
          </h3>
          <small className="text-gray-600 px-6">
            Custom made application designs
          </small>
          <nav className="text-gray-400 text-base font-thin pt-3">
            <NavLink
              to="/calendar"
              exact
              className="flex items-center py-3 text-xs px-6 transition ease-in duration-200"
              activeStyle={{ background: "rgb(20, 24, 35)" }}
            >
              <svg
                className="w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fit=""
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              <div className="flex flex-col">
                Calendar
                <small>3 upcoming events</small>
              </div>
            </NavLink>
            <NavLink
              to="/contacts"
              exact
              className="flex items-center py-3 text-xs px-6 transition ease-in duration-200"
              activeStyle={{ background: "rgb(20, 24, 35)" }}
            >
              <svg
                className="w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fit=""
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                ></path>
              </svg>
              Contacts
            </NavLink>
            <NavLink
              to="/ecommerce"
              exact
              className="flex items-center py-3 text-xs px-6 transition ease-in duration-200"
              activeStyle={{ background: "rgb(20, 24, 35)" }}
            >
              <svg
                className="w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fit=""
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              ECommerce
            </NavLink>
            <NavLink
              to="/mailbox"
              exact
              className="flex items-center py-3 text-xs px-6 transition ease-in duration-200"
              activeStyle={{ background: "rgb(20, 24, 35)" }}
            >
              <svg
                className="w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fit=""
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Mailbox
            </NavLink>
            <NavLink
              to="/tasks"
              exact
              className="flex items-center py-3 text-xs px-6 transition ease-in duration-200"
              activeStyle={{ background: "rgb(20, 24, 35)" }}
            >
              <svg
                className="w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fit=""
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Tasks
            </NavLink>
          </nav>
        </div>
      </aside>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
