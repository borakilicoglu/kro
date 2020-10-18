import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AttachmentIcon from "@material-ui/icons/Attachment";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import StarTwoToneIcon from "@material-ui/icons/StarTwoTone";
import LabelImportantTwoToneIcon from "@material-ui/icons/LabelImportantTwoTone";

import { getFilteredMails, setMail } from "../../../redux/actions/mailbox";

const MailboxList = ({ params, active }) => {
  const dispatch = useDispatch();
  const scrollMenu = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getFilteredMails(params));
    scrollMenu.current.scrollTop = 0;
    setCurrentPage(1);
  }, [params]);

  useEffect(() => {
    scrollMenu.current.scrollTop = 0;
  }, [currentPage]);

  const { filteredMails } = useSelector((state) => state.mailbox);

  return (
    filteredMails && (
      <div
        ref={scrollMenu}
        className={`w-1/4 border-r overflow-scroll relative ${
          filteredMails && filteredMails.length ? "" : "hidden"
        }`}
      >
        <div className="flex p-3 border-b items-center sticky top-0 bg-white z-40">
          <IconButton color="primary" component="span">
            <MenuIcon />
          </IconButton>
          <div className="flex flex-row justify-between w-full items-center text-xs">
            <strong className="uppercase">{params}</strong>
            <span className="font-medium">
              <span>{currentPage * 10 - 10 + 1}</span>
              <span className="mx-1 text-gray-600">-</span>
              <span>
                {currentPage * 10 > filteredMails.length
                  ? filteredMails.length
                  : currentPage * 10}
              </span>
              <span className="mx-1 text-gray-600">of</span>
              <span>{filteredMails && filteredMails.length}</span>
            </span>
          </div>
          <div>
            <IconButton
              color="primary"
              component="span"
              disabled={currentPage == 1}
              onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
            >
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <div>
            <IconButton
              color="primary"
              component="span"
              disabled={filteredMails.length / currentPage < 10}
              onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
            >
              <ChevronRightIcon />
            </IconButton>
          </div>
        </div>
        <div className="h-px">
          {filteredMails &&
            filteredMails
              .slice(currentPage * 10 - 10, currentPage * 10)
              .map((mail, index) => (
                <div
                  className={`border-b cursor-pointer ${
                    active == mail.id ? "bg-indigo-100" : "hover:bg-gray-100"
                  }`}
                  key={index}
                  onClick={() => dispatch(setMail(mail.id))}
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
                        {mail.attachments.length > 0 && (
                          <AttachmentIcon
                            style={{ fontSize: "16px" }}
                          ></AttachmentIcon>
                        )}
                      </span>
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
    )
  );
};

export default MailboxList;
