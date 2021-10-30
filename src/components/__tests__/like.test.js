import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

import Like from "../like";

let container;

//helpers
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(<Like />, container);
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing like component", () => {
    //verificando que por defecto, el componente muestra en el párrafo el valor "Likes: 0"
  it("Content is likes: 0", () => {
    const label = container.querySelector("p"); // first <p> in the document
    expect(label.textContent).toBe("Likes: 0");
  });

  //probar el evento onClick increment
  it("Verificación de click en like, el número del likes debe incrementar en 1", () => {
    const buttonIncrement = document.getElementById("increment");
    const label = container.querySelector("p");
    
    act(() => {
        buttonIncrement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(label.textContent).toBe("Likes: 1");
  });

  //probar el evento onClick decrement
  it("Verificación de click en dislike, el número del likes debe decrementar en 1", () => {
    const buttonDecrement = document.getElementById("decrement");
    const label = container.querySelector("p");
    
    act(() => {
        buttonDecrement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(label.textContent).toBe("Likes: -1");
  });

});
