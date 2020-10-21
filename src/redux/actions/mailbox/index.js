import axios from "axios";
import { history } from "../../../history";

// Get Initial Emails
export const getEmails = (routeParams) => {
  return async (dispatch) => {
    await axios
      .get("api/mailbox/mails", {
        params: routeParams,
      })
      .then((result) => {
        dispatch({
          type: "GET_MAILS",
          mails: result.data,
          routeParams,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const setUtilities = ({ folders, filters, labels }) => {
  return (dispatch) => {
    dispatch({
      type: "SET_UTILITIES",
      folders: folders,
      filters: filters,
      labels: labels,
    });
  };
};

export const deleteMail = (id) => {
  return (dispatch) => {
    dispatch({
      type: "DELETE_MAIL",
      id: id,
    });
  };
};

export const toggleMarkAsRead = (id) => {
  return (dispatch) => {
    dispatch({
      type: "TOGGLE_MARK_AS_READ",
      id: id,
    });
  };
};

export const toggleImportant = (id) => {
  return (dispatch) => {
    dispatch({
      type: "TOGGLE_IMPORTANT",
      id: id,
    });
  };
};

export const toggleStar = (id) => {
  return (dispatch) => {
    dispatch({
      type: "TOGGLE_STAR",
      id: id,
    });
  };
};

export const setMail = (id) => {
  return (dispatch) => {
    dispatch({
      type: "SET_MAIL",
      id: id,
    });
  };
};

export const getFilteredMails = (filter) => {
  return (dispatch) => {
    dispatch({
      type: "GET_FILTERED_MAILS",
      filter,
    });
  };
};

export const StarEmail = (id) => {
  return async (dispatch) => {
    await axios
      .post("/api/email/set-starred", {
        mailId: id,
      })
      .then((result) => {
        dispatch({
          type: "SET_STARRED",
          mailId: id,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const searchMail = (val) => {
  return (dispatch, getState) => {
    dispatch({
      type: "SEARCH_MAIL",
      query: val,
    });
  };
};

export const selectMail = (id) => {
  return (dispatch) => {
    console.log(id);
    dispatch({
      type: "SELECT_MAIL",
      id: id,
    });
  };
};

export const selectAllMails = () => {
  return (dispatch) => {
    dispatch({
      type: "SELECT_ALL_MAILS",
    });
  };
};

export const deselectAllMails = () => {
  return (dispatch) => {
    dispatch({
      type: "DESELECT_ALL_MAILS",
    });
  };
};

export const moveMail = (to, id) => {
  return async (dispatch, getState) => {
    const selectedEmails = !id
      ? getState().emailApp.mails.selectedEmails
      : [id];
    const routeParams = getState().emailApp.mails.params;
    await axios
      .post("/api/email/move-mails", {
        selectedEmails,
        mailFolder: to,
      })
      .then(() => {
        dispatch({
          type: "MOVE_MAIL",
        });
        dispatch(getEmails(routeParams));
      })
      .catch((err) => console.log(err));
  };
};

export const unreadMails = (unreadFlag) => {
  return async (dispatch, getState) => {
    const selectedEmails = getState().emailApp.mails.selectedEmails;
    await axios
      .post("api/email/mark-unread", {
        emailIds: selectedEmails,
        unreadFlag: unreadFlag,
      })
      .then((response) => {
        dispatch({
          type: "SET_UNREAD",
          unreadFlag,
          id: selectedEmails,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const setLabel = (label) => {
  return async (dispatch, getState) => {
    const selectedEmails = getState().emailApp.mails.selectedEmails;
    const routeParams = getState().emailApp.mails.params;
    await axios
      .post("/api/email/set-labels", {
        emailIds: selectedEmails,
        label: label,
      })
      .then((response) => {
        dispatch({ type: "SET_LABELS", label, response });
        dispatch(getEmails(routeParams));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const changeFilter = (filter) => {
  return (dispatch) => {
    dispatch({ type: "CHANGE_FILTER", filter });
    history.push(`/email/${filter}`);
    dispatch(getEmails({ filter }));
  };
};
