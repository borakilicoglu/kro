import React from "react";
import Icon from "@material-ui/core/Icon";

const menuConfig = [
  {
    name: "DASHBOARDS",
    desc: "Unique dashboard designs",
    childs: [
      {
        id: "finance",
        title: "Finance",
        type: "item",
        icon: <Icon className="mr-4">payment_outlined</Icon>,
        permissions: ["admin", "editor"],
        navLink: "/",
      },
      {
        id: "analytics",
        title: "Analytics",
        type: "item",
        icon: <Icon className="mr-4">pie_chart_outlined</Icon>,
        permissions: ["admin", "editor"],
        navLink: "/analytics",
      },
      {
        id: "crypto",
        title: "Crypto",
        type: "item",
        icon: <Icon className="mr-4">monetization_on_outlined</Icon>,
        permissions: ["admin", "editor"],
        navLink: "/crypto",
      },
    ],
  },
  {
    name: "APPLICATIONS",
    desc: "Custom made application designs",
    childs: [
      {
        id: "calendar",
        title: "Calendar",
        type: "item",
        icon: <Icon className="mr-4">payment_outlined</Icon>,
        permissions: ["admin", "editor"],
        navLink: "/calendar",
      },
      {
        id: "contacts",
        title: "Contacts",
        type: "item",
        icon: <Icon className="mr-4">pie_chart_outlined</Icon>,
        permissions: ["admin", "editor"],
        navLink: "/contacts",
      },
      {
        id: "ecommerce",
        title: "ECommerce",
        type: "item",
        icon: <Icon className="mr-4">monetization_on_outlined</Icon>,
        permissions: ["admin", "editor"],
        navLink: "/ecommerce",
      },
      {
        id: "mailbox",
        title: "Mailbox",
        type: "item",
        icon: <Icon className="mr-4">pie_chart_outlined</Icon>,
        permissions: ["admin", "editor"],
        navLink: "/mailbox",
      },
      {
        id: "tasks",
        title: "Tasks",
        type: "item",
        icon: <Icon className="mr-4">monetization_on_outlined</Icon>,
        permissions: ["admin", "editor"],
        navLink: "/tasks",
      },
    ],
  },
];

export default menuConfig;
