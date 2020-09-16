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

// Contact Phone Country Code
const getCountryCode = (item) => {
  let code = countries.find((country) => country.iso == item.country).code;
  return `${code} ${item.number}`;
};

// Contact Details
const ContactDetails = (props) => {
  const [contact, setContact] = useState(props.contact);
  const [filteredTags, setFilteredTags] = useState([]);
  useEffect(() => {
    setContact(props.contact);
    contact.tags.map((tag) => {
      setFilteredTags([...filteredTags, tags.find((x) => x.id == tag)]);
    });
    return () => {
      console.log("unmount");
    };
  }, [props.contact]);
  let { name, emails, phoneNumbers, job, birthday, address, notes } = contact;
  let { edit } = props;
  return (
    <div className="flex flex-col py-16 px-10 h-100">
      <ContactAvatar contact={contact} />
      <div className="pb-4 pt-8 pl-12 ml-2">
        {!edit ? (
          <h3 className="font-bold text-3xl">{name}</h3>
        ) : (
          <input
            className="appearance-none shadow-sm block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
            type="text"
            defaultValue={name}
            placeholder="name"
          ></input>
        )}
      </div>
      <div className="mb-8 pl-12 ml-2">
        {filteredTags.map((tag, i) => (
          <span
            className="py-1 px-3 text-gray-600 text-xs font-medium uppercase bg-gray-200 rounded-sm"
            key={i}
          >
            {tag.title}
          </span>
        ))}
      </div>
      <div className="mb-4 flex items-center">
        <div className="flex-shrink">
          <WorkTwoToneIcon style={{ color: "#64748b" }} />
        </div>
        {!edit ? (
          <div className="flex-grow pl-8">
            {contact.job.title && contact.job.company ? (
              <p>
                {job.title}, {job.company}
              </p>
            ) : (
              <p>{job.company}</p>
            )}
          </div>
        ) : (
          <React.Fragment>
            <div className="flex-grow pl-8">
              <input
                class="appearance-none shadow-sm block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                id="grid-city"
                type="text"
                value={job.title}
                placeholder="Job Title"
              ></input>
            </div>
            <div className="flex-grow pl-4">
              <input
                class="appearance-none shadow-sm block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                id="grid-city"
                type="text"
                value={job.company}
                placeholder="Company"
              ></input>
            </div>
          </React.Fragment>
        )}
      </div>
      <div className="mb-4 flex items-center">
        <div className="flex-shrink">
          <MailTwoToneIcon style={{ color: "#64748b" }} />
        </div>
        {!edit ? (
          <div className="flex-shrink-0 pl-8">
            <ul>
              {emails.map((item, i) => (
                <li key={i}>
                  <p>
                    <a href="#" className="text-indigo-600">
                      {item.email}
                    </a>
                    <span className="text-xs text-gray-600">
                      {" "}
                      • {item.label}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="flex-shrink">
            {emails.map((item, i) => (
              <div className="flex mb-2">
                <div className="flex-grow pl-8">
                  <input
                    class="appearance-none shadow-sm block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                    id="grid-city"
                    type="text"
                    value={item.email}
                    placeholder="Email"
                  ></input>
                </div>
                <div className="flex-grow pl-4">
                  <input
                    class="appearance-none shadow-sm block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                    id="grid-city"
                    type="text"
                    value={item.label}
                    placeholder="Label"
                  ></input>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mb-4 flex items-center">
        <div className="flex-shrink">
          <LocalPhoneTwoToneIcon style={{ color: "#64748b" }} />
        </div>
        {!edit ? (
          <div className="flex-grow pl-8">
            <ul>
              {phoneNumbers.map((item) => (
                <li>
                  <p>
                    {getCountryCode(item)}
                    <span className="text-xs text-gray-600">
                      {" "}
                      • {item.label}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="flex-shrink">
            {phoneNumbers.map((item, i) => (
              <div className="flex mb-2">
                <div className="flex-grow pl-8">
                  <input
                    class="appearance-none shadow-sm block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                    type="text"
                    value={item.number}
                    placeholder="Email"
                  ></input>
                </div>
                <div className="flex-grow pl-4">
                  <input
                    class="appearance-none shadow-sm block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                    type="text"
                    value={item.label}
                    placeholder="Label"
                  ></input>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mb-4 flex items-center">
        <div className="flex-shrink">
          <PlaceTwoToneIcon style={{ color: "#64748b" }} />
        </div>
        <div className="flex-grow pl-8">
          {!edit ? (
            <p>{address}</p>
          ) : (
            <input
              class="appearance-none shadow-sm block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
              type="text"
              value={address}
              placeholder="Address"
            ></input>
          )}
        </div>
      </div>
      <div className="mb-4 flex items-center">
        <div className="flex-shrink">
          <CakeTwoToneIcon style={{ color: "#64748b" }} />
        </div>
        <div className="flex-grow pl-8">
          {!edit ? (
            <p>{birthday}</p>
          ) : (
            <input
              class="appearance-none shadow-sm block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
              type="text"
              value={birthday}
              placeholder="Birthday"
            ></input>
          )}
        </div>
      </div>
      <div className="mb-4 flex items-center">
        <div className="flex-shrink">
          <NotesTwoToneIcon style={{ color: "#64748b" }} />
        </div>
        <div className="flex-grow pl-8">
          {!edit ? (
            <p>{notes}</p>
          ) : (
            <textarea
              class="appearance-none shadow-sm block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
              rows="10"
              placeholder="Enter some long form content."
              value={notes}
            ></textarea>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
