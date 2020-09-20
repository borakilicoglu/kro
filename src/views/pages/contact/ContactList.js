import React from "react";
import { countries } from "../../../@fake-db/contacts/contacts";

// Contact Phone Country Code
const getCountryCode = (item) => {
  let code = countries.find((country) => country.iso == item.country).code;
  return `${code} ${item.number}`;
};

// Contact Avatar
const avatar = (contact) => {
  let url = require(`../../../assets/images/avatars/${contact.avatar}.jpg`);
  return <img src={url} alt={contact.name} className="w-8 rounded-full" />;
};

const ContactList = ({ searchResults, handleDrawerOpen }) =>
  searchResults.map((contact, index) => (
    <tr
      key={index}
      className="border-b hover:bg-gray-100 cursor-pointer"
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

export default React.memo(ContactList);
