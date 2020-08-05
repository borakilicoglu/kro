import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import { contacts } from "../../@fake-db/contacts/contacts";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Contacts() {
  const classes = useStyles();

  const contactItems = contacts.map((contact, index) => (
    <tr className="border-b" key={index}>
      <td className="px-4 py-2">
        <img src={contact.avatar} alt={contact.name} />
      </td>
      <td className="px-4 py-2">{contact.name}</td>
      <td className="px-4 py-2">{contact.email}</td>
      <td className="px-4 py-2">{contact.phoneNumbers[0].number}</td>
      <td className="px-4 py-2">
        {contact.job.title} & {contact.job.company}
      </td>
    </tr>
  ));

  return (
    <div>
      <div className="flex bg-white w-full px-8 py-10">
        <div>
          <h2 className="text-3xl font-bold pb-0 leading-none">Contacts</h2>
          <span className="text-gray-600">{contacts.length} contacts</span>
        </div>
        <div className="flex ml-auto items-center">
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="email"
            placeholder="jane@example.com"
          />
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-normal py-2 pr-4 pl-3 rounded inline-flex items-center ml-3">
            <Icon fontSize="small">add</Icon>
            <span className="ml-2">Add</span>
          </button>
        </div>
      </div>
      <div>
        <table className="table-auto w-full bg-white">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone number</th>
              <th className="px-4 py-2">Job title & company</th>
            </tr>
          </thead>
          <tbody>{contactItems}</tbody>
        </table>
      </div>
    </div>
  );
}
