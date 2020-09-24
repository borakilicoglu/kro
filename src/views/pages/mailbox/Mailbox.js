import React, { useEffect } from "react";

import MailboxMenu from "./MailboxMenu";
import MailboxList from "./MailboxList";
import Mail from "./Mail";

import {
  labels as labelsMailbox,
  folders as foldersMailbox,
  filters as filtersMailbox,
  settings as settingsMailbox,
  mails as mailsMailbox,
} from "../../../@fake-db/mailbox";

const Mailbox = () => {
  const [labels, setLabels] = React.useState([]);
  const [folders, setFolders] = React.useState([]);
  const [filters, setFilters] = React.useState([]);
  const [settings, setSettings] = React.useState([]);
  const [mails, setMails] = React.useState([]);
  const [mail, setMail] = React.useState();

  const mailSet = (mail) => setMail(mail);

  useEffect(() => {
    setFolders(foldersMailbox);
    setFilters(filtersMailbox);
    setSettings(settingsMailbox);
    setMails(mailsMailbox);
    setLabels(labelsMailbox);
    return () => {};
  }, []);

  return (
    <div className="flex flex-col flex-auto w-full xs:p-2">
      <div className="flex flex-wrap w-full h-full bg-white">
        <MailboxMenu count={mails.length}></MailboxMenu>
        <MailboxList mailSet={mailSet} mails={mails}></MailboxList>
        <Mail mail={mail} labels={labels}></Mail>
      </div>
    </div>
  );
};

export default Mailbox;
