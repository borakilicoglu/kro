import { combineReducers } from "redux";
import customizer from "./customizer/";
import auth from "./auth/";
import navbar from "./navbar/Index";
import emailReducer from "./email/";

const rootReducer = combineReducers({
  emailApp: emailReducer,
  customizer: customizer,
  auth: auth,
  navbar: navbar,
});

export default rootReducer;
