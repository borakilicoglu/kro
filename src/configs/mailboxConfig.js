import React from "react";

import InboxTwoToneIcon from "@material-ui/icons/InboxTwoTone";
import SendTwoToneIcon from "@material-ui/icons/SendTwoTone";
import DraftsTwoToneIcon from "@material-ui/icons/DraftsTwoTone";
import ErrorTwoToneIcon from "@material-ui/icons/ErrorTwoTone";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import LabelImportantTwoToneIcon from "@material-ui/icons/LabelImportantTwoTone";
import StarTwoToneIcon from "@material-ui/icons/StarTwoTone";

export const folders = [
  {
    id: "7c004a19-4506-48ef-93ab-f16381302e3b",
    title: "Inbox",
    slug: "inbox",
    icon: <InboxTwoToneIcon style={{ color: "#64748b" }} />,
  },
  {
    id: "1ee2ea29-9a1f-4c27-b4d2-5e465703b6a0",
    title: "Sent",
    slug: "sent",
    icon: <SendTwoToneIcon style={{ color: "#64748b" }} />,
  },
  {
    id: "fbdc8e79-a0c4-4a27-bc98-9c81ee7a86e5",
    title: "Drafts",
    slug: "drafts",
    icon: <DraftsTwoToneIcon style={{ color: "#64748b" }} />,
  },
  {
    id: "0197c436-2ef3-424d-b546-8b7f49186e15",
    title: "Spam",
    slug: "spam",
    icon: <ErrorTwoToneIcon style={{ color: "#64748b" }} />,
  },
  {
    id: "2fa74637-d362-4fd2-9a88-f7195a88bdde",
    title: "Trash",
    slug: "trash",
    icon: <DeleteTwoToneIcon style={{ color: "#64748b" }} />,
  },
];
export const filters = [
  {
    id: "de1b41f6-6839-4f1b-9d2c-07e55f6f8f82",
    title: "Starred",
    slug: "starred",
    icon: <StarTwoToneIcon style={{ color: "#64748b" }} />,
  },
  {
    id: "71bba1ec-a90e-4a71-9932-4bab0a99aa1c",
    title: "Important",
    slug: "important",
    icon: <LabelImportantTwoToneIcon style={{ color: "#64748b" }} />,
  },
];
export const labels = [
  {
    id: "b167d3c4-f6ed-4ea6-9579-a12f95a9d76e",
    title: "Personal",
    slug: "personal",
    color: "blue",
  },
  {
    id: "745cf30e-ca84-47a1-a553-b70eb630d8e7",
    title: "Work",
    slug: "work",
    color: "indigo",
  },
  {
    id: "8b035cb5-65c0-4ab1-bb4c-43b0e442d1f3",
    title: "Payments",
    slug: "payments",
    color: "red",
  },
  {
    id: "b2d1e4e7-7cfd-4b51-ae59-217a093df754",
    title: "Invoices",
    slug: "invoices",
    color: "teal",
  },
  {
    id: "184cd689-4ee4-47cf-9f8a-12233d614326",
    title: "Accounts",
    slug: "accounts",
    color: "purple",
  },
  {
    id: "b67fc437-6118-4ec8-a3c7-9320b828e3fc",
    title: "Forums",
    slug: "forums",
    color: "green",
  },
];
export const settings = {
  messageLayout: "right",
};
