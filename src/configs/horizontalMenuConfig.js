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
        icon: <Icon className="mr-4 align-middle">payment_outlined</Icon>,
        permissions: ["admin", "editor"],
        navLink: "/",
      },
      {
        id: "analytics",
        title: "Analytics",
        type: "item",
        icon: <Icon className="mr-4 align-middle">pie_chart_outlined</Icon>,
        permissions: ["admin", "editor"],
        navLink: "/analytics",
      },
      {
        id: "crypto",
        title: "Crypto",
        type: "item",
        icon: (
          <Icon className="mr-4 align-middle">monetization_on_outlined</Icon>
        ),
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
        desc: "3 upcoming events",
        type: "item",
        icon: <Icon className="mr-4 align-middle">today_outlined</Icon>,
        navLink: "/calendar",
      },
      {
        id: "contacts",
        title: "Contacts",
        type: "item",
        icon: <Icon className="mr-4 align-middle">perm_contact_calendar</Icon>,
        navLink: "/contacts",
      },
      {
        id: "ecommerce",
        title: "ECommerce",
        type: "item",
        icon: <Icon className="mr-4 align-middle">shopping_cart_outlined</Icon>,
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
        icon: <Icon className="mr-4 align-middle">mail_outlined</Icon>,
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
        icon: <Icon className="mr-4 align-middle">check_circle_outlined</Icon>,
        navLink: "/tasks",
      },
    ],
  },
];

export default menuConfig;
