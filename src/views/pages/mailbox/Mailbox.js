import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmails } from "../../../redux/actions/email";

import MailboxMenu from "./MailboxMenu";
import MailboxList from "./MailboxList";
import Mail from "./Mail";

import {
  labels as labelsMailbox,
  folders as foldersMailbox,
  filters as filtersMailbox,
  settings as settingsMailbox,
  // mails as mailsMailbox,
} from "../../../@fake-db/mailbox/mailbox";

const Mailbox = () => {
  const [labels, setLabels] = React.useState([]);
  const [folders, setFolders] = React.useState([]);
  // const [filters, setFilters] = React.useState([]);
  // const [settings, setSettings] = React.useState([]);
  const [allMail, setallMail] = React.useState([]);
  const [mail, setMail] = React.useState();
  const mailSet = (mail) => setMail(mail);

  const dispatch = useDispatch();
  // setMails(data);

  useEffect(() => {
    setLabels(labelsMailbox);
    setFolders(foldersMailbox);
    dispatch(getEmails({ filter: "" }));
    return () => {};
  }, []);

  const { mails } = useSelector((state) => state.emailApp.mails);

  useEffect(() => {
    setallMail(mails);
  }, [mails]); // set the relation between redux campaign and local state

  return (
    <div className="flex flex-col flex-auto w-full xs:p-2">
      <div className="flex flex-wrap w-full h-full bg-white">
        <MailboxMenu mails={allMail} folders={folders}></MailboxMenu>
        <MailboxList
          select={mailSet}
          mails={allMail}
          folders={folders}
          active={mail}
        ></MailboxList>
        <Mail mail={mail} labels={labels}></Mail>
      </div>
    </div>
  );
};

export default Mailbox;
