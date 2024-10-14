import "@testing-library/jest-dom";
import React from "react";

import { render } from "@testing-library/react";
import TestComp from "../TestComp";
describe("App Component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<TestComp />);
    const heading = getByText(/nextjs14/);
    expect(heading).toBeInTheDocument();
  });
});
