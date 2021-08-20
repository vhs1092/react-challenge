import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, NavLink } from "react-router-dom";
import UserForm from "./pages/UserForm";
import UserList from "./pages/UserList";
import { closeNotification } from "./store/Notification/Actions";

import "./styles.scss";

const App = () => {
  const notification = useSelector((state) => state.notification);
  const usersState = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {

    if (notification.isOpen) {
      alert(notification.message);
      dispatch(closeNotification());
    }
  }, [usersState, dispatch, notification]);

  return (
    <div className="app layout">
      <aside>
        <header>
          <div className="logo" />
        </header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active" exact>
                User List
              </NavLink>
            </li>
            <li>
              <NavLink to="/create-user" activeClassName="active">
                Create User
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <header className="page-title">
          <h1>Users</h1>
        </header>
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route exact path="/create-user" component={UserForm} />
          <Route exact path="/edit-user" component={UserForm} />
        </Switch>
      </main>
    </div>
  );
};

export default React.memo(App);
