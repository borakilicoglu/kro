import axios from "axios"
import { history } from "../../../history"
// Get Initial Emails
export const getEmails = routeParams => {
  return async dispatch => {
    await axios
      .get("api/email/mails", {
        params: routeParams
      })
      .then(result => {
        dispatch({
          type: "GET_MAILS",
          mails: result.data,
          routeParams
        })
      })
      .catch(err => console.log(err))
  }
}

export const StarEmail = id => {
  return async dispatch => {
    await axios
      .post("/api/email/set-starred", {
        mailId: id
      })
      .then(result => {
        dispatch({
          type: "SET_STARRED",
          mailId: id
        })
      })
      .catch(err => console.log(err))
  }
}

export const searchMail = val => {
  return (dispatch, getState) => {
    dispatch({
      type: "SEARCH_MAIL",
      query: val
    })
  }
}

export const selectMail = id => {
  return dispatch => {
    dispatch({
      type: "SELECT_MAIL",
      id
    })
  }
}

export const selectAllMails = () => {
  return dispatch => {
    dispatch({
      type: "SELECT_ALL_MAILS"
    })
  }
}

export const deselectAllMails = () => {
  return dispatch => {
    dispatch({
      type: "DESELECT_ALL_MAILS"
    })
  }
}

export const moveMail = (to, id) => {
  return async (dispatch, getState) => {
    const selectedEmails = !id ? getState().emailApp.mails.selectedEmails : [id]
    const routeParams = getState().emailApp.mails.params
    await axios
      .post("/api/email/move-mails", {
        selectedEmails,
        mailFolder: to
      })
      .then(() => {
        dispatch({
          type: "MOVE_MAIL"
        })
        dispatch(getEmails(routeParams))
      })
      .catch(err => console.log(err))
  }
}

export const unreadMails = unreadFlag => {
  return async (dispatch, getState) => {
    const selectedEmails = getState().emailApp.mails.selectedEmails
    await axios
      .post("api/email/mark-unread", {
        emailIds: selectedEmails,
        unreadFlag: unreadFlag
      })
      .then(response => {
        dispatch({
          type: "SET_UNREAD",
          unreadFlag,
          id: selectedEmails
        })
      })
      .catch(err => console.log(err))
  }
}

export const setLabel = label => {
  return async (dispatch, getState) => {
    const selectedEmails = getState().emailApp.mails.selectedEmails
    const routeParams = getState().emailApp.mails.params
    await axios
      .post("/api/email/set-labels", {
        emailIds: selectedEmails,
        label: label
      })
      .then(response => {
        dispatch({ type: "SET_LABELS", label, response })
        dispatch(getEmails(routeParams))
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const changeFilter = filter => {
  return dispatch => {
    dispatch({ type: "CHANGE_FILTER", filter })
    history.push(`/email/${filter}`)
    dispatch(getEmails({ filter }))
  }
}
