# Recursive String Reversal - TextWise Solutions Interview

## Problem Statement

Implement a **recursive** string-reversal function to support ContentOptimizer's
text-manipulation pipeline (sentence-structure analysis, stylistic suggestions).

---

## Clarifying Questions

Before coding, I would ask the interviewer:

- Is there a maximum input length? Stack-overflow risk for very deep recursion in JS 
- Is an iterative fallback acceptable as an optimised alternative, or must the optimised version remain recursive? 
- Should the function be pure (no mutation)? 

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
