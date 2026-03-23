Overview: This assignment focuses on building a static product list. While this project can be completed using Vite or Expo, the instructions below are specifically tailored for a Vite environment.

🎯 OBJECTIVE

Build a static product list display using React, focusing on rendering a list from a provided dataset without involving state management.

🛠️ ASSIGNMENT DETAILS

    Setup and Initial Configuration

Start by creating a new React application. Please note: while this assignment can be completed using Vite or Expo, the instructions below are specifically tailored for Vite.

    Command Line Instructions:

Create the project using the Vite React template
npm create vite@latest my-product-list -- --template react
Navigate into your project directory
cd my-product-list
Install the necessary dependencies
npm install
Start the local development server
npm run dev

    Vite Compatibility (JS + WS): Vite uses Hot Module Replacement (HMR) via WebSockets (WS) by default. Ensure your environment allows WebSocket connections for the “Fast Refresh” feature to function correctly.
    Component Creation: Create a ProductList component (e.g., ProductList.jsx) that will be responsible for rendering the list of products.

    Product Data

Define a constant array named products in the ProductList component or in a separate data file. Each element in the array should represent a product and can be an object with properties like id, name, description, and price.

    Example product object:

{ id: 1, name: “Laptop”, description: “High-performance laptop for professionals.”, price: 1200 }

 

    Rendering the List

    Mapping Data: Use the map() function to iterate over the products array and return a JSX structure for each product.
    Structure: This could be a simple div or a more complex structure like a card that displays the product’s name, description, and price.
    Unique Keys: Ensure each product element in the list has a unique key prop, ideally using the product’s id.

    Styling (Optional)

Apply CSS to style the list and product items. You can use inline styles, CSS stylesheets, or CSS-in-JS libraries like styled-components to make your list visually appealing.

    Goal: Aim for a clean and organized layout, where each product’s information is easy to read and distinguish from others.

📚 RELEVANT W3SCHOOLS EXERCISES

Use these resources to master the core concepts required for this assignment:

    React Lists & Keys Links to an external site. - Learn how to handle lists and the importance of keys.
    JavaScript Array .map() Links to an external site. - Understand the logic behind iterating through your data.
    React Components Links to an external site. - Basics on creating and nesting components.
    React CSS Styling Links to an external site. - Different methods to style your product cards.

📞 SUPPORT & COMMUNICATION

If you hit a roadblock during setup or implementation, reach out via class Slack channel
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
