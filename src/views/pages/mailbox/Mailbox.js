import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmails, setUtilities } from "../../../redux/actions/mailbox";
import { folders, filters, labels } from "../../../configs/mailboxConfig.js";

import MailboxSplash from "./MailboxSplash";
import MailboxMenu from "./MailboxMenu";
import MailboxList from "./MailboxList";
import Mail from "./Mail";

const Mailbox = ({ match }) => {
  const dispatch = useDispatch();
  const {
    params: { params },
  } = match;
  const [loading, setLoading] = React.useState(true);
  const [state, setState] = React.useState({
    mail: "",
    mails: [],
    utilities: {},
    filteredMails: [],
  });

  useEffect(() => {
    dispatch(getEmails({ filter: "" }));
    dispatch(setUtilities({ folders, filters, labels }));
  }, []);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      mail: "",
    }));
  }, [params]);

  const { mail, mails, filteredMails } = useSelector((state) => state.mailbox);

  useEffect(() => {
    setLoading(true);
    setState((prevState) => ({
      ...prevState,
      mails: mails,
      utilities: { folders, filters, labels },
    }));
    setLoading(false);
    return () => {};
  }, [mails]);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      mail: mail,
    }));
    return () => {};
  }, [mail]);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      filteredMails: filteredMails,
    }));
    return () => {};
  }, [filteredMails]);

  return (
    <div className="flex flex-col flex-auto w-full xs:p-2">
      {!loading && state.mails.length && (
        <div className="flex flex-wrap w-full h-full bg-white">
          <MailboxMenu
            data={state.mails}
            params={params}
            utilities={state.utilities}
          ></MailboxMenu>

          <MailboxList
            active={mail}
            params={params}
            mails={mails}
          ></MailboxList>

          {state.mail.length > 0 ? (
            <Mail mail={state.mails.find((x) => x.id == state.mail)}></Mail>
          ) : (
            <MailboxSplash toggle={!!state.filteredMails.length} />
          )}
        </div>
      )}
    </div>
  );
};

export default Mailbox;
