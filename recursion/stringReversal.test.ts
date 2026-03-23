/**
 * stringReversal.test.ts
 * Unit tests for reverseString and reverseStringOptimised
 *
 * Framework : Vitest  (or Jest — API is identical)
 * Run       : npx vitest run   OR   npx jest
 */

import { describe, it, expect } from "vitest";
import { reverseString, reverseStringOptimised } from "../src/stringReversal";

// Run the same test suite against both implementations
const implementations = [
  { name: "reverseString (basic)", fn: reverseString },
  {
    name: "reverseStringOptimised",
    fn: (s: string) => reverseStringOptimised(s),
  },
];

implementations.forEach(({ name, fn }) => {
  describe(`${name}`, () => {
    // ── Normal cases ────────────────────────────────────────────────────────

    it("NC-1: reverses a simple lowercase word", () => {
      expect(fn("hello")).toBe("olleh");
    });

    it("NC-2: reverses a full sentence preserving spaces and punctuation", () => {
      expect(fn("Hello, World!")).toBe("!dlroW ,olleH");
    });

    it("NC-3: reverses a palindrome (should equal the original)", () => {
      expect(fn("racecar")).toBe("racecar");
    });

    it("NC-4: reverses a string with mixed case and numbers", () => {
      expect(fn("ContentOptimizer42")).toBe("24rezimiPOtnetnoC");
    });

    it("NC-5: reverses a multi-word sentence", () => {
      expect(fn("TextWise Solutions")).toBe("snoituloS esiWtxeT");
    });

    // ── Edge cases ───────────────────────────────────────────────────────────

    it("EC-1: returns empty string unchanged", () => {
      expect(fn("")).toBe("");
    });

    it("EC-2: returns a single character unchanged", () => {
      expect(fn("a")).toBe("a");
    });

    it("EC-3: handles a string of only spaces", () => {
      expect(fn("   ")).toBe("   ");
    });

    it("EC-4: handles special / Unicode characters", () => {
      expect(fn("café 🌱")).toBe("🌱 éfac");
    });

    it("EC-5: handles a very long string (stress test)", () => {
      const input = "a".repeat(500);
      expect(fn(input)).toBe(input); // palindrome of single char
    });

    it("EC-6: handles numeric string", () => {
      expect(fn("12345")).toBe("54321");
    });

    it("EC-7: handles newlines and tabs", () => {
      expect(fn("a\nb\tc")).toBe("c\tb\na");
    });
  });
});
