import sys
import os
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from solution import duplicate_zeros, duplicate_zeros_naive


def check(self, inp, expected):
    a = list(inp); duplicate_zeros(a)
    b = list(inp); duplicate_zeros_naive(b)
    self.assertEqual(a, expected, f"optimised: got {a}")
    self.assertEqual(b, expected, f"naive: got {b}")


class TestNormal(unittest.TestCase):

    def test_example_1(self):
        check(self, [4, 0, 1, 3, 0, 2, 5, 0], [4, 0, 0, 1, 3, 0, 0, 2])

    def test_no_zeros(self):
        check(self, [3, 2, 1], [3, 2, 1])

    def test_zero_in_middle(self):
        check(self, [1, 0, 3, 4, 5], [1, 0, 0, 3, 4])

    def test_zero_at_start(self):
        check(self, [0, 5, 6, 7], [0, 0, 5, 6])

    def test_consecutive_zeros(self):
        check(self, [0, 0, 1, 2], [0, 0, 0, 0])

    def test_large_values(self):
        check(self, [100, 200, 300, 400], [100, 200, 300, 400])

    def test_zero_at_end(self):
        # duplicate would fall outside the array, so it's just dropped
        check(self, [1, 2, 3, 0], [1, 2, 3, 0])


class TestEdge(unittest.TestCase):

    def test_empty(self):
        arr = []
        duplicate_zeros(arr)
        self.assertEqual(arr, [])

    def test_single_zero(self):
        check(self, [0], [0])

    def test_single_nonzero(self):
        check(self, [7], [7])

    def test_all_zeros_even(self):
        check(self, [0, 0, 0, 0], [0, 0, 0, 0])

    def test_all_zeros_odd(self):
        check(self, [0, 0, 0], [0, 0, 0])

    def test_zero_penultimate(self):
        # zero at second-to-last; duplicate fills the last slot exactly
        check(self, [1, 2, 0, 4], [1, 2, 0, 0])

    def test_two_elements_zero_first(self):
        check(self, [0, 1], [0, 0])

    def test_two_elements_no_zero(self):
        check(self, [3, 5], [3, 5])


if __name__ == "__main__":
    unittest.main(verbosity=2)
