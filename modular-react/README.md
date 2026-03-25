# React Modularity Assignment

A React application demonstrating **default exports**, **named exports**, and **shared components** across a multi-file component architecture.

---

## 📦 Project Structure

```
src/
├── App.js                        # Root component — assembles all pieces
├── App.css                       # Global styles & design tokens
├── components/
│   ├── Header.js / Header.css    # Default export — sticky top navigation
│   ├── Footer.js / Footer.css    # Default export — page footer
│   ├── ContentA.js               # Named export — interactive counter
│   ├── ContentB.js               # Named export — color cycler & message board
│   ├── SharedComponents.js       # Named exports — reusable Button & Badge
│   └── Content.css               # Shared styles for content sections
└── __tests__/
    ├── Button.test.js            # 8 tests (4 normal + 4 edge)
    ├── ContentA.test.js          # 8 tests (4 normal + 4 edge)
    └── ContentB.test.js          # 8 tests (4 normal + 4 edge)
```

---

## 🔑 Export / Import Summary

| File | Export type | Imported in App.js as |
|------|-------------|----------------------|
| `Header.js` | `export default Header` | `import Header from './components/Header'` |
| `Footer.js` | `export default Footer` | `import Footer from './components/Footer'` |
| `ContentA.js` | `export function ContentA` | `import { ContentA } from './components/ContentA'` |
| `ContentB.js` | `export function ContentB` | `import { ContentB } from './components/ContentB'` |
| `SharedComponents.js` | `export function Button` | `import { Button } from './components/SharedComponents'` |

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18 and npm installed

### Install & Run

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/react-modularity-assignment.git
cd react-modularity-assignment

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
# → Opens http://localhost:3000
```

### Run Tests

```bash
npm test
# Runs all 24 tests across 3 test files
```

---

## ✅ Test Coverage

Each test file contains **4 normal cases** and **4 edge cases**:

| Suite | Tests | What's covered |
|-------|-------|----------------|
| `Button.test.js` | 8 | Rendering, click handling, variants, disabled state |
| `ContentA.test.js` | 8 | Counter increment, reset guard, like toggle |
| `ContentB.test.js` | 8 | Message posting, empty guard, clear board, Enter key |

---

## 🛠 Tech Stack

- **React 18** with Create React App
- **CSS custom properties** for theming
- **React Testing Library** + **Jest** for tests
- Google Fonts: Playfair Display, DM Sans, DM Mono
