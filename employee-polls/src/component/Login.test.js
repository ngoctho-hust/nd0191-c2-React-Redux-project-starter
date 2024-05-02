import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducer";
import middleware from "../middleware";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Login from "./Login";

const store = createStore(reducer, middleware);

describe("Login", () => {
  it("should render Login", () => {
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    expect(view).toBeDefined();
    expect(view).toMatchSnapshot();
  });
});
