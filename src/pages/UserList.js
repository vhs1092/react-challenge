import React, { useEffect } from "react";
import User from "../components/User/User";
import { useSelector } from "react-redux";
import "../sass/userList.scss";

const UserList = () => {
  const userState = useSelector((state) => state.users);

  useEffect(() => {}, [userState]);

  return (
    <section>
      <h2>User list</h2>
      <div className="header-table">
        <ul>
          <li>Name</li>
          <li>Email</li>
          <li>Phone</li>
          <li>Country</li>
          <li>Actions</li>
        </ul>
      </div>
      <ul className="user-list">
        {userState.users &&
          userState.users.map((user, i) => (
            <li key={i}>
              <User
                name={user.name}
                email={user.email}
                phone={user.phone}
                country={user.country}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default UserList;
