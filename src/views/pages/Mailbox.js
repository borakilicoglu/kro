import React, { useEffect } from "react";
import Icon from "@material-ui/core/Icon";
import InboxTwoToneIcon from "@material-ui/icons/InboxTwoTone";
import SendTwoToneIcon from "@material-ui/icons/SendTwoTone";
import DraftsTwoToneIcon from "@material-ui/icons/DraftsTwoTone";

import {
  folders as foldersMailbox,
  filters as filtersMailbox,
  settings as settingsMailbox,
  mails as mailsMailbox,
} from "../../@fake-db/mailbox";

const Mailbox = () => {
  const [folders, setFolders] = React.useState([]);
  const [filters, setFilters] = React.useState([]);
  const [settings, setSettings] = React.useState([]);
  const [mails, setMails] = React.useState([]);

  useEffect(() => {
    console.log("Component did mount...");
    setFolders(foldersMailbox);
    setFilters(filtersMailbox);
    setSettings(settingsMailbox);
    setMails(mailsMailbox);
    return () => {
      console.log("Component did unmount...");
    };
  }, []);

  return (
    <div className="flex flex-col flex-auto w-full xs:p-2">
      <div className="flex flex-wrap w-full h-full bg-white">
        <div className="w-1/4 border-r px-8">
          <h3 className="pt-8 pb-6 font-bold text-3xl">Mailbox</h3>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-normal py-2 pr-4 pl-3 rounded inline-flex items-center w-full justify-center">
            <Icon fontSize="small">add</Icon>
            <span className="ml-2">Compose</span>
          </button>
          <h6 className="uppercase pt-8 text-indigo-500 text-xs font-semibold mb-2">
            Mailboxes
          </h6>
          <ul>
            <li>
              <button className="inline-flex w-full items-center">
                <InboxTwoToneIcon style={{ color: "#64748b" }} />
                <span className="flex-grow text-left ml-4">Inbox</span>
                <span className="text-xs font-bold">{mails.length}</span>
              </button>
            </li>
            <li>
              <button className="inline-flex w-full items-center">
                <SendTwoToneIcon style={{ color: "#64748b" }} />
                <span className="flex-grow text-left ml-4">Sent</span>
              </button>
            </li>
            <li>
              <button className="inline-flex w-full items-center">
                <DraftsTwoToneIcon style={{ color: "#64748b" }} />
                <span className="flex-grow text-left ml-4">Drafts</span>
                <span className="text-xs font-bold">7</span>
              </button>
            </li>
            <li>Drafts</li>
            <li>Spam</li>
            <li>Trash</li>
          </ul>
          <h6 className="uppercase pt-8 text-indigo-500 text-xs font-semibold mb-2">
            Filters
          </h6>
          <ul>
            <li>Inbox</li>
            <li>Sent</li>
            <li>Drafts</li>
            <li>Spam</li>
            <li>Trash</li>
          </ul>
          <h6 className="uppercase pt-8 text-indigo-500 text-xs font-semibold mb-2">
            Labels
          </h6>
          <ul>
            <li>Personal</li>
            <li>Work</li>
            <li>Payments</li>
            <li>Invoices</li>
            <li>Accounts</li>
            <li>Forums</li>
          </ul>
        </div>
        <div className="w-1/4 border-r px-8">
          {mails.map((mail, index) => (
            <React.Fragment key={index}>
              <div>{mail.to}</div>
              <div>{mail.cc}</div>
              <div>{mail.bcc}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mailbox;
