import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("renders default fun fact in English", () => {
  render(<App />);
  expect(screen.getByRole("note")).toHaveTextContent(/sushi/i);
});

test("switching language updates displayed fun fact", () => {
  render(<App />);

  const selector = screen.getByLabelText(/language/i);

  fireEvent.change(selector, { target: { value: "no" } });

  expect(screen.getByRole("note")).toHaveTextContent(/spise sushi/i);
});

test("language selector is accessible and labeled", () => {
  render(<App />);
  expect(screen.getByLabelText(/language/i)).toBeInTheDocument();
});