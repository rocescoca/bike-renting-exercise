import { render, screen } from "@testing-library/react";
import React from "react";
//
import App from "./App";

describe("App", () => {
  test("there is an app div", () => {
    render(<App />);
    const articleElement = screen.getByTitle("app");
    expect(articleElement).toBeInTheDocument();
  });
});
