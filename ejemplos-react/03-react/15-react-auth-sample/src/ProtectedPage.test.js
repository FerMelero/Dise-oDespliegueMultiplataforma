import React from "react";
import ReactDOM from "react-dom";
import ProtectedPage from "./ProtectedPage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ProtectedPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
