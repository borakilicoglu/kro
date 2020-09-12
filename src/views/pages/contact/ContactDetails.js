import React, { Component, useState, useEffect } from "react";
import moment from "moment";
import { tags, countries } from "../../../@fake-db/contacts/contacts";
import WorkTwoToneIcon from "@material-ui/icons/WorkTwoTone";
import MailTwoToneIcon from "@material-ui/icons/MailTwoTone";
import LocalPhoneTwoToneIcon from "@material-ui/icons/LocalPhoneTwoTone";
import PlaceTwoToneIcon from "@material-ui/icons/PlaceTwoTone";
import CakeTwoToneIcon from "@material-ui/icons/CakeTwoTone";
import NotesTwoToneIcon from "@material-ui/icons/NotesTwoTone";
import ContactAvatar from "./ContactAvatar";

const ContactDetails = ({ contact }) => {
  let {
    avatar,
    name,
    emails,
    phoneNumbers,
    job,
    birthday,
    address,
    notes,
  } = contact;
  const [filteredTags, setFilteredTags] = useState([]);
  useEffect(() => {
    contact.tags.map((tag) => {
      setFilteredTags([...filteredTags, tags.find((x) => x.id == tag)]);
    });
    return () => {
      console.log("unmount");
    };
  }, []);
  return (
    <div className="flex flex-col py-16 px-20 h-100">
      <ContactAvatar contact={contact} />
      <div className="pb-4 pt-8">
        <h3 className="font-bold text-3xl">{name}</h3>
      </div>
      <div className="py-2 mb-8">
        {filteredTags.map(function (tag, i) {
          return (
            <span
              className="py-1 px-3 text-gray-600 text-xs font-semibold uppercase bg-gray-200 rounded-sm"
              key={i}
            >
              {tag.title}
            </span>
          );
        })}
      </div>
      <div className="py-2 mb-4 flex">
        <WorkTwoToneIcon style={{ color: "#64748b" }} />
        {contact.job.title && contact.job.company ? (
          <p className="ml-4">
            {job.title}, {job.company}
          </p>
        ) : (
          <p className="ml-4">{job.company}</p>
        )}
      </div>
      <div className="py-2 mb-4 flex">
        <MailTwoToneIcon style={{ color: "#64748b" }} />
        <ul>
          {emails.map((item) => (
            <li>
              <p className="ml-4">
                <a href="#" className="text-indigo-600">
                  {item.email}
                </a>
                <span className="text-xs text-gray-600"> • {item.label}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="py-2 mb-4 flex">
        <LocalPhoneTwoToneIcon style={{ color: "#64748b" }} />
        <ul>
          {phoneNumbers.map((item) => (
            <li>
              <p className="ml-4">
                {item.number}
                <span className="text-xs text-gray-600"> • {item.label}</span>
              </p>
            </li>
          ))}
        </ul>
        <p className="ml-4"></p>
      </div>
      <div className="py-2 mb-4 flex">
        <PlaceTwoToneIcon style={{ color: "#64748b" }} />
        <p className="ml-4">{address}</p>
      </div>
      <div className="py-2 mb-4 flex">
        <CakeTwoToneIcon style={{ color: "#64748b" }} />
        <p className="ml-4">{moment(birthday).format("dddd D YYYY")}</p>
      </div>
      <div className="py-2 mb-4 flex">
        <NotesTwoToneIcon style={{ color: "#64748b" }} />
        <p className="ml-4">{notes}</p>
      </div>
    </div>
  );
};

export default ContactDetails;
