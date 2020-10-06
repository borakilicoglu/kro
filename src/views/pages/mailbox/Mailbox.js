import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmails } from "../../../redux/actions/mailbox";

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

const Mailbox = ({ match }) => {
  const {
    params: { filter },
  } = match;
  const [labels, setLabels] = React.useState([]);
  const [folders, setFolders] = React.useState([]);
  // const [filters, setFilters] = React.useState([]);
  // const [settings, setSettings] = React.useState([]);
  const [raw, setRaw] = React.useState([]);
  const [mail, setMail] = React.useState();
  const mailSet = (mail) => setMail(mail);

  const dispatch = useDispatch();
  // setMails(data);

  useEffect(() => {
    dispatch(getEmails({ filter: "" }));
    setLabels(labelsMailbox);
    setFolders(foldersMailbox);
    console.log("mailbox yüklendi");
    return () => {};
  }, []);

  const { mails } = useSelector((state) => state.mailbox);

  useEffect(() => {
    setRaw(mails);
    console.log("mails yüklendi");
    return () => {};
  }, [mails]);

  return (
    <div className="flex flex-col flex-auto w-full xs:p-2">
      <div className="flex flex-wrap w-full h-full bg-white">
        <MailboxMenu
          mails={raw}
          filter={filter}
          folders={folders}
        ></MailboxMenu>
        {raw && (
          <MailboxList
            folder={filter}
            select={mailSet}
            mails={raw}
            folders={folders}
            active={mail}
          ></MailboxList>
        )}
        <Mail mail={mail} labels={labels}></Mail>
      </div>
    </div>
  );
};

export default Mailbox;
