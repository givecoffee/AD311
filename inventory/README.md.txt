Background:

You are in a coding interview with a retail company that is looking to enhance its inventory management system. The company has a unique requirement due to the nature of its products.
Objective:

Your task is to write a program for their inventory management system that handles a specific case in product stocking. Specifically, for every product with a stock count of zero, the system needs to duplicate this entry (representing an order to restock), shifting the subsequent product entries to the right in the inventory list. This operation must be performed in place within the existing inventory array.

    Problem Statement:
        Given an array inventory representing the stock count of different products in a store, where each occurrence of zero represents a product that is out of stock, duplicate each occurrence of zero (indicating an order placed to restock that product), shifting the remaining product counts to the right.
        Note: Modifications should be done in place in the inventory array, and elements beyond the length of the original array should not be modified.

    Input Format:
        An array inventory where each element is an integer representing the stock count of a product.

    Output Format:
        There is no separate output array; the inventory array will be modified in place.

    Examples:
        Example 1:
            Input: inventory = [4,0,1,3,0,2,5,0]
            Output: [4,0,0,1,3,0,0,2]
            Explanation: Zeroes represent out-of-stock products. After processing, each zero is duplicated to indicate a restock order, shifting the rest of the product counts rightward.
        Example 2:
            Input: inventory = [3,2,1]
            Output: [3,2,1]
            Explanation: There are no out-of-stock products. The inventory remains unchanged.

    Code Submission Requirements:
        Submit a link to your Github repository
        Github repository should contain 
            Diagrams or flowcharts that can help you and the interviewer stay on the same page
            Clarifying questions
            Test cases using unit test frameworks. You should have test cases for normal cases as well as edge cases (we expect you to have at least 3 test cases testing normal cases and at least 3 test cases testing edge cases)
            Time and Space complexity of your solution. 
    Video Submission Requirements
        Record a video of yourself solving the problem as if you were in a coding interview
        You need to show your screen and your face in the video
        Talk through your coding and diagramming process. Explain why you are making certain decisions. This helps the interviewer follow your approach
        You need to present test cases and demonstrate that you are passing those cases.(we expect you to have at least 3 test cases testing normal cases and at least 3 test cases testing edge cases)
        You need to present Time and Space complexity of your solution. 
         If possible, refine your solution to improve its time and space efficiency. Explain the trade-offs and how the optimization improves the original solution.
        Maintain clear communication throughout the interview. Reiterate this point, as it's crucial and worth repeating.
        Submit a youtube link (public or unlisted)

    Evaluation Criteria:
        Accuracy and efficiency of the algorithm.
        Clarity in understanding the business context and problem.
        Communication skills during the explanation and coding process.
        Code readability and appropriate use of data structures.
        Understanding of time and space complexity.
