import React, { Component } from "react";
import classnames from "classnames";
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
            <button className="w-10 p-2">
              <svg
                x="1008"
                y="1248"
                viewBox="0 0 24 24"
                fill="#96a6ba"
                height="100%"
                width="100%"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path
                  opacity=".3"
                  d="M12 6.5c-2.49 0-4 2.02-4 4.5v6h8v-6c0-2.48-1.51-4.5-4-4.5z"
                ></path>
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-2 6H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2a8.445 8.445 0 013.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43a8.495 8.495 0 013.54 6.42z"></path>
              </svg>
            </button>
          </div>

          <div className="align-middle">
            <button className="w-10 p-2">
              <div className="relative">
                <svg
                  x="672"
                  y="0"
                  viewBox="0 0 24 24"
                  fill="#96a6ba"
                  height="100%"
                  width="100%"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                >
                  <path
                    opacity=".3"
                    d="M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33A7.95 7.95 0 0020 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z"
                  ></path>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"></path>
                </svg>
                <span className="status online bg-green-500 w-2 absolute h-2 bottom-0 right-0 rounded-full"></span>
              </div>
            </button>
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
