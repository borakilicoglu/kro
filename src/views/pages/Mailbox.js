import React, { useEffect } from "react";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxTwoToneIcon from "@material-ui/icons/InboxTwoTone";
import SendTwoToneIcon from "@material-ui/icons/SendTwoTone";
import DraftsTwoToneIcon from "@material-ui/icons/DraftsTwoTone";
import ErrorTwoToneIcon from "@material-ui/icons/ErrorTwoTone";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import GradeTwoToneIcon from "@material-ui/icons/GradeTwoTone";
import LabelImportantTwoToneIcon from "@material-ui/icons/LabelImportantTwoTone";
import LabelTwoToneIcon from "@material-ui/icons/LabelTwoTone";
import LocalPostOfficeTwoToneIcon from "@material-ui/icons/LocalPostOfficeTwoTone";

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
    <div className="flex flex-col flex-auto w-full h-full xs:p-2">
      <div className="flex flex-wrap w-full h-full bg-white">
        <div className="w-1/5 border-r px-8 overflow-scroll">
          <div className="h-px">
            <h3 className="pt-8 pb-6 font-bold text-3xl">Mailbox</h3>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-normal py-2 pr-4 pl-3 rounded inline-flex items-center w-full justify-center">
              <Icon fontSize="small">add</Icon>
              <span className="ml-2">Compose</span>
            </button>
            <h6 className="uppercase pt-8 text-indigo-500 text-xs font-semibold mb-2">
              Mailboxes
            </h6>
            <ul className="list-none">
              <li>
                <button className="inline-flex w-full items-center py-2">
                  <InboxTwoToneIcon style={{ color: "#64748b" }} />
                  <span className="flex-grow text-left ml-4">Inbox</span>
                  <span className="text-xs font-bold">{mails.length}</span>
                </button>
              </li>
              <li>
                <button className="inline-flex w-full items-center py-2">
                  <SendTwoToneIcon style={{ color: "#64748b" }} />
                  <span className="flex-grow text-left ml-4">Sent</span>
                </button>
              </li>
              <li>
                <button className="inline-flex w-full items-center py-2">
                  <DraftsTwoToneIcon style={{ color: "#64748b" }} />
                  <span className="flex-grow text-left ml-4">Drafts</span>
                  <span className="text-xs font-bold">7</span>
                </button>
              </li>
              <li>
                <button className="inline-flex w-full items-center py-2">
                  <ErrorTwoToneIcon style={{ color: "#64748b" }} />
                  <span className="flex-grow text-left ml-4">Spam</span>
                  <span className="text-xs font-bold">13</span>
                </button>
              </li>
              <li>
                <button className="inline-flex w-full items-center py-2">
                  <DeleteTwoToneIcon style={{ color: "#64748b" }} />
                  <span className="flex-grow text-left ml-4">Spam</span>
                </button>
              </li>
            </ul>
            <h6 className="uppercase pt-8 text-indigo-500 text-xs font-semibold mb-2">
              Filters
            </h6>
            <ul>
              <li>
                <button className="inline-flex w-full items-center py-2">
                  <GradeTwoToneIcon style={{ color: "#64748b" }} />
                  <span className="flex-grow text-left ml-4">Starred</span>
                </button>
              </li>
              <li>
                <button className="inline-flex w-full items-center py-2">
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
        <div className="w-2/5 border-r overflow-scroll">
          <div className="flex p-4 border-b items-center">
            <IconButton color="primary" component="span">
              <MenuIcon />
            </IconButton>
            <div className="pl-2 flex-grow">
              <strong>INBOX</strong>
            </div>
            <div>1-10 of 45</div>
            <div>
              <IconButton color="primary" component="span">
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <div>
              <IconButton color="primary" component="span">
                <ChevronRightIcon />
              </IconButton>
            </div>
          </div>
          <div className="h-px">
            {mails.map((mail, index) => (
              <div className="border-b p-6" key={index}>
                <div>{mail.to}</div>
                <div>{mail.cc}</div>
                <div>{mail.bcc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-2/5 border-r bg-gray-200 h-100">
          <div className="flex flex-col h-full items-center justify-center">
            <LocalPostOfficeTwoToneIcon
              style={{ color: "#64748b", fontSize: "150px" }}
            />
            <p className="text-3xl text-gray-500">Select a mail to read</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mailbox;
