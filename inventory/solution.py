def duplicate_zeros(inventory: list[int]) -> None:
    n = len(inventory)
    if n == 0:
        return

    # Pass 1: count zeros that fit within the original length
    zeros = 0
    left = 0
    while left < n - zeros:
        if inventory[left] == 0:
            # zero whose duplicate would land on the last slot — write it and stop
            if left == n - zeros - 1:
                inventory[n - 1] = 0
                n -= 1
                break
            zeros += 1
        left += 1

    # Pass 2: fill right-to-left so we don't overwrite values we still need
    last = left - 1
    while last >= 0:
        if inventory[last] == 0:
            inventory[last + zeros] = 0
            zeros -= 1
            inventory[last + zeros] = 0
        else:
            inventory[last + zeros] = inventory[last]
        last -= 1


def duplicate_zeros_naive(inventory: list[int]) -> None:
    """Brute-force version — easier to read, O(n) extra space."""
    n = len(inventory)
    expanded = []
    for val in inventory:
        expanded.append(val)
        if val == 0:
            expanded.append(0)
    for i in range(n):
        inventory[i] = expanded[i]
