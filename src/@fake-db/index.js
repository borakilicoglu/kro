import mock from "./mock";
import "./navbar/navbarSearch";
import "./contacts/contacts";
import "./mailbox/mailbox";
import "./navbar/navbarBookmarkSearch";
import "./auth/authentication";
import "./tasks/tasks";
import "./helpcenter/helpcenter";
mock.onAny().passThrough();
