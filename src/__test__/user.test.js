import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import User from "../components/User/User";
import { Provider } from "react-redux";
import configureStore from "../store";
const store = configureStore();

const data = {
  name: "Juan",
  email: "arg@gmail.com",
  phone: "+543242343",
  country: "AR",
};

describe("Render User", () => {
  const { getByText } = render(
    <Provider store={store}>
      <User
        name={data.name}
        email={data.email}
        phone={data.phone}
        country={data.country}
      />
    </Provider>
  );

  it("Render elements in component", () => {
    expect(getByText(data.name)).toBeInTheDocument();
    expect(getByText(data.email)).toBeInTheDocument();
    expect(getByText(data.phone)).toBeInTheDocument();
    expect(getByText(data.country)).toBeInTheDocument();
  });
});