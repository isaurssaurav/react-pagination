import React from "react";
import ReactDOM from "react-dom";
import Pagination from "./Pagination";

it("Pagination renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Pagination />, div);
});
