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
    mails: [],
    utilities: {},
  });
  const [mail, setMail] = React.useState();
  const mailSet = (mail) => setMail(mail);

  useEffect(() => {
    dispatch(getEmails({ filter: "" }));
    dispatch(setUtilities({ folders, filters, labels }));
  }, []);

  useEffect(() => {
    setMail();
  }, [params]);

  const { mails } = useSelector((state) => state.mailbox);

  useEffect(() => {
    setData((prevState) => ({
      ...prevState,
      mails: mails,
      utilities: { folders, filters, labels },
    }));
    setLoading(false);
    return () => {};
  }, [mails]);

  return (
    <div className="flex flex-col flex-auto w-full xs:p-2">
      {!loading && (
        <div className="flex flex-wrap w-full h-full bg-white">
          <MailboxMenu
            data={data.mails}
            params={params}
            utilities={data.utilities}
          ></MailboxMenu>

          <MailboxList
            select={mailSet}
            active={mail}
            params={params}
          ></MailboxList>

          {mail ? (
            <Mail mail={mail} raw={data.mails}></Mail>
          ) : (
            <MailboxSplash
              toggle={!!data.mails.length}
              count={data.mails.length}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Mailbox;
