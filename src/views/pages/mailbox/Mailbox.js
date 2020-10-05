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

const Mailbox = ({ match }) => {
  const {
    params: { folder },
  } = match;
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

  const filteredMails = (raw) => {
    switch (folder) {
      case "inbox":
        return raw.filter(
          (mail) => mail.folder == "7c004a19-4506-48ef-93ab-f16381302e3b"
        );
      case "sent":
        return raw.filter(
          (mail) => mail.folder == "1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0"
        );
      case "drafts":
        return raw.filter(
          (mail) => mail.folder == "fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5"
        );
      case "spam":
        return raw.filter(
          (mail) => mail.folder == "0197c436-2ef3-424d-b546-8b7f49186e15"
        );
      case "trash":
        return raw.filter(
          (mail) => mail.folder == "2fa74637-d362-4fd2-9a88-f7195a88bdde"
        );
      default:
        return raw;
    }
  };

  useEffect(() => {
    setallMail(filteredMails(mails));
  }, [folder]);

  useEffect(() => {
    setallMail(filteredMails(mails));
  }, [mails]); // set the relation between redux campaign and local state

  return (
    <div className="flex flex-col flex-auto w-full xs:p-2">
      <div className="flex flex-wrap w-full h-full bg-white">
        <MailboxMenu mails={mails} folders={folders}></MailboxMenu>
        <MailboxList
          folder={folder}
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
