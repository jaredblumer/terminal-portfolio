import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./page";

describe("App", () => {
  beforeEach(() => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
  });

  test("renders Terminal after load", async () => {
    render(<App />);
    expect(await screen.findByLabelText(/terminal input/i)).toBeInTheDocument();
  });
});
