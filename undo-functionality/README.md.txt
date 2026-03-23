

Objective: Implement a simple text editor that allows adding text, deleting the last character, and an undo feature using a stack data structure.

Scenario: You are creating a simple text editor that allows the user to input text, delete the last character, and undo the last operation. Your task is to use a stack to keep track of the changes made to the text so that you can undo the last operation when required.

Requirements:

    Text Operation Class: Define a TextOperation class or struct that represents an operation performed on the text. This class should include information about the type of operation (add or delete) and the character involved in the operation (if applicable).
    Add Text: Implement a method to add a character to the text and record this action on the stack.

    Delete Text: Implement a method to delete the last character of the text and record this deletion on the stack.

    Undo: Implement an undo method that uses the stack to revert the last operation. Ensure that your editor can handle multiple consecutive undo operations correctly.

    Display: After each operation (add, delete, undo), display the current state of the text.

Deliverables:

A program that allows a user to input characters, delete the last character, and undo operations, demonstrating the use of a stack to track these operations.

 

 

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
        Clarity in problem understanding and solution approach.
        Communication skills during explanation and coding.
        Code readability and use of appropriate data structures.
        Understanding of time and space complexity.
