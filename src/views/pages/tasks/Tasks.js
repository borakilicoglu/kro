import React, { useCallback } from "react";
import Icon from "@material-ui/core/Icon";
import { contacts, tags, countries } from "../../../@fake-db/contacts/contacts";
// import Contact from "./Contact";
// import ContactList from "./ContactList";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

// Custom Contact Styles
const drawerWidth = 510;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

// Contacts
const Tasks = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [contact, setContact] = React.useState();
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  React.useEffect(() => {
    const results = contacts.filter((person) =>
      person.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleDrawerOpen = useCallback(
    (contact) => {
      setContact(contact);
      setOpen(true);
    },
    [setContact, setOpen]
  );

  const handleDrawerClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className="inset-0 absolute">
      <div className="flex h-full overflow-hidden">
        <div className="border-r relative flex flex-col overflow-auto flex-grow">
          <div className="flex bg-white w-full px-8 py-10">
            <div>
              <h2 className="text-3xl font-bold pb-0 leading-none">Tasks</h2>
              <span className="text-gray-700">
                {searchResults.length} remaining tasks
              </span>
            </div>
            <div className="flex ml-auto items-center">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-normal py-2 pr-4 pl-3 rounded inline-flex items-center ml-3">
                <Icon fontSize="small">add</Icon>
                <span className="ml-2">Add Task</span>
              </button>
              <button className="bg-black hover:bg-indigo-700 text-white font-normal py-2 pr-4 pl-3 rounded inline-flex items-center ml-3">
                <Icon fontSize="small">add</Icon>
                <span className="ml-2">Add Section</span>
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
              <tbody>
                {/* <ContactList
                  handleDrawerOpen={handleDrawerOpen}
                  searchResults={searchResults}
                /> */}
              </tbody>
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
          {/* <Contact close={handleDrawerClose} contact={contact} /> */}
        </Drawer>
      </div>
    </div>
  );
};

export default Tasks;
