# Customer Data Merge

## Video Demo:
https://youtu.be/HKJDrTwhmMI

## Problem
Merge two sorted arrays into one sorted array in-place.

## Clarifying Questions
- Are both arrays sorted? Yes
- Can m or n be zero? Yes
- Must it be in-place? Yes
- Can there be duplicates? Yes

## Approach
Use three pointers starting from the end of both arrays. Compare elements and place the larger one at the back of customerData1. This avoids shifting elements.

## Complexity
- Time: O(m + n)
- Space: O(1)

## How to Run
