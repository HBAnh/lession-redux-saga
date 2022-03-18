import * as modalTypes from "../constants/modal";

const initialState = {
  showM: false,
  title: "",
  component: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case modalTypes.SHOW_MODAL: {
      const {title, component} = action.payload;
      return {
        ...state,
        title,
        component,
        showM: true,
      };
    }
    case modalTypes.HIDE_MODAL: {
      return {
        ...state,
        showM: false,
        title: '',
        component: null,
      };
    }
    default:
      return state;
  }
};

export default reducer;
