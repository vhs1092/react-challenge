import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import UserForm from "../pages/UserForm";
import { Provider } from "react-redux";
import configureStore from "../store";
import {createMemoryHistory} from "history";
import {Router} from "react-router-dom";
const store = configureStore();

describe("Render UserForm", () => {
  const history = createMemoryHistory();
  history.push("/create-user");

  it("Render fields", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
        <UserForm />
        </Router>
      </Provider>
    );
    expect(getByTestId("name")).toBeInTheDocument();
    expect(getByTestId("email")).toBeInTheDocument();
    expect(getByTestId("phone")).toBeInTheDocument();
    expect(getByTestId("country")).toBeInTheDocument();
    expect(getByTestId("submit")).toBeInTheDocument();
  });

  it("fields must be entered", async () => {
    const { getByTestId, findAllByText } = render(
      <Provider store={store}>
        <Router history={history}>
        <UserForm />
        </Router>
      </Provider>
    );
    userEvent.type(getByTestId("name"), "test");
    userEvent.type(getByTestId("email"), "test@gmail.com");
    userEvent.type(getByTestId("phone"), "");
    userEvent.type(getByTestId("country"), "Guatemala");
    userEvent.click(getByTestId("submit"));
    expect(await findAllByText(/All fields must be entered/i)).toBeTruthy();
  });
  it("when some fields are empty", async () => {
    const { getByTestId, findAllByText } = render(
      <Provider store={store}>
        <Router history={history}>
        <UserForm />
        </Router>
      </Provider>
    );
    userEvent.type(getByTestId("name"), "test");
    userEvent.type(getByTestId("email"), "test@gmail.com");
    userEvent.type(getByTestId("phone"), "");
    userEvent.type(getByTestId("country"), "Guatemala");
    userEvent.click(getByTestId("submit"));
    expect(await findAllByText(/All fields must be entered/i)).toBeTruthy();
  });

  it("when email is invalid", async () => {
    const { getByTestId, findAllByText } = render(
      <Provider store={store}>
        <Router history={history}>
        <UserForm />
        </Router>
      </Provider>
    );
    userEvent.type(getByTestId("name"), "test");
    userEvent.type(getByTestId("email"), "test");
    userEvent.type(getByTestId("phone"), "50265685845");
    userEvent.type(getByTestId("country"), "Guatemala");
    userEvent.click(getByTestId("submit"));
    expect(await findAllByText(/Email format is invalid/i)).toBeTruthy();
  });
});
