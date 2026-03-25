# Clarifying questions

**Can stock counts be negative?**
Assuming no — zero means out of stock, positive means in stock.

**Is the array guaranteed to be non-empty?**
Treating an empty array as a no-op rather than an error.

**Does "in-place" mean we can't use any extra space, or just no second array of the same size?**
The naive approach uses O(n) extra space which is fine for a first pass. The optimised solution avoids that entirely.

**What happens when a zero is the very last element?**
Its duplicate would land past the end of the array, so we just leave the original zero and discard the duplicate. Confirmed by the spec: "elements beyond the length of the original array should not be modified."

**Any constraints on array length or value range?**
Assuming standard 32-bit integers and lengths up to ~10^4 — nothing that changes the algorithm.
