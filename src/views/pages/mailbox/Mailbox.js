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
  const [data, setData] = React.useState({
    mail: {},
    mails: [],
    utilities: {},
    filteredMails: [],
  });

  useEffect(() => {
    dispatch(getEmails({ filter: "" }));
    dispatch(setUtilities({ folders, filters, labels }));
  }, []);

  useEffect(() => {
    setData((prevState) => ({
      ...prevState,
      mail: {},
    }));
  }, [params]);

  const { mail, mails, filteredMails } = useSelector((state) => state.mailbox);

  useEffect(() => {
    setData((prevState) => ({
      ...prevState,
      mails: mails,
      utilities: { folders, filters, labels },
    }));
    setLoading(false);
    return () => {};
  }, [mails]);

  useEffect(() => {
    setData((prevState) => ({
      ...prevState,
      mail: mail,
    }));
    setLoading(false);
    console.log(mail.type);
    return () => {};
  }, [mail]);

  useEffect(() => {
    setData((prevState) => ({
      ...prevState,
      filteredMails: filteredMails,
    }));
    return () => {};
  }, [filteredMails]);

  return (
    <div className="flex flex-col flex-auto w-full xs:p-2">
      {!loading && (
        <div className="flex flex-wrap w-full h-full bg-white">
          <MailboxMenu
            data={data.mails}
            params={params}
            utilities={data.utilities}
          ></MailboxMenu>

          <MailboxList params={params}></MailboxList>

          {
            !!Object.keys(data.mail).length && <h1>{data.mail.type}</h1>
            // <Mail labels={data.utilities.labels}></Mail>
          }

          {/* {mail ? ( */}
          {/* ) : ( */}
          {/* <MailboxSplash
              toggle={!!data.filteredMails.length}
              count={data.filteredMails.length}
            /> */}
          {/* )} */}
        </div>
      )}
    </div>
  );
};

export default Mailbox;
