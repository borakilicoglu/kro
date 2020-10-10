import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import StarTwoToneIcon from "@material-ui/icons/StarTwoTone";
import LabelImportantTwoToneIcon from "@material-ui/icons/LabelImportantTwoTone";

import { getFilteredMails } from "../../../redux/actions/mailbox";

const MailboxList = ({ select, active, params }) => {
  console.log(params);

  const dispatch = useDispatch();
  const scrollMenu = useRef(null);
  const [mails, setMails] = React.useState();
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    scrollMenu.current.scrollTop = 0;
    console.log(params);
    dispatch(getFilteredMails(params));
  }, [params]);

  const { filteredMails } = useSelector((state) => state.mailbox);

  useEffect(() => {
    setMails(filteredMails);
  }, [filteredMails]);

  return (
    <div
      ref={scrollMenu}
      className={`w-1/4 border-r overflow-scroll relative ${
        mails && mails.length ? "" : "hidden"
      }`}
    >
      <div className="flex p-3 border-b items-center sticky top-0 bg-white z-40">
        <IconButton color="primary" component="span">
          <MenuIcon />
        </IconButton>
        <div className="pl-2 flex-grow">
          <strong className="uppercase text-xs">{params}</strong>
        </div>
        <div className="text-xs">1-10 of {mails && mails.length}</div>
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
        {mails &&
          mails.map((mail, index) => (
            <div
              className={`border-b cursor-pointer ${
                active && active.id == mail.id
                  ? "bg-indigo-100"
                  : "hover:bg-gray-100"
              }`}
              key={index}
              onClick={() => select(mail)}
            >
              <div
                className={`p-6 ${
                  mail.unread ? "border-l-4 border-indigo-500" : ""
                }`}
              >
                <div className="flex justify-between">
                  <span className="font-semibold">
                    {mail.from.contact
                      .slice(0, mail.from.contact.lastIndexOf("<"))
                      .trim()}
                    {mail.important && (
                      <span className="ml-2">
                        <LabelImportantTwoToneIcon
                          style={{ color: "#f56565", fontSize: "16px" }}
                        />
                      </span>
                    )}
                  </span>
                  <span className="text-gray-500 flex-shrink">
                    {moment(mail.date).format("ll")}
                  </span>
                </div>
                <div className="flex mb-1">
                  <span className="truncate flex-grow">{mail.subject}</span>
                  <span>
                    {mail.starred && (
                      <StarTwoToneIcon
                        style={{ color: "#f56565", fontSize: "16px" }}
                      />
                    )}
                  </span>
                </div>
                <div className="truncate text-gray-500">{mail.content}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MailboxList;
