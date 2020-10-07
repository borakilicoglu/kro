import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmails } from "../../../redux/actions/mailbox";

import MailboxMenu from "./MailboxMenu";
import MailboxList from "./MailboxList";
import Mail from "./Mail";

import {
  folders as foldersMailbox,
  filters as filtersMailbox,
  settings as settingsMailbox,
} from "../../../@fake-db/mailbox/mailbox";

const Mailbox = ({ match }) => {
  const dispatch = useDispatch();
  const {
    params: { filter },
  } = match;
  const [filters, setFilters] = React.useState([]);
  const [folders, setFolders] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  // const [settings, setSettings] = React.useState([]);
  const [raw, setRaw] = React.useState([]);
  const [mail, setMail] = React.useState();
  const mailSet = (mail) => setMail(mail);

  useEffect(() => {
    setFilters(filtersMailbox);
    setFolders(foldersMailbox);
    return () => {};
  }, []);

  const { mails } = useSelector((state) => state.mailbox);

  useEffect(() => {
    setRaw(mails);
    setLoading(false);
    return () => {};
  }, [mails]);

  useEffect(() => {
    dispatch(getEmails({ filter: filter }));
    setMail();
  }, [filter]);

  return (
    <div className="flex flex-col flex-auto w-full xs:p-2">
      {!loading && (
        <div className="flex flex-wrap w-full h-full bg-white">
          <MailboxMenu
            filters={filters}
            mails={raw}
            filter={filter}
          ></MailboxMenu>
          {raw.length > 0 && (
            <MailboxList
              folder={filter}
              select={mailSet}
              mails={raw}
              active={mail}
            ></MailboxList>
          )}
          {mail ? (
            <Mail mail={mail} raw={raw}></Mail>
          ) : (
            <div className={`bg-gray-100 ${raw.length ? "w-2/4 " : "w-3/4 "}`}>
              <div className="flex flex-col h-full items-center justify-center">
                <span className="w-24">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 32 32"
                    x="0"
                    y="2744"
                    fill="#65748b"
                    fit=""
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                  >
                    <path d="M15.467 24.267h-14.933c-0.294 0-0.533-0.24-0.533-0.533v-12.933c0-4.337 3.588-7.867 8-7.867s8 3.529 8 7.867v12.933c0 0.293-0.239 0.533-0.533 0.533zM1.067 23.2h13.867v-12.4c0-3.749-3.11-6.8-6.933-6.8s-6.933 3.050-6.933 6.8v12.4z"></path>
                    <path d="M31.467 24.267h-16.533c-0.294 0-0.533-0.24-0.533-0.533s0.239-0.533 0.533-0.533h16v-12.4c0-3.686-3.211-6.8-7.012-6.8h-15.388c-0.294 0-0.533-0.239-0.533-0.533s0.239-0.533 0.533-0.533h15.388c4.379 0 8.079 3.602 8.079 7.867v12.933c0 0.293-0.24 0.533-0.533 0.533z"></path>
                    <path d="M29.333 15.733h-3.2c-0.293 0-0.533-0.239-0.533-0.533v-5.333c0-0.294 0.24-0.533 0.533-0.533h3.2c0.293 0 0.533 0.239 0.533 0.533v5.333c0 0.294-0.24 0.533-0.533 0.533zM26.667 14.667h2.133v-4.267h-2.133v4.267z"></path>
                    <path d="M26.667 10.4h-7.467c-0.293 0-0.533-0.239-0.533-0.533s0.24-0.533 0.533-0.533h7.467c0.293 0 0.533 0.239 0.533 0.533s-0.24 0.533-0.533 0.533z"></path>
                    <path d="M11.733 21.067h-7.467c-0.294 0-0.533-0.24-0.533-0.533s0.239-0.533 0.533-0.533h7.467c0.294 0 0.533 0.24 0.533 0.533s-0.239 0.533-0.533 0.533z"></path>
                    <path d="M19.733 29.067c-0.293 0-0.533-0.24-0.533-0.533v-4.267h-5.333v4.267c0 0.293-0.239 0.533-0.533 0.533s-0.533-0.24-0.533-0.533v-4.8c0-0.293 0.239-0.533 0.533-0.533h6.4c0.293 0 0.533 0.24 0.533 0.533v4.8c0 0.293-0.24 0.533-0.533 0.533z"></path>
                  </svg>
                </span>
                <p className="text-2xl text-gray-500">
                  {raw.length
                    ? "Select a mail to read"
                    : "There are no e-mails"}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Mailbox;
