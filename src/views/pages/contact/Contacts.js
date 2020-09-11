import React, { useState, useEffect } from "react";
import Icon from "@material-ui/core/Icon";
import { contacts, tags, countries } from "../../../@fake-db/contacts/contacts";
import Contact from "./Contact";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

const drawerWidth = 510;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

export default function Contacts() {
  const classes = useStyles();

  // Contact Drawer
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = (contact) => {
    setSelectedContact(contact);
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Contact Search
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  React.useEffect(() => {
    const results = contacts.filter((person) =>
      person.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  // Contact Select Set
  const [contact, setContact] = React.useState();
  const setSelectedContact = (contact) => setContact(contact);

  // Contact Phone Country Codes
  const [countryCodes, setCountryCodes] = useState([]);

  React.useEffect(() => {
    console.log(countries);
    console.log(contacts);
    return () => {
      console.log("unmounted");
    };
  }, []);

  // Contact Avatar
  const avatar = (contact) => {
    let url = require(`../../../assets/images/avatars/${contact.avatar}.jpg`);
    return <img src={url} alt={contact.name} className="w-8 rounded-full" />;
  };

  // Contact Phone Country Code
  const getCountryCode = (item) => {
    let code = countries.find((country) => country.iso == item.country).code;
    return `${code} ${item.number}`;
  };

  // Contact List
  const contactList = searchResults.map((contact, index) => (
    <tr
      className="border-b hover:bg-gray-100 cursor-pointer"
      key={index}
      onClick={() => handleDrawerOpen(contact)}
    >
      <td className="pl-8 py-4">
        <div className="flex items-center">
          {contact.avatar && contact.avatar !== null ? (
            avatar(contact)
          ) : (
            <span className="w-8 h-8 rounded-full bg-gray-300 text-center">
              <span className="h-8 text-base items-center flex justify-center">
                {contact.name.charAt(0).toUpperCase()}
              </span>
            </span>
          )}
          <div className="ml-8">{contact.name}</div>
        </div>
      </td>
      <td className="px-4 py-4">{contact.emails[0].email}</td>
      <td className="px-4 py-4">{getCountryCode(contact.phoneNumbers[0])}</td>
      {contact.job.title && contact.job.company ? (
        <td className="pr-8 pl-4 py-4">
          {contact.job.title}, {contact.job.company}
        </td>
      ) : (
        <td className="pr-8 pl-4 py-4">{contact.job.company}</td>
      )}
    </tr>
  ));

  return (
    <div className="inset-0 absolute">
      <div className="flex h-full overflow-hidden">
        <div className="border-r relative flex flex-col overflow-auto flex-grow">
          <div className="flex bg-white w-full px-8 py-10">
            <div>
              <h2 className="text-3xl font-bold pb-0 leading-none">Contacts</h2>
              <span className="text-gray-700">
                {searchResults.length} contacts
              </span>
            </div>
            <div className="flex ml-auto items-center">
              <div className="relative">
                <input
                  onChange={handleChange}
                  className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 pr-4 pl-10 block w-full appearance-none leading-normal"
                  type="email"
                  placeholder="jane@example.com"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
                  <svg
                    className="fill-current pointer-events-none text-gray-600 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                  </svg>
                </div>
              </div>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-normal py-2 pr-4 pl-3 rounded inline-flex items-center ml-3">
                <Icon fontSize="small">add</Icon>
                <span className="ml-2">Add</span>
              </button>
            </div>
          </div>
          <div>
            <table className="table-fixed w-full bg-white border-t">
              <thead className="text-xs text-gray-600 bg-gray-100">
                <tr className="border-b text-left">
                  <th className="pl-24 py-4 font-medium">Name</th>
                  <th className="px-4 py-4 font-medium">Email</th>
                  <th className="px-4 py-4 font-medium">Phone number</th>
                  <th className="px-4 py-4 font-medium">Job title & company</th>
                </tr>
              </thead>
              <tbody>{contactList}</tbody>
            </table>
          </div>
        </div>

        <Drawer
          className={classes.drawer}
          anchor="right"
          open={open}
          onClose={handleDrawerClose}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Contact close={handleDrawerClose} contact={contact} />
        </Drawer>
      </div>
    </div>
  );
}
