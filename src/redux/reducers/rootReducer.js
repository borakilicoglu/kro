import { combineReducers } from "redux";
import customizer from "./customizer/";
import auth from "./auth/";
import navbar from "./navbar/Index";
import mailbox from "./mailbox/Index";
import tasks from "./tasks/Index";
import helpcenter from "./helpcenter/index";

const rootReducer = combineReducers({
  mailbox: mailbox,
  customizer: customizer,
  auth: auth,
  navbar: navbar,
  tasks: tasks,
  helpcenter: helpcenter,
});

export default rootReducer;
