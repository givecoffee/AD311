import React from "react";

// Default imports — Header and Footer use `export default`
import Header from "./components/Header";
import Footer from "./components/Footer";

// Named imports — ContentA and ContentB use `export function` (named export)
import { ContentA } from "./components/ContentA";
import { ContentB } from "./components/ContentB";

import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Default import — Header */}
      <Header />

      <main className="app-main">
        <div className="app-hero">
          <h1 className="app-hero__title">React Modularity</h1>
          <p className="app-hero__subtitle">
            Exploring <strong>default</strong> and <strong>named</strong> exports
            across five component files.
          </p>
          <div className="import-legend">
            <div className="legend-item">
              <span className="legend-dot legend-dot--default" />
              <code>import Header from './components/Header'</code>
              <span className="legend-tag">default import</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot legend-dot--named" />
              <code>import &#123; ContentA &#125; from './components/ContentA'</code>
              <span className="legend-tag">named import</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot legend-dot--named" />
              <code>import &#123; Button &#125; from './components/SharedComponents'</code>
              <span className="legend-tag">named import</span>
            </div>
          </div>
        </div>

        <div className="app-grid">
          {/* Named import — ContentA */}
          <ContentA />

          {/* Named import — ContentB */}
          <ContentB />
        </div>
      </main>

      {/* Default import — Footer */}
      <Footer />
    </div>
  );
}

export default App;
