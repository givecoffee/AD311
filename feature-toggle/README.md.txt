
Overview 

In this assignment, you will develop a simple "Feature Toggle" component in React that demonstrates conditional  rendering based on props passed to the component, avoiding the use of state management. This will help you understand  how to control the display of elements in a React component based on external conditions. Please note: while this  assignment can be completed using Vite or Expo, the instructions below are specifically tailored for Vite. 

Objective 

    Understand and implement conditional rendering based on props. 
    Create a reusable "Feature Toggle" component that can be used to enable or disable features in an application. 

Assignment Tasks 

    Setup Your React Environment 

If you haven't already, set up a new React project using Vite by following these steps: 

    Open your terminal and run: npm create vite@latest feature-toggle-demo -- --template react 
    Navigate into your project folder: cd feature-toggle-demo 
    Install the necessary dependencies: npm install 
    Start the development server: npm run dev 

    Create the FeatureToggle Component 

    In the src directory, create a new file named FeatureToggle.jsx (Vite uses the .jsx extension for  components containing JSX). 
    Define a functional component FeatureToggle that accepts props. 

    Implement Conditional Rendering Based on Props 

    The FeatureToggle component should accept two props: isEnabled (a boolean) and featureName (a  string). 
    The component should render the featureName if isEnabled is true. If isEnabled is false, the  component should render: "Feature [featureName] is disabled". 

    Use the FeatureToggle Component in App.jsx 

    In App.jsx, import the FeatureToggle component. 
    Render the FeatureToggle component multiple times with different isEnabled and featureName props to simulate different features being enabled or disabled.

Relevant Study Material

    W3Schools: React Props Tutorial Links to an external site.
    W3Schools: React Conditional Rendering Links to an external site.

VIDEO:

    React Events and If Conditions Links to an external site.

This video provides a practical walkthrough of conditional rendering and event handling in React, aligning with the "Feature Toggle" assignment requirements.

 
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
