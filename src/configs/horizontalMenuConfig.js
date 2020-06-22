import React from "react";
import Icon from "@material-ui/core/Icon";
import Chip from "@material-ui/core/Chip";

const menuConfig = [
  {
    name: "DASHBOARDS",
    desc: "Unique dashboard designs",
    pages: [
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
    pages: [
      {
        id: "calendar",
        title: "Calendar",
        type: "item",
        icon: <Icon className="mr-4">today_outlined</Icon>,
        navLink: "/calendar",
      },
      {
        id: "contacts",
        title: "Contacts",
        type: "item",
        icon: <Icon className="mr-4">perm_contact_calendar</Icon>,
        navLink: "/contacts",
      },
      {
        id: "ecommerce",
        title: "ECommerce",
        type: "item",
        icon: <Icon className="mr-4">shopping_cart_outlined</Icon>,
        pages: [
          {
            id: "inventory",
            title: "Inventory",
            type: "item",
            navLink: "/ecommerce/inventory",
          },
        ],
      },
      {
        id: "mailbox",
        title: "Mailbox",
        type: "item",
        icon: <Icon className="mr-4">mail_outlined</Icon>,
        permissions: ["admin", "editor"],
        navLink: "/mailbox",
        chip: (
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
        ),
      },
      {
        id: "tasks",
        title: "Tasks",
        type: "item",
        icon: <Icon className="mr-4">check_circle_outlined</Icon>,
        navLink: "/tasks",
      },
    ],
  },
];

export default menuConfig;
