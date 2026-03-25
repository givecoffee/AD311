import React, { useState } from "react";
import { Button, Badge } from "./SharedComponents";
import "./Content.css";

// Named export
export function ContentA() {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleIncrement = () => setCount((c) => c + 1);
  const handleReset = () => setCount(0);
  const handleLike = () => setLiked((l) => !l);

  return (
    <section className="content-card" id="content-a">
      <div className="content-card__header">
        <Badge text="Section A" color="accent" />
        <h2 className="content-card__title">Interactive Counter</h2>
        <p className="content-card__desc">
          A stateful counter demonstrating React's <code>useState</code> hook.
          Increment, reset, and toggle a like — all powered by shared Button components.
        </p>
      </div>

      <div className="counter-display">
        <span className="counter-number">{count}</span>
        <span className="counter-label">clicks</span>
      </div>

      <div className="content-card__actions">
        <Button label="Increment" onClick={handleIncrement} variant="primary" />
        <Button label="Reset" onClick={handleReset} variant="secondary" disabled={count === 0} />
        <Button
          label={liked ? "❤️ Liked!" : "🤍 Like"}
          onClick={handleLike}
          variant="secondary"
        />
      </div>

      <p className="content-card__note">
        <strong>Import note:</strong> <code>ContentA</code> uses a{" "}
        <strong>named export</strong> and imports <code>Button</code> via a{" "}
        <strong>named import</strong> from <code>SharedComponents.js</code>.
      </p>
    </section>
  );
}
