import * as modalTypes from "../constants/modal";

export const showModal = (title,component ) => ({
  type: modalTypes.SHOW_MODAL,
  payload:{
    title,
    component
  }
});

export const hideModal = () => ({
  type: modalTypes.HIDE_MODAL,
});
