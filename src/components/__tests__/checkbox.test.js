import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

import Checkbox from "../checkbox";

let container;

//helpers
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(<Checkbox />, container);
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing checkbox component", () => {
  //verificando el label
  it("Label inactive by default", () => {
    const label = container.querySelector("label");
    expect(label.textContent).toBe("Inactive");
  });

  //verificando el input
  it("Checbox inactive by default", () => {
    const input = container.querySelector("input");
    expect(input.checked).toBe(false);
  });

  //probar el evento onClic
  it("Checkbox status and label change when clicked", () => {
    const label = container.querySelector("label");
    const input = container.querySelector("input");
    act(() => {
      input.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(label.textContent).toBe("Active");
    expect(input.checked).toBe(true);
  });
});
