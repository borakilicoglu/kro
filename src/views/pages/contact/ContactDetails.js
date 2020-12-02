import React, { useState, useEffect } from "react";
import moment from "moment";
// import _, { update } from "lodash";
import { tags, countries } from "../../../@fake-db/contacts/contacts";
import WorkTwoToneIcon from "@material-ui/icons/WorkTwoTone";
import MailTwoToneIcon from "@material-ui/icons/MailTwoTone";
import LocalPhoneTwoToneIcon from "@material-ui/icons/LocalPhoneTwoTone";
import PlaceTwoToneIcon from "@material-ui/icons/PlaceTwoTone";
import CakeTwoToneIcon from "@material-ui/icons/CakeTwoTone";
import NotesTwoToneIcon from "@material-ui/icons/NotesTwoTone";
import ContactAvatar from "./ContactAvatar";

import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Popover from "@material-ui/core/Popover";

// Contact Phone Country Code
const getCountryCode = (item) => {
  let code = countries.find((country) => country.iso === item.country).code;
  return `${code} ${item.number}`;
};

// Contact Details
const ContactDetails = (props) => {
  // Popover Contact Tags
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleContactTags = (tag) => {
    setContactTags(
      contactTags.some((el) => el.id === tag.id)
        ? contactTags.filter((elem) => elem.id !== tag.id)
        : [...contactTags, tag]
    );
  };

  // Set Contact State From Props
  const [contact, setContact] = useState(props.contact);
  const [contactTags, setContactTags] = useState([]);
  useEffect(() => {
    setContact(props.contact);
    contact.tags.map((tag) => {
      return setContactTags([...contactTags, tags.find((x) => x.id === tag)]);
    });
    return () => {
      console.log("unmount");
    };
  }, [props.contact, contactTags, contact.tags]);
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
        {contactTags.map((tag, i) => (
          <span
            className="py-1 px-3 mr-1 inline-block mb-1 text-gray-600 text-xs font-medium uppercase bg-gray-200 rounded-sm"
            key={i}
          >
            {tag.title}
          </span>
        ))}
        {edit && (
          <span
            className="py-1 px-3 mr-1 inline-block mb-1 text-gray-600 text-xs font-medium bg-gray-200 rounded-sm cursor-pointer"
            onClick={handleClick}
          >
            Edit Tags
          </span>
        )}
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          {tags.map((tag, i) => (
            <MenuItem key={i} defaultValue={tag.title}>
              <Checkbox
                checked={contactTags.some((x) => x.title === tag.title)}
                onClick={() => toggleContactTags(tag)}
              />
              <ListItemText primary={tag.title} />
            </MenuItem>
          ))}
        </Popover>
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
                className="appearance-none shadow-sm block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                type="text"
                defaultValue={job.title}
                placeholder="Job Title"
              ></input>
            </div>
            <div className="flex-grow pl-4">
              <input
                className="appearance-none shadow-sm block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                type="text"
                defaultValue={job.company}
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
                    {/* <a href="" className="text-indigo-600">
                      {item.email}
                    </a> */}
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
              <div className="flex mb-2" key={i}>
                <div className="flex-grow pl-8">
                  <input
                    className="appearance-none shadow-sm block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                    type="text"
                    defaultValue={item.email}
                    placeholder="Email"
                  ></input>
                </div>
                <div className="flex-grow pl-4">
                  <input
                    className="appearance-none shadow-sm block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                    type="text"
                    defaultValue={item.label}
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
              {phoneNumbers.map((item, i) => (
                <li key={i}>
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
              <div className="flex mb-2" key={i}>
                <div className="flex-grow pl-8">
                  <input
                    className="appearance-none shadow-sm block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                    type="text"
                    defaultValue={item.number}
                    placeholder="Email"
                  ></input>
                </div>
                <div className="flex-grow pl-4">
                  <input
                    className="appearance-none shadow-sm block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                    type="text"
                    defaultValue={item.label}
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
              className="appearance-none shadow-sm block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
              type="text"
              defaultValue={address}
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
              className="appearance-none shadow-sm block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
              type="text"
              defaultValue={moment(birthday).format("Do dddd MMMM gggg")}
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
              className="appearance-none shadow-sm block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
              rows="10"
              placeholder="Enter some long form content."
              defaultValue={notes}
            ></textarea>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
