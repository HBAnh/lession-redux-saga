import * as modalTypes from "../constants/modal";

const initialState = {
  showM: false,
  title: "",
  component: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case modalTypes.SHOW_MODAL: {
      return {
        ...state,
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
    case modalTypes.CHANGE_MODAL_TITLE: {
      const { title } = action.payload;
      return {
        ...state,
        title,
      };
    }
    case modalTypes.CHANGE_MODAL_CONTENT: {
      const { component } = action.payload;
      return {
        ...state,
        component,
      };
    }
    default:
      return state;
  }
};

export default reducer;
