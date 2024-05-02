import { fireEvent, render, screen } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducer";
import middleware from "../middleware";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import PollCreation from "./PollCreation";

const store = createStore(reducer, middleware);

describe("PollCreation", () => {
  it("should render PollCreation", () => {
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <PollCreation />
        </BrowserRouter>
      </Provider>
    );
    expect(view).toBeDefined();
    expect(view).toMatchSnapshot();
  });

  it("should change when fireEvent change", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PollCreation />
        </BrowserRouter>
      </Provider>
    );

    const firstOptionInputElement = screen.getByPlaceholderText("Option One");
    const secondOptionInputElement = screen.getByPlaceholderText("Option Two");

    fireEvent.change(firstOptionInputElement, {
      target: { value: "Learn react" },
    });
    fireEvent.change(secondOptionInputElement, {
      target: { value: "Learn redux" },
    });

    expect(firstOptionInputElement.value).toBe("Learn react");
    expect(secondOptionInputElement.value).toBe("Learn redux");
  });
});
