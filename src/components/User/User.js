import React from "react";
import { useDispatch } from "react-redux";

import "../../sass/user.scss";
import { deleteUser } from "../../store/User/Actions";
import { useHistory } from "react-router-dom";

const User = ({ name, email, phone, country }) => {
  const dispatch = useDispatch()
  const history = useHistory();

  return (
    <div className="product">
      <span>{name}</span>
      <span>{email}</span>
      <span>{phone}</span>
      <span>{country}</span>
      <span>
        <button className="button" onClick={() => { history.push("/edit-user", { isUpdate: true, user: { name, email, phone, country } }) }}>Edit</button>
        <button className="button" onClick={() => { dispatch(deleteUser(email)) }}>Delete</button>
      </span>
    </div>
  );
};

export default User;
