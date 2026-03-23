import unittest
from solution import merge_customer_data

class TestMergeCustomerData(unittest.TestCase):

    # Normal cases
    def test_normal_interleaved(self):
        data1 = [101, 104, 107, 0, 0, 0]
        merge_customer_data(data1, 3, [102, 105, 108], 3)
        self.assertEqual(data1, [101, 102, 104, 105, 107, 108])

    def test_normal_data2_all_smaller(self):
        data1 = [20, 30, 40, 0, 0, 0]
        merge_customer_data(data1, 3, [1, 2, 3], 3)
        self.assertEqual(data1, [1, 2, 3, 20, 30, 40])

    def test_normal_data2_all_larger(self):
        data1 = [10, 20, 0, 0]
        merge_customer_data(data1, 2, [30, 40], 2)
        self.assertEqual(data1, [10, 20, 30, 40])

    # Edge cases
    def test_edge_empty_data2(self):
        data1 = [103]
        merge_customer_data(data1, 1, [], 0)
        self.assertEqual(data1, [103])

    def test_edge_empty_data1(self):
        data1 = [0, 0, 0]
        merge_customer_data(data1, 0, [1, 2, 3], 3)
        self.assertEqual(data1, [1, 2, 3])

    def test_edge_duplicates(self):
        data1 = [1, 2, 2, 0, 0, 0]
        merge_customer_data(data1, 3, [2, 2, 3], 3)
        self.assertEqual(data1, [1, 2, 2, 2, 2, 3])
if __name__ == "__main__":
    unittest.main()