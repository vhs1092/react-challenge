import { SET_USERS, SET_USER, UPDATE_USER, DELETE_USER } from "./Types";
import { MOCK_USERS } from "../../Mock";

let usersStorage = localStorage.getItem("users");

if (usersStorage) {
  usersStorage = JSON.parse(usersStorage);
} else {
  usersStorage = MOCK_USERS;
  localStorage.setItem("users", JSON.stringify(usersStorage));
}

export const initialState = {
  users: usersStorage,
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        users: action.payload,
      };

    case SET_USER:
      return {
        users: action.payload,
      };
    case UPDATE_USER:
      return {
        users: action.payload,
      };
    case DELETE_USER:
      return {
        users: action.payload,
      };
    default:
      return state;
  }
};
