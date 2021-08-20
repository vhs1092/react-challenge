import { OPEN_NOTIFICATION, CLOSE_NOTIFICATION } from "./Types";

export const initialState = {
  isOpen: false,
  type: "",
  message: "",
};

export const NotificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_NOTIFICATION:
      return {
        isOpen: action.payload.isOpen,
        type: action.payload.type,
        message: action.payload.message,
      };

    case CLOSE_NOTIFICATION:
      return initialState;

    default:
      return state;
  }
};
