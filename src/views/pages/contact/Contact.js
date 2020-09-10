import React, { Component, useState, useEffect } from "react";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import Button from "@material-ui/core/Button";
import WorkTwoToneIcon from "@material-ui/icons/WorkTwoTone";
import MailTwoToneIcon from "@material-ui/icons/MailTwoTone";
import LocalPhoneTwoToneIcon from "@material-ui/icons/LocalPhoneTwoTone";
import PlaceTwoToneIcon from "@material-ui/icons/PlaceTwoTone";
import CakeTwoToneIcon from "@material-ui/icons/CakeTwoTone";
import NotesTwoToneIcon from "@material-ui/icons/NotesTwoTone";
import CreateTwoToneIcon from "@material-ui/icons/CreateTwoTone";

import { withStyles, makeStyles } from "@material-ui/core/styles";

import CloseIcon from "@material-ui/icons/Close";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
import MenuItem from "@material-ui/core/MenuItem";
import { tags, countries } from "../../../@fake-db/contacts/contacts";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import moment from "moment";

const StyledButton = withStyles({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    borderRadius: 0,
    border: 0,
    color: "#27303f",
    height: 48,
    fontWeight: 400,
    padding: "0 18px",
    position: "relative",
  },
  label: {
    textTransform: "none",
  },
})(Button);

const ContactForm = ({ contact }) => {
  return (
    <form className="w-full bg-white p-12 h-full">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            value={contact.name}
            placeholder="Jane"
          />
          <p className="text-red-500 text-xs italic">
            Please fill out this field.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            Password
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="password"
            placeholder="******************"
          />
          <p className="text-gray-600 text-xs italic">
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-city"
          >
            City
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
            type="text"
            placeholder="Albuquerque"
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-state"
          >
            State
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-zip"
          >
            Zip
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-zip"
            type="text"
            placeholder="90210"
          />
        </div>
      </div>
    </form>
  );
};

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
      {contact.avatar && contact.avatar !== null ? (
        <img
          src={require(`../../../assets/images/avatars/${avatar}.jpg`)}
          alt="Dejesus Michael"
          className="w-32 rounded-full border-4 border-black"
        ></img>
      ) : (
        <span className="w-32 h-32 rounded-full bg-gray-400 border-4 border-gray-700">
          <span className="flex items-center flex justify-center h-full text-5xl text-gray-700">
            {name.charAt(0).toUpperCase()}
          </span>
        </span>
      )}

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

const Contact = (props) => {
  const [edit, setEdit] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="w-full bg-white h-full">
      <div className="absolute right-0 top-0 mt-8 mr-10">
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <div className="flex flex-col py-2">
            <StyledButton
              onClick={handleClose}
              startIcon={
                <CreateTwoToneIcon style={{ color: "#64738b", fontSize: 24 }} />
              }
            >
              Edit contact
            </StyledButton>
          </div>
        </Popover>
        <Tooltip title="Close">
          <IconButton aria-label="close" onClick={props.close}>
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </div>
      {edit ? <ContactForm {...props} /> : <ContactDetails {...props} />}
    </div>
  );
};

// Contact.propTypes = {
//   prop: PropTypes,
// };

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Contact);

export default Contact;
