import React, { useState } from "react";
import { Button, Badge } from "./SharedComponents";
import "./Content.css";

const COLORS = ["#EC644B", "#3A86FF", "#2EC4B6", "#FF9F1C", "#9B5DE5"];

// Named export
export function ContentB() {
  const [colorIndex, setColorIndex] = useState(0);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleColorChange = () =>
    setColorIndex((i) => (i + 1) % COLORS.length);

  const handleAddMessage = () => {
    if (input.trim() === "") return;
    setMessages((m) => [...m, input.trim()]);
    setInput("");
  };

  const handleClear = () => setMessages([]);

  return (
    <section className="content-card" id="content-b">
      <div className="content-card__header">
        <Badge text="Section B" color="green" />
        <h2 className="content-card__title">Color Cycler & Message Board</h2>
        <p className="content-card__desc">
          Cycle through accent colors and post messages to a live board — demonstrating
          multiple pieces of local state working together.
        </p>
      </div>

      <div className="color-demo" style={{ background: COLORS[colorIndex] }}>
        <span className="color-hex">{COLORS[colorIndex]}</span>
      </div>

      <div className="content-card__actions">
        <Button label="Next Color →" onClick={handleColorChange} variant="primary" />
      </div>

      <div className="message-board">
        <div className="message-input-row">
          <input
            className="message-input"
            type="text"
            placeholder="Type a message…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddMessage()}
            maxLength={80}
          />
          <Button label="Post" onClick={handleAddMessage} variant="primary" />
        </div>

        {messages.length > 0 ? (
          <>
            <ul className="message-list">
              {messages.map((msg, i) => (
                <li key={i} className="message-item">
                  <span className="message-dot" style={{ background: COLORS[colorIndex] }} />
                  {msg}
                </li>
              ))}
            </ul>
            <Button label="Clear Board" onClick={handleClear} variant="secondary" />
          </>
        ) : (
          <p className="message-empty">No messages yet. Post the first one!</p>
        )}
      </div>

      <p className="content-card__note">
        <strong>Import note:</strong> <code>ContentB</code> also uses a{" "}
        <strong>named export</strong> and imports <code>Button</code> &amp;{" "}
        <code>Badge</code> as <strong>named imports</strong>.
      </p>
    </section>
  );
}
