import React from "react";
import "./SharedComponents.css";

// Named export — Button is a shared, reusable component
export function Button({ label, onClick, variant = "primary", disabled = false }) {
  return (
    <button
      className={`btn btn--${variant}`}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {label}
    </button>
  );
}

// Named export — Badge is another reusable shared component
export function Badge({ text, color = "accent" }) {
  return (
    <span className={`badge badge--${color}`}>{text}</span>
  );
}
