import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../components/SharedComponents";

// ─── Normal Cases ────────────────────────────────────────────────────────────

test("NC-1: renders Button with correct label", () => {
  render(<Button label="Click Me" onClick={() => {}} />);
  expect(screen.getByRole("button", { name: "Click Me" })).toBeInTheDocument();
});

test("NC-2: calls onClick handler when clicked", () => {
  const mockFn = jest.fn();
  render(<Button label="Go" onClick={mockFn} />);
  fireEvent.click(screen.getByRole("button"));
  expect(mockFn).toHaveBeenCalledTimes(1);
});

test("NC-3: applies primary variant class by default", () => {
  render(<Button label="Primary" onClick={() => {}} />);
  const btn = screen.getByRole("button");
  expect(btn).toHaveClass("btn--primary");
});

test("NC-4: applies secondary variant class when specified", () => {
  render(<Button label="Secondary" onClick={() => {}} variant="secondary" />);
  expect(screen.getByRole("button")).toHaveClass("btn--secondary");
});

// ─── Edge Cases ──────────────────────────────────────────────────────────────

test("EC-1: disabled button does not call onClick", () => {
  const mockFn = jest.fn();
  render(<Button label="Disabled" onClick={mockFn} disabled={true} />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(mockFn).not.toHaveBeenCalled();
});

test("EC-2: disabled button has aria-disabled attribute", () => {
  render(<Button label="Locked" onClick={() => {}} disabled={true} />);
  expect(screen.getByRole("button")).toHaveAttribute("aria-disabled", "true");
});

test("EC-3: button renders with empty string label without crashing", () => {
  render(<Button label="" onClick={() => {}} />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("EC-4: button can be clicked multiple times and fires each time", () => {
  const mockFn = jest.fn();
  render(<Button label="Multi" onClick={mockFn} />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  fireEvent.click(btn);
  fireEvent.click(btn);
  expect(mockFn).toHaveBeenCalledTimes(3);
});
