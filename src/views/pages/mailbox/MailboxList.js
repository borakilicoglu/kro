import React, { useEffect } from "react";
import moment from "moment";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import StarTwoToneIcon from "@material-ui/icons/StarTwoTone";
import LabelImportantTwoToneIcon from "@material-ui/icons/LabelImportantTwoTone";

const MailboxList = ({ mails, select, active, folder }) => {
  const [filtered, setfFiltered] = React.useState([]);

  useEffect(() => {
    setfFiltered(filter(mails));
  }, [mails, folder]);

  const filter = (raw) => {
    // switch (folder) {
    //   case "inbox":
    //     return raw.filter(
    //       (mail) => mail.folder == "7c004a19-4506-48ef-93ab-f16381302e3b"
    //     );
    //   case "sent":
    //     return raw.filter(
    //       (mail) => mail.folder == "1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0"
    //     );
    //   case "drafts":
    //     return raw.filter(
    //       (mail) => mail.folder == "fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5"
    //     );
    //   case "spam":
    //     return raw.filter(
    //       (mail) => mail.folder == "0197c436-2ef3-424d-b546-8b7f49186e15"
    //     );
    //   case "trash":
    //     return raw.filter(
    //       (mail) => mail.folder == "2fa74637-d362-4fd2-9a88-f7195a88bdde"
    //     );
    //   case "starred":
    //     return raw.filter((mail) => mail.starred === true);
    //   case "important":
    //     return raw.filter((mail) => mail.important === true);
    //   case "personal":
    //     return raw.filter((mail) =>
    //       mail.labels.includes("b167d3c4-f6ed-4ea6-9579-a12f95a9d76e")
    //     );
    //   case "work":
    //     return raw.filter((mail) =>
    //       mail.labels.includes("745cf30e-ca84-47a1-a553-b70eb630d8e7")
    //     );
    //   case "payments":
    //     return raw.filter((mail) =>
    //       mail.labels.includes("8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3")
    //     );
    //   case "invoices":
    //     return raw.filter((mail) =>
    //       mail.labels.includes("b2d1e4e7-7cfd-4b51-ae59-217a093df754")
    //     );
    //   case "accounts":
    //     return raw.filter((mail) =>
    //       mail.labels.includes("184cd689-4ee4-47cf-9f8a-12233d614326")
    //     );
    //   case "forums":
    //     return raw.filter((mail) =>
    //       mail.labels.includes("b67fc437-6118-4ec8-a3c7-9320b828e3fc")
    //     );
    //   default:
    //     return raw;
    }
  };

  return (
    <div
      className={`w-1/4 border-r overflow-scroll relative ${
        filtered && filtered.length ? "" : "hidden"
      }`}
    >
      <div className="flex p-3 border-b items-center sticky top-0 bg-white z-40">
        <IconButton color="primary" component="span">
          <MenuIcon />
        </IconButton>
        <div className="pl-2 flex-grow">
          <strong className="uppercase">{folder}</strong>
        </div>
        <div>1-10 of {filtered.length}</div>
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
        {filtered.map((mail, index) => (
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
