# 🐶 Dog Breeds

A single-page, vanilla JavaScript web application that explores the
public [Dog API](https://dogapi.dog/api/v2) using the browser Fetch API.

---

## Features

| Part | Feature |
|------|---------|
| 1 | Fetch and display a list of all dog breeds on page load |
| 2 | Click any breed to open a slide-in detail panel (name, description, life span, weight, hypoallergenic) |
| 3 | Load random dog facts on demand |
| 4 | Load dog breed groups on demand |
| 5 | Error banners and loading indicators for every async operation |
| ✅ | In-browser test suite with normal and edge case coverage |

---

## How to Run

### Option A — Open directly
```bash
# No server required
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

### Option B — Local static server (recommended)
```bash
npx http-server .
# Then visit http://localhost:8080
```

---

## Test Cases

### Normal Tests

| ID | Function | What is tested |
|----|----------|---------------|
| N1 | `apiFetch` | Resolves with an object; `data.data` is an Array |
| N2 | `fetchBreeds` | Returns a non-empty Array; items have `id` + `attributes` |
| N3 | `fetchBreedById` | Gets first breed id, verifies returned id matches; `attributes.name` is a string |
| N4 | `fetchFacts` | Returns a non-empty Array; first item has a string `attributes.body` |
| N5 | `fetchGroups` | Returns a non-empty Array; first item has a string `attributes.name` |

### Edge Tests

| ID | Function | Scenario | What is tested |
|----|----------|----------|---------------|
| E1 | `apiFetch` | URL returns 404 | Must throw; message contains `"404"` or `"HTTP"` |
| E2 | `fetchBreedById('')` | Empty string id | Must throw before network; message contains `"id"` |
| E3 | `renderBreedList([])` | Empty array | Shows "No breeds" fallback; does not throw |
| E4 | `renderFacts(null)` | Null input | Shows "No facts" fallback; does not throw |
| E5 | `apiFetch` | Non-existent domain | Must throw an `Error` instance (network failure) |
| E6 | `fetchBreedById(undefined)` | Undefined id | Must throw |

---

## Project Structure

```
dog-breeds/
├── index.html   # All markup and navigation
├── styles.css   # All styles (no external CSS libraries)
├── app.js       # All API logic and UI rendering
├── tests.js     # In-browser test suite
└── README.md    # Project description and run instructions
```

---

## Clone

```bash
git clone https://github.com/<your-username>/dog-breeds.git
cd dog-breeds
open index.html
```

---

## Notes

- No frameworks, no CSS libraries, no `package.json`, no build step
- The Dog API is public — no API key required
- CORS is supported by the API; no proxy needed
- Tested in Chrome, Firefox, Safari, and Edge