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
        icon: (
          <Icon className="align-middle" style={{ color: "#97a6ba" }}>
            payments
          </Icon>
        ),
        permissions: ["admin", "editor"],
        navLink: "/",
      },
      {
        id: "analytics",
        title: "Analytics",
        type: "item",
        icon: (
          <Icon className="align-middle" style={{ color: "#97a6ba" }}>
            pie_chart_outlined
          </Icon>
        ),
        permissions: ["admin", "editor"],
        navLink: "/analytics",
      },
      {
        id: "crypto",
        title: "Crypto",
        type: "item",
        icon: (
          <Icon className="align-middle" style={{ color: "#97a6ba" }}>
            monetization_on_outlined
          </Icon>
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
        icon: (
          <Icon className="align-middle" style={{ color: "#97a6ba" }}>
            today_outlined
          </Icon>
        ),
        navLink: "/calendar",
      },
      {
        id: "contacts",
        title: "Contacts",
        type: "item",
        icon: (
          <Icon className="align-middle" style={{ color: "#97a6ba" }}>
            perm_contact_calendar
          </Icon>
        ),
        navLink: "/contacts",
      },
      {
        id: "ecommerce",
        title: "ECommerce",
        type: "item",
        icon: (
          <Icon className="align-middle" style={{ color: "#97a6ba" }}>
            shopping_cart_outlined
          </Icon>
        ),
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
        icon: (
          <Icon className="align-middle" style={{ color: "#97a6ba" }}>
            mail_outlined
          </Icon>
        ),
        permissions: ["admin", "editor"],
        navLink: "/mailbox/inbox",
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
        icon: (
          <Icon className="align-middle" style={{ color: "#97a6ba" }}>
            check_circle_outlined
          </Icon>
        ),
        navLink: "/tasks",
      },
    ],
  },
  {
    name: "PAGES",
    desc: "Custom made page designs",
    pages: [
      {
        id: "authentication",
        title: "Authentication",
        type: "item",
        icon: (
          <Icon className="align-middle" style={{ color: "#97a6ba" }}>
            lock
          </Icon>
        ),
        permissions: ["admin", "editor"],
        pages: [
          {
            id: "sign-in",
            title: "Sign in",
            type: "item",
            navLink: "/authentication/sign-in",
          },
          {
            id: "sign-up",
            title: "Sign up",
            type: "item",
            navLink: "/authentication/sign-up",
          },
          {
            id: "sign-out",
            title: "Sign out",
            type: "item",
            navLink: "/authentication/sign-out",
          },
          {
            id: "sign-out",
            title: "Forgot password",
            type: "item",
            navLink: "/authentication/forgot-password",
          },
          {
            id: "reset-password",
            title: "Reset password",
            type: "item",
            navLink: "/authentication/reset-password",
          },
          {
            id: "unlock-session",
            title: "Unlock session",
            type: "item",
            navLink: "/authentication/unlock-session",
          },
          {
            id: "confirmation-required",
            title: "Confirmation required",
            type: "item",
            navLink: "/authentication/confirmation-required",
          },
        ],
      },
      {
        id: "coming-soon",
        title: "Coming soon",
        type: "item",
        icon: (
          <Icon className="align-middle" style={{ color: "#97a6ba" }}>
            schedule
          </Icon>
        ),
        permissions: ["admin", "editor"],
        pages: [
          {
            id: "classic",
            title: "Classic",
            type: "item",
            navLink: "/coming-soon/classic",
          },
          {
            id: "modern",
            title: "Modern",
            type: "item",
            navLink: "/coming-soon/modern",
          },
          {
            id: "modern-alt",
            title: "Modern Alt.",
            type: "item",
            navLink: "/coming-soon/modern-alt",
          },
          {
            id: "fullscreen",
            title: "Fullscreen",
            type: "item",
            navLink: "/coming-soon/fullscreen",
          },
          {
            id: "fullscree-alt",
            title: "Fullscreen Alt.",
            type: "item",
            navLink: "/coming-soon/fullscreen-alt",
          },
        ],
      },
      {
        id: "error",
        title: "Errors",
        type: "item",
        icon: (
          <Icon className="align-middle" style={{ color: "#97a6ba" }}>
            error_outline
          </Icon>
        ),
        permissions: ["admin", "editor"],
        pages: [
          {
            id: "404",
            title: "404",
            type: "item",
            navLink: "/errors/404",
          },
          {
            id: "500",
            title: "500",
            type: "item",
            navLink: "/errors/500",
          },
        ],
      },
      {
        id: "help-center",
        title: "Help center",
        type: "item",
        icon: (
          <Icon className="align-middle" style={{ color: "#97a6ba" }}>
            help_outline
          </Icon>
        ),
        permissions: ["admin", "editor"],
        pages: [
          {
            id: "home",
            title: "Home",
            type: "item",
            navLink: "/help-center",
          },
          {
            id: "faqs",
            title: "FAQs",
            type: "item",
            navLink: "/help-center/faqs",
          },
          {
            id: "guides",
            title: "Guides",
            type: "item",
            navLink: "/help-center/quides",
          },
          {
            id: "support",
            title: "Support",
            type: "item",
            navLink: "/help-center/support",
          },
        ],
      },
      {
        id: "maintenance",
        title: "Maintenance",
        type: "item",
        icon: (
          <Icon className="align-middle" style={{ color: "#97a6ba" }}>
            warning
          </Icon>
        ),
        permissions: ["admin", "editor"],
        navLink: "/maintenance",
      },
      {
        id: "pricing",
        title: "Pricing",
        type: "item",
        icon: (
          <Icon className="align-middle" style={{ color: "#97a6ba" }}>
            payments
          </Icon>
        ),
        permissions: ["admin", "editor"],
        pages: [
          {
            id: "modern",
            title: "Modern",
            type: "item",
            navLink: "/pricing/modern",
          },
          {
            id: "simple",
            title: "Simple",
            type: "item",
            navLink: "/pricing/simple",
          },
          {
            id: "single",
            title: "Single",
            type: "item",
            navLink: "/pricing/single",
          },
          {
            id: "table",
            title: "Table",
            type: "item",
            navLink: "/pricing/table",
          },
        ],
      },
      {
        id: "profile",
        title: "Profile",
        type: "item",
        icon: (
          <Icon className="align-middle" style={{ color: "#97a6ba" }}>
            account_circle
          </Icon>
        ),
        permissions: ["admin", "editor"],
        navLink: "/profile",
      },
    ],
  },
];

export default menuConfig;
