import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { withStyles, makeStyles } from "@material-ui/core/styles";

import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import LabelTwoToneIcon from "@material-ui/icons/LabelTwoTone";
import SettingsTwoToneIcon from "@material-ui/icons/SettingsTwoTone";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const ComposeButton = withStyles({
  root: {
    display: "flex",
    justifyContent: "flex-center",
    border: 0,
    backgroundColor: "#5850ec",
    color: "white",
    height: 40,
    width: "100%",
    fontWeight: 400,
    padding: "0 18px",
    position: "relative",
    borderRadius: "0.25rem",
    "&:hover": {
      backgroundColor: "#4f48d5",
    },
  },
  label: {
    textTransform: "none",
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  listItemIcon: {
    minWidth: "24px",
    marginRight: "16px",
  },
  listItem: {
    padding: ".7rem 1.5rem",
    display: "flex",
    "&.active": {
      backgroundColor: "#cbd5e0",
    },
  },
  listItemText: {
    marginBottom: "0px",
    marginTop: "0px",
    "& span": {
      fontSize: "13px",
      fontWeight: 500,
    },
  },
}));

const MailboxMenu = ({ utilities, data, params }) => {
  const classes = useStyles();
  let { folders, filters, labels } = utilities;
  return (
    <div className="w-1/4 border-r overflow-scroll">
      {utilities && (
        <div className="h-px">
          <h3 className="pt-8 pb-6 px-6 font-bold text-3xl">Mailbox</h3>
          <div className="px-6">
            <ComposeButton startIcon={<Icon fontSize="small">add</Icon>}>
              Compose
            </ComposeButton>
          </div>
          <h6 className="uppercase pt-8 px-6 text-indigo-500 text-xs font-semibold mb-2">
            Mailboxes
          </h6>
          <List component="div" disablePadding>
            {folders.map((folder, index) => {
              return (
                <ListItem
                  key={index}
                  button
                  component={NavLink}
                  exact
                  to={`/mailbox/${folder.slug}`}
                  className={classes.listItem}
                >
                  <ListItemIcon className={classes.listItemIcon}>
                    {folder.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={folder.title}
                    className={classes.listItemText}
                  />
                  <span className="text-xs font-bold">
                    {folder.slug === "inbox" &&
                      data.filter(
                        (mail) => mail.unread && mail.folder === folder.id
                      ).length}
                    {folder.slug === "drafts" &&
                      data.filter((mail) => mail.folder === folder.id).length}
                    {folder.slug === "spam" &&
                      data.filter((mail) => mail.folder === folder.id).length}
                  </span>
                </ListItem>
              );
            })}
          </List>
          <h6 className="uppercase pt-8 px-6 text-indigo-500 text-xs font-semibold mb-2">
            Filters
          </h6>
          <List component="div" disablePadding>
            {filters.map((filter, index) => {
              return (
                <ListItem
                  key={index}
                  button
                  component={NavLink}
                  exact
                  to={`/mailbox/${filter.slug}`}
                  className={classes.listItem}
                >
                  <ListItemIcon className={classes.listItemIcon}>
                    {filter.icon}
                  </ListItemIcon>

                  <ListItemText
                    primary={filter.title}
                    className={classes.listItemText}
                  />
                </ListItem>
              );
            })}
          </List>
          <h6 className="uppercase pt-8 px-6 text-indigo-500 text-xs font-semibold mb-2">
            Labels
          </h6>
          <List component="div" disablePadding>
            {labels.map((label, index) => (
              <ListItem
                key={index}
                button
                component={NavLink}
                exact
                to={`/mailbox/${label.slug}`}
                className={classes.listItem}
              >
                <ListItemIcon className={classes.listItemIcon}>
                  <LabelTwoToneIcon className={`text-${label.color}-500`} />
                </ListItemIcon>

                <ListItemText
                  primary={label.title}
                  className={classes.listItemText}
                />
              </ListItem>
            ))}
            <ListItem
              key="0000"
              button
              style={{ marginTop: "1rem" }}
              component="button"
              className={classes.listItem}
            >
              <ListItemIcon className={classes.listItemIcon}>
                <SettingsTwoToneIcon style={{ color: "#64748b" }} />
              </ListItemIcon>

              <ListItemText
                primary="Settings"
                className={classes.listItemText}
              />
            </ListItem>
          </List>
        </div>
      )}
    </div>
  );
};

export default MailboxMenu;
