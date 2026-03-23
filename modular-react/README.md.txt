
To gain hands-on experience with component modularity in React by creating a small application that utilizes both default and named imports/exports.
Assignment Overview:

You will create a React application that consists of multiple components, including a main App component, a Header component, a Footer component, and two content components called ContentA and ContentB. You will practice using both default and named exports/imports to manage these components.
Prerequisites:

    Basic knowledge of React and JavaScript ES6 syntax.
    Node.js and npm (Node Package Manager) installed on your machine.
    A code editor (like VSCode) and familiarity with terminal or command prompt commands.

Setup Instructions:

    Create a new React application using Create React App by running this command in your terminal:
        npx create-react-app react-modularity-assignment
    Navigate into your project directory:
        cd react-modularity-assignment
    Start the development server to check if everything is set up correctly:

        npm start

Assignment Tasks:
Task 1: Create Component Files

    Create a new folder in src named components.
    Inside components, create five files: Header.js, Footer.js, ContentA.js, ContentB.js, and SharedComponents.js.

Task 2: Implement Components

    Header and Footer Components: Implement a simple Header and Footer component in their respective files. Export them using default export.
    Content Components: Implement ContentA and ContentB with some dummy content. Export them using named export.

Task 3: Use Shared Components

    In SharedComponents.js, create and export a Button component using named export.

Task 4: Assemble the App

    In App.js, import the Header and Footer components using default import syntax.
    Import ContentA and ContentB using named import syntax.
    Import the Button component from SharedComponents.js and use it inside both ContentA and ContentB.

Task 5: Styling (Optional)

    Add basic styling to your components to improve the UI.

 
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

 