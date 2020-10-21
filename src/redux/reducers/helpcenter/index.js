let initialState = {
  faqs: [],
};

const helpcenter = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FAQS":
      let faqs = [...state.faqs];
      faqs = action.faqs;
      return { ...state, faqs };
    default:
      return { ...state };
  }
};

export default helpcenter;
