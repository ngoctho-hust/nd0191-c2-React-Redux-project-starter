import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducer";
import middleware from "../middleware";
import { BrowserRouter } from "react-router-dom";
import { setAuthedUser } from "../action/authedUser";

const store = createStore(reducer, middleware);

describe("App", () => {
  it("should render App component and match snapshot", () => {
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(view).toBeDefined();
    expect(view).toMatchSnapshot();
  });

  it("should show require login when not login", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const heading = screen.getByText("Log In");
    expect(heading).toBeInTheDocument();
  });

  it("should show Dashboard after logged in", () => {
    store.dispatch(setAuthedUser("sarahedo"));

    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    const heading = screen.getByText("New Questions");
    expect(heading).toBeInTheDocument();
  });
});
