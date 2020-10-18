let initialState = {
  mail: {},
  mails: [],
  stats: [],
  folders: [],
  filters: [],
  labels: [],
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

    case "GET_FILTERED_MAILS":
      if (
        action.filter === "inbox" ||
        action.filter === "sent" ||
        action.filter === "drafts" ||
        action.filter === "spam" ||
        action.filter === "trash"
      ) {
        let folder = state.folders.find(
          (folder) => folder.slug == action.filter
        );
        return {
          ...state,
          filteredMails: state.mails.filter((mail) => mail.folder == folder.id),
        };
      } else if (action.filter === "starred") {
        return {
          ...state,
          filteredMails: state.mails.filter((mail) => mail.starred),
        };
      } else if (action.filter === "important") {
        return {
          ...state,
          filteredMails: state.mails.filter((mail) => mail.important),
        };
      } else if (
        action.filter === "personal" ||
        action.filter === "work" ||
        action.filter === "payments" ||
        action.filter === "invoices" ||
        action.filter === "accounts" ||
        action.filter === "forums"
      ) {
        return {
          ...state,
          filteredMails: state.mails.filter((mail) =>
            mail.labels.includes(
              state.labels.find((label) => label.slug == action.filter).id
            )
          ),
        };
      } else {
        let folder = state.folders.find((folder) => folder.slug == "inbox");
        return {
          ...state,
          filteredMails: state.mails.filter((mail) => mail.folder == folder.id),
        };
      }

    case "TOGGLE_IMPORTANT":
      state.mails.find(
        (mail) => mail.id === action.id
      ).important = !state.mails.find((mail) => mail.id === action.id)
        .important;
      return {
        ...state,
      };

    case "TOGGLE_STAR":
      state.mails.find(
        (mail) => mail.id === action.id
      ).starred = !state.mails.find((mail) => mail.id === action.id).starred;
      return {
        ...state,
      };

    case "SET_MAIL":
      state.mails.find((mail) => mail.id == action.id).unread = false;
      return {
        ...state,
        mail: state.mails.find((mail) => mail.id == action.id).id,
      };

    case "SET_UTILITIES":
      return {
        ...state,
        folders: action.folders,
        filters: action.filters,
        labels: action.labels,
      };

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
