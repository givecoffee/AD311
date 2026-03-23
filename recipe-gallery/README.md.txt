Overview

Develop a Recipe Gallery using React to display a curated list of recipes, focusing on rendering static data. This  assignment emphasizes understanding list rendering in React without involving state management or interactivity. Note:  This assignment can be completed using Vite or Expo, but the instructions below are specifically tailored for Vite. 

Assignment Details: 

    Setup and Initial Configuration: 

    Initialize a new React application using Vite by running the following commands in your terminal: 
    npm create vite@latest recipe-gallery -- --template react 
    cd recipe-gallery 
    npm install 

    Start your development server with npm run dev. 
    Create a RecipeGallery.jsx component that will be responsible for rendering the gallery of recipes. (Note:  Vite uses the .jsx extension for files containing JSX). 

    Recipe Data: 

    Inside the RecipeGallery component or in a separate data file, define a constant array named recipes.  Each element in the array should represent a recipe and can be an object with properties like id, title,  ingredients, and image (URL to an image). 
    Example recipe object: { id: 1, title: "Spaghetti Carbonara", ingredients:  ["Pasta", "Eggs", "Cheese", "Bacon"], image:  

"https://example.com/carbonara.jpg" }. 

    Rendering the Gallery: 

    Use the map() function to iterate over the recipes array and return a JSX structure for each recipe. Consider  using a card layout to display each recipe's title, a list of ingredients, and an image. 
    Ensure each recipe card in the gallery has a unique key prop, ideally using the recipe's id. 

    Styling: (Optional) 

    Apply CSS to style the gallery and recipe cards. You can use inline styles, CSS stylesheets (e.g., App.css), or  CSS-in-JS libraries like styled-components to make your gallery visually appealing. 
    Ensure the layout is responsive and looks good on different screen sizes. Consider using CSS Grid or Flexbox for  the layout.

Relevant Study Material

    W3Schools: React Lists and Keys Links to an external site.
    Links to an external site.W3Schools: JavaScript Array .map() Method Links to an external site.

 
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
