

This assignment aims to provide practical experience in converting standard HTML markup into JSX syntax, which is used in React components. Understanding the differences between HTML and JSX and applying best practices in JSX will be the focus.
Assignment Details:

You are given an HTML snippet representing a simple user profile card. Your task is to convert this HTML into valid JSX that can be used within a React component. Pay special attention to JSX-specific syntax rules, such as enclosing all elements within a single parent element, using className instead of class, and ensuring all elements are properly closed.

<div class="profile-card">
  <h2>User Profile</h2>
  <img src="https://example.com/user-photo.jpg" alt="User Photo" class="photo"/>
  <p>Name: Jane Doe</p>
  <p>Email: jane.doe@example.com</p>
  <a href="mailto:jane.doe@example.com">Send Email</a>
</div>
Instructions:

    Create a React Component: Start by creating a new functional component named UserProfile.
    Convert HTML to JSX: Inside the component's return statement, convert the given HTML snippet into JSX. Remember to replace class with className and make sure all elements are correctly closed.
    Encapsulate in a Single Parent: Ensure that the JSX code is encapsulated within a single parent element. You may use a <div> or a React Fragment (<>...</>).
    Use JSX Expressions: Where appropriate, replace static content with JSX expressions. For example, you could replace the user's name and email with props passed to the component.
    Test Your Component: Include your component in a React application to ensure it renders correctly without errors.

Assignment Submission:

Once you have completed the assignment, please prepare the following for submission:

    GitHub Repository:
        Push your program to a new GitHub repository.
        Ensure that your repository is public so that it can be accessed and reviewed.
        Your repository should include all source code files and a README.md file that briefly describes the project and how to run it.

    Demonstration:
        Provide a video demonstrating your program in action. The demonstration should include:
            Show the program's functionality.
            You need to present test cases and demonstrate that you are passing those cases.(we expect you to have at least 3 test cases testing normal cases and at least 3 test cases testing edge cases)

    Submission:
        Submit the link to your GitHub repository.
        Include a link to your video demonstration. Youtube link (public or unlisted)

 