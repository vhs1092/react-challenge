import { SET_USERS, SET_USER, UPDATE_USER, DELETE_USER } from "./Types";
import { openNotification } from "../Notification/Actions";

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    payload: users,
  };
};
export const setUser = (user) => {
  return (dispatch, getState) => {
    const users = getState().users.users.slice();

    if (users.find((person) => person.email === user.email)) {
      dispatch(
        openNotification({
          isOpen: true,
          type: "error",
          message: "User email already exists",
        })
      );
    } else {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      dispatch({
        type: SET_USER,
        payload: users,
      });
      dispatch(
        openNotification({
          isOpen: true,
          type: "success",
          message: "User has been saved",
        })
      );
    }
  };
};
export const updateUser = (user) => {
  return (dispatch, getState) => {
    let users = getState().users.users.slice();
    users = users.map((person) => {
      if (person.email === user.email) {
        person = user;
      }
      return person;
    });
    localStorage.setItem("users", JSON.stringify(users));

    dispatch({
      type: UPDATE_USER,
      payload: users,
    });
    dispatch(
      openNotification({
        isOpen: true,
        type: "success",
        message: "User has been updated",
      })
    );
  };
};
export const deleteUser = (userEmail) => {
  return (dispatch, getState) => {
    let users = getState().users.users.slice();
    users = users.filter((person) => person.email !== userEmail);

    localStorage.setItem("users", JSON.stringify(users));

    dispatch({
      type: DELETE_USER,
      payload: users,
    });
    dispatch(
      openNotification({
        isOpen: true,
        type: "success",
        message: "User has been deleted",
      })
    );
  };
};
