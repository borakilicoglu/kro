import React, { Component } from "react";
import classnames from "classnames";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Chip from "@material-ui/core/Chip";
import NotificationsActiveTwoToneIcon from "@material-ui/icons/NotificationsActiveTwoTone";
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined";
import PieChartOutlinedIcon from "@material-ui/icons/PieChartOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import MailOutlinedIcon from "@material-ui/icons/MailOutlined";

import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import menuConfig from "../../../../configs/horizontalMenuConfig";

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
                {value.childs.map((child, index) => {
                  return (
                    <NavLink
                      key={index}
                      to={child.navLink}
                      className="flex items-center py-3 text-xs px-6 transition ease-in duration-200"
                      activestyle={{ background: "rgb(20, 24, 35)" }}
                    >
                      {child.icon}
                      {child.title}
                    </NavLink>
                  );
                })}
              </nav>
            </div>
          );
        })}

        {/* <div className="py-4">
          <h3 className="font-semibold font-xs text-indigo-400 uppercase px-6">
            Dashboards
          </h3>
          <small className="text-gray-600 px-6">Unique dashboard designs</small>
          <nav className="text-gray-400 text-base pt-3">
            <NavLink
              to="/"
              exact
              className="flex items-center py-3 text-xs px-6 transition ease-in duration-200"
              activestyle={{ background: "rgb(20, 24, 35)" }}
            >
              <PaymentOutlinedIcon className="mr-4" />
              Finance
            </NavLink>
            <NavLink
              to="/analytics"
              className="flex items-center py-3 text-xs px-6 transition ease-in duration-200"
              activestyle={{ background: "rgb(20, 24, 35)" }}
            >
              <PieChartOutlinedIcon className="mr-4" />
              Analytics
            </NavLink>
            <NavLink
              to="/crypto"
              className="flex items-center py-3 text-xs px-6 transition ease-in duration-200"
              activestyle={{ background: "rgb(20, 24, 35)" }}
            >
              <MonetizationOnOutlinedIcon className="mr-4" />
              Crypto
            </NavLink>
          </nav>
        </div> */}

        {/* <div className="py-4">
          <h3 className="font-semibold font-xs text-indigo-400 uppercase px-6">
            Applications
          </h3>
          <small className="text-gray-600 px-6">
            Custom made application designs
          </small>
          <nav className="text-gray-400 text-base pt-3">
            <NavLink
              to="/calendar"
              exact
              className="flex items-center py-3 text-xs px-6 transition ease-in duration-200"
              activestyle={{ background: "rgb(20, 24, 35)" }}
            >
              <CalendarTodayOutlinedIcon className="mr-4" />
              <div className="flex flex-col">
                Calendar
                <small>3 upcoming events</small>
              </div>
            </NavLink>
            <NavLink
              to="/contacts"
              exact
              className="flex items-center py-3 text-xs px-6 transition ease-in duration-200"
              activestyle={{ background: "rgb(20, 24, 35)" }}
            >
              <GroupOutlinedIcon className="mr-4" />
              Contacts
            </NavLink>
            <div>
              <button
                onClick={this.toggleMenu}
                className="flex items-center py-3 text-xs px-6 transition ease-in duration-200 w-full"
                activestyle={{ background: "rgb(20, 24, 35)" }}
              >
                <ShoppingCartOutlinedIcon className="mr-4" />
                ECommerce
                <ChevronRightIcon className="ml-auto" />
              </button>
              <div className="hidden">
                <NavLink
                  to="/ecommerce/inventory"
                  exact
                  className="flex items-center py-3 text-xs px-6 pl-16 py-4 transition ease-in duration-200"
                  activestyle={{ background: "rgb(20, 24, 35)" }}
                >
                  Inventory
                </NavLink>
              </div>
            </div>
            <NavLink
              to="/mailbox"
              exact
              className="flex items-center py-3 text-xs px-6 transition ease-in duration-200"
              activestyle={{ background: "rgb(20, 24, 35)" }}
            >
              <MailOutlinedIcon className="mr-4" />
              Mailbox
              <Chip
                size="small"
                label="27"
                className="ml-auto"
                style={{
                  background: "rgb(233, 30, 99)",
                  color: "#fff",
                  height: "20px",
                  fontSize: "10px",
                  fontWeight: "900",
                }}
              />
            </NavLink>
            <NavLink
              to="/tasks"
              exact
              className="flex items-center py-3 text-xs px-6 transition ease-in duration-200"
              activestyle={{ background: "rgb(20, 24, 35)" }}
            >
              <CheckCircleOutlinedIcon className="mr-4" />
              Tasks
            </NavLink>
          </nav>
        </div> */}

        {/* <div className="py-4">
          <h3 className="font-semibold font-xs text-indigo-400 uppercase px-6">
            Pages
          </h3>
          <small className="text-gray-600 px-6">Custom made page designs</small>
          <nav className="text-gray-400 text-base pt-3">
            <NavLink
              to="/calendar"
              exact
              className="flex items-center py-3 text-xs px-6 transition ease-in duration-200"
              activestyle={{ background: "rgb(20, 24, 35)" }}
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
              activestyle={{ background: "rgb(20, 24, 35)" }}
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
              activestyle={{ background: "rgb(20, 24, 35)" }}
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
              activestyle={{ background: "rgb(20, 24, 35)" }}
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
              activestyle={{ background: "rgb(20, 24, 35)" }}
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
        </div> */}
      </aside>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
