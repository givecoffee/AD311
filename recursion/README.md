# Recursive String Reversal — TextWise Solutions Interview

## Problem Statement

Implement a **recursive** string-reversal function to support ContentOptimizer's
text-manipulation pipeline (sentence-structure analysis, stylistic suggestions).

---

## Clarifying Questions

Before coding, I would ask the interviewer:

| # | Question | Why it matters |
|---|---|---|
| 1 | Should the function handle `null` / `undefined` inputs, or can we assume a valid string? | Determines whether we add a guard clause |
| 2 | Are surrogate-pair Unicode characters (emoji, CJK) expected? | `.slice()` works correctly on them; `.charAt()` or index access may not |
| 3 | Is there a maximum input length? | Stack-overflow risk for very deep recursion in JS (~10k+ frames) |
| 4 | Is an iterative fallback acceptable as an optimised alternative, or must the optimised version remain recursive? | Guides the refactoring discussion |
| 5 | Should the function be pure (no mutation)? | Already satisfied by this approach |

---

## Approach

### Mental model

Reversing a string is naturally recursive:

```
reverse("hello")
= "o" + reverse("hell")
= "o" + "l" + reverse("hel")
= "o" + "l" + "l" + reverse("he")
= "o" + "l" + "l" + "e" + reverse("h")
= "o" + "l" + "l" + "e" + "h"
= "olleh"
```

Two base cases keep recursion from running forever:
- Empty string  (`""`)  → return `""`
- Single char (`"a"`) → return `"a"`

### Recursive case

```
reverseString(s) = s[last] + reverseString(s[0..last-1])
```

---

## Implementation

```typescript
// ── Basic recursive solution ─────────────────────────────────────────
export function reverseString(s: string): string {
  if (s.length <= 1) return s;                       // base cases
  return s[s.length - 1] + reverseString(s.slice(0, s.length - 1));
}

// ── Optimised recursive solution ─────────────────────────────────────
// Accumulator pattern: avoids O(n) string concatenation on each frame
export function reverseStringOptimised(s: string, acc: string[] = []): string {
  if (s.length === 0) return acc.join("");           // base case
  acc.push(s[s.length - 1]);
  return reverseStringOptimised(s.slice(0, s.length - 1), acc);
}
```

---

## Complexity Analysis

### Basic solution

| Dimension | Complexity | Explanation |
|---|---|---|
| **Time** | O(n²) | n recursive calls; each `+` concatenation copies up to n chars → n + (n-1) + … + 1 = n(n+1)/2 operations |
| **Space** | O(n) | n stack frames; each frame holds a string slice shrinking by 1 |

### Optimised solution (accumulator array)

| Dimension | Complexity | Explanation |
|---|---|---|
| **Time** | O(n) | `acc.push()` is O(1); `acc.join("")` at the end is one O(n) pass |
| **Space** | O(n) | n stack frames + the accumulator array of length n |

### Trade-offs

The optimised solution improves time complexity from **O(n²) → O(n)** with no change
to space complexity. Both remain recursive, satisfying the requirement.

An **iterative** solution would reduce stack-frame overhead to O(1) space and run in
O(n) time, but it would not satisfy the recursion requirement.

---

## Running the Tests

```bash
# Install dependencies
npm install

# Run tests once
npx vitest run

# Watch mode during development
npx vitest
```

### Test matrix

| ID | Category | Input | Expected output |
|---|---|---|---|
| NC-1 | Normal | `"hello"` | `"olleh"` |
| NC-2 | Normal | `"Hello, World!"` | `"!dlroW ,olleH"` |
| NC-3 | Normal | `"racecar"` | `"racecar"` |
| NC-4 | Normal | `"ContentOptimizer42"` | `"24rezimiPOtnetnoC"` |
| NC-5 | Normal | `"TextWise Solutions"` | `"snoituloS esiWtxeT"` |
| EC-1 | Edge | `""` | `""` |
| EC-2 | Edge | `"a"` | `"a"` |
| EC-3 | Edge | `"   "` | `"   "` |
| EC-4 | Edge | `"café 🌱"` | `"🌱 éfac"` |
| EC-5 | Edge | `"a" × 500` | `"a" × 500` |
| EC-6 | Edge | `"12345"` | `"54321"` |
| EC-7 | Edge | `"a\nb\tc"` | `"c\tb\na"` |

---

## Repository Structure

```
string-reversal/
├── src/
│   └── stringReversal.ts      # Implementation
├── tests/
│   └── stringReversal.test.ts # Unit tests (Vitest)
├── docs/
│   └── flowchart.md           # Recursion flowchart (see diagram below)
├── package.json
├── tsconfig.json
└── README.md
```

---

## See Also

- `src/stringReversal.ts` — full annotated implementation
- `tests/stringReversal.test.ts` — all 14 test cases (7 normal × 2 impl + 7 edge × 2 impl)
- Flowchart diagram (inline below, also rendered in the interview write-up artifact)
