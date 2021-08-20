import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, updateUser } from "../store/User/Actions";
import { useHistory } from "react-router-dom";

import "../sass/components.scss";
import { closeNotification } from "../store/Notification/Actions";
import { useLocation } from "react-router-dom";
import { handleSubmit } from "../services/Users";
import "../sass/userForm.scss";

const UserForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const notification = useSelector((state) => state.notification);
  const location = useLocation();

  const [formValidate, setFormValidate] = useState({
    message: "",
    isShow: false,
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  });

  const onChangeValues = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    let isMounted = true;
    if(isMounted){
      if (location.state && location.state.isUpdate) {
        setForm({
          name: location.state.user.name,
          email: location.state.user.email,
          phone: location.state.user.phone,
          country: location.state.user.country,
        });
      }
      if (notification.isOpen && notification.type === "success") {
        setForm({
          name: "",
          email: "",
          phone: "",
          country: "",
        });

        dispatch(closeNotification());
        history.push("/");
      }
    }
    return() =>{
      if(isMounted){
        isMounted = false;
        setForm({
          name: "",
          email: "",
          phone: "",
          country: "",
        });
      }
    }
  }, [notification, dispatch, history, location]);

  const submitForm = () => {
    const onSubmit = handleSubmit(form, setFormValidate)
    if(onSubmit){
      dispatch(
        location.state && location.state.isUpdate
          ? updateUser(form)
          : setUser(form)
      );
    }
  };

  return (
    <div className="centered user-form">
      <h2>Add new user</h2>
      <div>
        <label htmlFor="" className="label">
          Name
        </label>
        <input
          placeholder="Name"
          name="name"
          data-testid="name"
          type="text"
          value={form.name}
          onChange={(event) => onChangeValues("name", event.target.value)}
        />
        <label htmlFor="" className="label">
          Email
        </label>
        <input
          disabled={location.state && location.state.isUpdate}
          placeholder="Email"
          name="Email"
          data-testid="email"
          type="text"
          value={form.email}
          onChange={(event) => onChangeValues("email", event.target.value)}
        />
        <label htmlFor="" className="label">
          Phone
        </label>
        <input
          placeholder="Phone"
          name="price"
          data-testid="phone"
          type="text"
          value={form.phone}
          onChange={(event) => onChangeValues("phone", event.target.value)}
        />
        <label htmlFor="" className="label">
          Country
        </label>
        <input
          placeholder="Country"
          name="Country"
          data-testid="country"
          type="text"
          value={form.country}
          onChange={(event) => onChangeValues("country", event.target.value)}
        />
        {formValidate.isShow && <span className="error-message">{formValidate.message}</span>}
        <input
          className="button"
          type="submit"
          value="Save"
          data-testid="submit"
          onClick={() => submitForm()}
        />
      </div>
    </div>
  );
};

export default UserForm;
