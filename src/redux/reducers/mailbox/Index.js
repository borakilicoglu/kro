let initialState = {
  mails: [],
  params: null,
  query: null,
  selectedEmails: [],
  filteredMails: [],
};

const mailbox = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MAILS":
      let mails = [...state.mails];
      mails = action.mails;
      return { ...state, mails, params: action.routeParams };

    case "SET_STARRED":
      state.mails.find(
        (i) => i.id === action.mailId
      ).isStarred = !state.mails.find((i) => i.id === action.mailId).isStarred;
      return { ...state };

    case "SEARCH_MAIL":
      let filteredMails = state.mails.filter((val) => {
        if (action.query.length > 0) {
          return (
            val.sender_name.toLowerCase().includes(action.query) ||
            val.sender.toLowerCase().includes(action.query) ||
            val.message.includes(action.query) ||
            val.subject.toLowerCase().includes(action.query)
          );
        } else {
          return state.mails;
        }
      });

      return { ...state, query: action.query, filteredMails };

    case "SELECT_MAIL":
      const mailId = action.id;
      let selectedEmails = [...state.selectedEmails];

      if (selectedEmails.find((id) => id === mailId) !== undefined) {
        selectedEmails = selectedEmails.filter((id) => id !== mailId);
      } else {
        selectedEmails = [...selectedEmails, mailId];
      }

      return { ...state, selectedEmails };

    case "SELECT_ALL_MAILS":
      const arr = Object.keys(state.mails).map((k) => {
        return state.mails[k];
      });

      const selectedEmailsID = arr.map((mail) => mail.id);
      return {
        ...state,
        selectedEmails: selectedEmailsID,
      };

    case "DESELECT_ALL_MAILS": {
      return {
        ...state,
        selectedEmails: [],
      };
    }
    case "MOVE_MAIL":
      return { ...state, selectedEmails: [] };
    case "SET_UNREAD":
      let updatedEmails = action.id.forEach((mailId) => {
        const mailIndex = state.mails.findIndex((mail) => mail.id === mailId);
        if (mailIndex !== -1) state.mails[mailIndex].unread = action.unreadFlag;
        state.selectedEmails = [];
      });
      return { ...state, updatedEmails };
    case "CHANGE_FILTER":
      state.params = action.filter;
      return { ...state };
    default:
      return { ...state };
  }
};
export default mailbox;
