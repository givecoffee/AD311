def merge_customer_data(customerData1, m, customerData2, n):
    """
    Merges two sorted arrays in-place using reverse three-pointer approach.
    
    Time Complexity: O(m + n)
    Space Complexity: O(1)
    """
    # Start from the end of both arrays
    p1 = m - 1          # Last valid element in customerData1
    p2 = n - 1          # Last element in customerData2
    p = m + n - 1       # Last position (where we place elements)

    # Work backwards until customerData2 is exhausted
    while p2 >= 0:
        # If customerData1 has elements AND its current element is larger
        if p1 >= 0 and customerData1[p1] > customerData2[p2]:
            customerData1[p] = customerData1[p1]
            p1 -= 1
        else:
            # customerData2's element is larger (or customerData1 is exhausted)
            customerData1[p] = customerData2[p2]
            p2 -= 1
        p -= 1


if __name__ == "__main__":
    # Example 1
    data1 = [101, 104, 107, 0, 0, 0]
    data2 = [102, 105, 108]
    print(f"Before: {data1}")
    merge_customer_data(data1, 3, data2, 3)
    print(f"After: {data1}")
    print()

    # Example 2
    data1 = [103]
    data2 = []
    print(f"Before: {data1}")
    merge_customer_data(data1, 1, data2, 0)
    print(f"After: {data1}")