import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ContentB } from "../components/ContentB";

// ─── Normal Cases ────────────────────────────────────────────────────────────

test("NC-1: renders ContentB section heading", () => {
  render(<ContentB />);
  expect(screen.getByText("Color Cycler & Message Board")).toBeInTheDocument();
});

test("NC-2: message board shows empty state initially", () => {
  render(<ContentB />);
  expect(screen.getByText("No messages yet. Post the first one!")).toBeInTheDocument();
});

test("NC-3: posting a message adds it to the board", () => {
  render(<ContentB />);
  const input = screen.getByPlaceholderText("Type a message…");
  fireEvent.change(input, { target: { value: "Hello world" } });
  fireEvent.click(screen.getByRole("button", { name: "Post" }));
  expect(screen.getByText("Hello world")).toBeInTheDocument();
});

test("NC-4: posting clears the input field", () => {
  render(<ContentB />);
  const input = screen.getByPlaceholderText("Type a message…");
  fireEvent.change(input, { target: { value: "Test" } });
  fireEvent.click(screen.getByRole("button", { name: "Post" }));
  expect(input.value).toBe("");
});

// ─── Edge Cases ──────────────────────────────────────────────────────────────

test("EC-1: submitting an empty message does not add to the list", () => {
  render(<ContentB />);
  fireEvent.click(screen.getByRole("button", { name: "Post" }));
  expect(screen.getByText("No messages yet. Post the first one!")).toBeInTheDocument();
});

test("EC-2: submitting a whitespace-only message does not add to the list", () => {
  render(<ContentB />);
  const input = screen.getByPlaceholderText("Type a message…");
  fireEvent.change(input, { target: { value: "   " } });
  fireEvent.click(screen.getByRole("button", { name: "Post" }));
  expect(screen.getByText("No messages yet. Post the first one!")).toBeInTheDocument();
});

test("EC-3: Clear Board button removes all messages", () => {
  render(<ContentB />);
  const input = screen.getByPlaceholderText("Type a message…");
  fireEvent.change(input, { target: { value: "First" } });
  fireEvent.click(screen.getByRole("button", { name: "Post" }));
  fireEvent.change(input, { target: { value: "Second" } });
  fireEvent.click(screen.getByRole("button", { name: "Post" }));
  fireEvent.click(screen.getByRole("button", { name: "Clear Board" }));
  expect(screen.getByText("No messages yet. Post the first one!")).toBeInTheDocument();
});

test("EC-4: pressing Enter key posts the message", () => {
  render(<ContentB />);
  const input = screen.getByPlaceholderText("Type a message…");
  fireEvent.change(input, { target: { value: "Keyboard post" } });
  fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
  expect(screen.getByText("Keyboard post")).toBeInTheDocument();
});
