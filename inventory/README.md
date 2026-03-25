# Inventory - Duplicate Zeros In-Place

Duplicate every `0` in the inventory array in-place, shifting subsequent elements right. Elements pushed past the original length are dropped.

```
[4, 0, 1, 3, 0, 2, 5, 0]  →  [4, 0, 0, 1, 3, 0, 0, 2]
```

## Approach

**Naive (`duplicate_zeros_naive`)** — build an expanded list, copy the first `n` values back. O(n) time, O(n) space. Easy to follow.

**Optimised (`duplicate_zeros`)** — two passes, no extra array. O(n) time, O(1) space.

- Pass 1: walk left-to-right counting zeros until the "write cursor" would hit position `n`. This tells us exactly how many zeros fit and where the last real element lands. There's one edge case: if a zero lands exactly on the last writable slot, write a single zero there and shrink `n` by 1 before stopping.
- Pass 2: walk right-to-left from that boundary, writing each element at `index + remaining_zeros`. Zeros get written twice; everything else shifts right by the zero count.

The trade-off is readability - Pass 1's boundary logic is unintuitive and the edge case needs a comment. For an interview I'd code the naive solution first, confirm it works, then refactor.

## Running the tests

```
python tests/test_solution.py
```

15 tests - 7 normal cases, 8 edge cases.

## Clarifying questions

See `CLARIFYING_QUESTIONS.md`.
