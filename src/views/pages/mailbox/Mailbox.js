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
  const [folders, setFolders] = React.useState([]);
  const [filters, setFilters] = React.useState([]);
  // const [settings, setSettings] = React.useState([]);
  const [raw, setRaw] = React.useState([]);
  const [mail, setMail] = React.useState();
  const mailSet = (mail) => setMail(mail);

  useEffect(() => {
    dispatch(getEmails({ filter: "2fa74637-d362-4fd2-9a88-f7195a88bdde" }));
    setFilters(filtersMailbox);
    setFolders(foldersMailbox);
    return () => {};
  }, []);

  const { mails } = useSelector((state) => state.mailbox);

  useEffect(() => {
    setRaw(mails);
    return () => {};
  }, [mails]);

  return (
    <div className="flex flex-col flex-auto w-full xs:p-2">
      <div className="flex flex-wrap w-full h-full bg-white">
        <MailboxMenu
          filters={filters}
          mails={raw}
          filter={filter}
        ></MailboxMenu>
        {raw && (
          <MailboxList
            folder={filter}
            select={mailSet}
            mails={raw}
            active={mail}
          ></MailboxList>
        )}
        <Mail mail={mail}></Mail>
      </div>
    </div>
  );
};

export default Mailbox;
