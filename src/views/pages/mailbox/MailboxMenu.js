import React from "react";

import Icon from "@material-ui/core/Icon";
import InboxTwoToneIcon from "@material-ui/icons/InboxTwoTone";
import SendTwoToneIcon from "@material-ui/icons/SendTwoTone";
import DraftsTwoToneIcon from "@material-ui/icons/DraftsTwoTone";
import ErrorTwoToneIcon from "@material-ui/icons/ErrorTwoTone";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import GradeTwoToneIcon from "@material-ui/icons/GradeTwoTone";
import LabelImportantTwoToneIcon from "@material-ui/icons/LabelImportantTwoTone";
import LabelTwoToneIcon from "@material-ui/icons/LabelTwoTone";

const MailboxMenu = ({ count }) => {
  return (
    <div className="w-1/4 border-r px-6 overflow-scroll">
      <div className="h-px">
        <h3 className="pt-8 pb-6 font-bold text-3xl">Mailbox</h3>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-normal py-2 pr-4 pl-3 rounded inline-flex items-center w-full justify-center">
          <Icon fontSize="small">add</Icon>
          <span className="ml-2">Compose</span>
        </button>
        <h6 className="uppercase pt-8 text-indigo-500 text-xs font-semibold mb-2">
          Mailboxes
        </h6>
        <ul className="list-none -mx-6">
          <li className="hover:bg-gray-300 bg-gray-200 px-6">
            <button className="inline-flex w-full items-center py-3">
              <InboxTwoToneIcon style={{ color: "#64748b" }} />
              <span className="flex-grow text-left ml-4">Inbox</span>
              <span className="text-xs font-bold">{count}</span>
            </button>
          </li>
          <li className="hover:bg-gray-300 px-6">
            <button className="inline-flex w-full items-center py-3">
              <SendTwoToneIcon style={{ color: "#64748b" }} />
              <span className="flex-grow text-left ml-4">Sent</span>
            </button>
          </li>
          <li className="hover:bg-gray-300 px-6">
            <button className="inline-flex w-full items-center py-3">
              <DraftsTwoToneIcon style={{ color: "#64748b" }} />
              <span className="flex-grow text-left ml-4">Drafts</span>
              <span className="text-xs font-bold">7</span>
            </button>
          </li>
          <li className="hover:bg-gray-300 px-6">
            <button className="inline-flex w-full items-center py-3">
              <ErrorTwoToneIcon style={{ color: "#64748b" }} />
              <span className="flex-grow text-left ml-4">Spam</span>
              <span className="text-xs font-bold">13</span>
            </button>
          </li>
          <li className="hover:bg-gray-300 px-6">
            <button className="inline-flex w-full items-center py-3">
              <DeleteTwoToneIcon style={{ color: "#64748b" }} />
              <span className="flex-grow text-left ml-4">Trash</span>
            </button>
          </li>
        </ul>
        <h6 className="uppercase pt-8 text-indigo-500 text-xs font-semibold mb-2">
          Filters
        </h6>
        <ul>
          <li>
            <button className="inline-flex w-full items-center py-3">
              <GradeTwoToneIcon style={{ color: "#64748b" }} />
              <span className="flex-grow text-left ml-4">Starred</span>
            </button>
          </li>
          <li>
            <button className="inline-flex w-full items-center py-3">
              <LabelImportantTwoToneIcon style={{ color: "#64748b" }} />
              <span className="flex-grow text-left ml-4">Important</span>
            </button>
          </li>
        </ul>
        <h6 className="uppercase pt-8 text-indigo-500 text-xs font-semibold mb-2">
          Labels
        </h6>
        <ul>
          {[
            "Personal",
            "Work",
            "Payment",
            "Invoices",
            "Accounts",
            "Forums",
          ].map((label, index) => (
            <li key={index}>
              <button className="inline-flex w-full items-center py-2">
                <LabelTwoToneIcon style={{ color: "#64748b" }} />
                <span className="flex-grow text-left ml-4">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MailboxMenu;
