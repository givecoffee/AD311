import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ContentA } from "../components/ContentA";

// ─── Normal Cases ────────────────────────────────────────────────────────────

test("NC-1: renders ContentA section heading", () => {
  render(<ContentA />);
  expect(screen.getByText("Interactive Counter")).toBeInTheDocument();
});

test("NC-2: counter starts at 0", () => {
  render(<ContentA />);
  expect(screen.getByText("0")).toBeInTheDocument();
});

test("NC-3: clicking Increment increases count by 1", () => {
  render(<ContentA />);
  fireEvent.click(screen.getByRole("button", { name: "Increment" }));
  expect(screen.getByText("1")).toBeInTheDocument();
});

test("NC-4: clicking Increment multiple times accumulates count", () => {
  render(<ContentA />);
  const btn = screen.getByRole("button", { name: "Increment" });
  fireEvent.click(btn);
  fireEvent.click(btn);
  fireEvent.click(btn);
  expect(screen.getByText("3")).toBeInTheDocument();
});

// ─── Edge Cases ──────────────────────────────────────────────────────────────

test("EC-1: Reset button is disabled when count is 0", () => {
  render(<ContentA />);
  expect(screen.getByRole("button", { name: "Reset" })).toBeDisabled();
});

test("EC-2: Reset button becomes enabled after increment", () => {
  render(<ContentA />);
  fireEvent.click(screen.getByRole("button", { name: "Increment" }));
  expect(screen.getByRole("button", { name: "Reset" })).not.toBeDisabled();
});

test("EC-3: clicking Reset returns count to 0", () => {
  render(<ContentA />);
  fireEvent.click(screen.getByRole("button", { name: "Increment" }));
  fireEvent.click(screen.getByRole("button", { name: "Increment" }));
  fireEvent.click(screen.getByRole("button", { name: "Reset" }));
  expect(screen.getByText("0")).toBeInTheDocument();
});

test("EC-4: Like button toggles text between liked and unliked states", () => {
  render(<ContentA />);
  const likeBtn = screen.getByRole("button", { name: /like/i });
  expect(likeBtn).toHaveTextContent("🤍 Like");
  fireEvent.click(likeBtn);
  expect(likeBtn).toHaveTextContent("❤️ Liked!");
  fireEvent.click(likeBtn);
  expect(likeBtn).toHaveTextContent("🤍 Like");
});
