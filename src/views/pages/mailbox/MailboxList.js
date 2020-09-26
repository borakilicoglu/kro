import React from "react";
import moment from "moment";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const MailboxList = ({ mails, mailSet }) => {
  return (
    <div className="w-1/4 border-r overflow-scroll relative">
      <div className="flex p-3 border-b items-center relative sticky top-0 bg-white">
        <IconButton color="primary" component="span">
          <MenuIcon />
        </IconButton>
        <div className="pl-2 flex-grow">
          <strong>INBOX</strong>
        </div>
        <div>1-10 of 45</div>
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
        {mails.map((mail, index) => (
          <div
            className="border-b p-6 cursor-pointer"
            key={index}
            onClick={() => mailSet(mail)}
          >
            <div>
              <p className="font-semibold">
                {mail.from.contact
                  .slice(0, mail.from.contact.lastIndexOf("<"))
                  .trim()}
              </p>
            </div>
            <div className="truncate mb-1">
              {mail.subject} <span>{moment(mail.date).format("lll DD")}</span>
            </div>
            <div className="truncate text-gray-500">{mail.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MailboxList;
