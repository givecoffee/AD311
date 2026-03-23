/**
 * StringReversal.ts
 * ContentOptimizer — TextWise Solutions
 *
 * Recursive string reversal for text-manipulation pipelines.
 *
 * Approach:
 *   Base cases  : empty string or single char  → return as-is
 *   Recursive   : last char  +  reverse(rest)
 *
 * Time  : O(n²) – n recursive calls, each string concatenation is O(n)
 * Space : O(n)  – n frames on the call stack
 *
 * Optimised variant (reverseStringOptimised) reduces the concatenation
 * cost to O(n) total by collecting chars into an array and joining once.
 * Stack depth remains O(n) — unavoidable for a purely recursive solution.
 */

// ─── Primary recursive solution ─────────────────────────────────────────────

export function reverseString(s: string): string {
  // Base case: empty or single character — already "reversed"
  if (s.length <= 1) return s;

  // Recursive case: last character + reverse of everything before it
  return s[s.length - 1] + reverseString(s.slice(0, s.length - 1));
}

// ─── Optimised recursive solution ───────────────────────────────────────────
// Collects characters into an accumulator array to avoid O(n) per-step
// string concatenation, reducing overall time to O(n).

export function reverseStringOptimised(s: string, acc: string[] = []): string {
  // Base case
  if (s.length === 0) return acc.join("");

  // Append the last char and recurse on the remainder
  acc.push(s[s.length - 1]);
  return reverseStringOptimised(s.slice(0, s.length - 1), acc);
}

// ─── Exports ─────────────────────────────────────────────────────────────────

export default reverseString;
