import React from "react";

const ContactAvatar = ({ contact }) => {
  return (
    <div className="pl-12">
      {contact.avatar && contact.avatar !== null ? (
        <img
          src={require(`../../../assets/images/avatars/${contact.avatar}.jpg`)}
          alt="Dejesus Michael"
          className="w-32 rounded-full border-4 border-black"
        ></img>
      ) : (
        <span className="w-32 h-32 rounded-full bg-gray-400 border-4 border-gray-700">
          <span className="flex items-center flex justify-center h-full text-5xl text-gray-700">
            {contact.name.charAt(0).toUpperCase()}
          </span>
        </span>
      )}
    </div>
  );
};

export default ContactAvatar;
