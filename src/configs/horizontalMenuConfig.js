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
];

export default menuConfig;
