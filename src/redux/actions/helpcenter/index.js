import axios from "axios";
import { history } from "../../../history";

// Get Initial Faqs
export const getFaqs = () => {
  return async (dispatch) => {
    await axios
      .get("api/helpcenter/faqs")
      .then((result) => {
        dispatch({
          type: "GET_FAQS",
          faqs: result.data,
        });
      })
      .catch((err) => console.log(err));
  };
};
