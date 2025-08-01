# Recipe Sharing Application

## Project Overview
This project is an enhanced Recipe Sharing Application built with React, Zustand for state management, and React Router for navigation. It allows users to add, view, edit, and delete recipes.

## Task 1: Enhancing the Recipe Sharing Application with Detailed Recipe Management
This task extends the application with full CRUD (Create, Read, Update, Delete) functionality. It introduces advanced state management with Zustand and dynamic routing to handle individual recipe pages.

## Features
- Add new recipes (title and description)
- Display a list of all added recipes
- **View detailed information for individual recipes**
- **Edit existing recipes**
- **Delete recipes**
- State management using Zustand
- **Routing using React Router**

## Technologies Used
- React (with Vite)
- Zustand (for state management)
- **react-router-dom (for routing)**

## Installation and Setup
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_GITHUB_USERNAME/alx-fe-reactjs.git](https://github.com/YOUR_GITHUB_USERNAME/alx-fe-reactjs.git)
    ```
    (Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username)

2.  **Navigate to the project directory:**
    ```bash
    cd alx-fe-reactjs/recipe-sharing-app
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    npm install react-router-dom
    ```

4.  **Run the application:**
    ```bash
    npm run dev
    ```
    The application will typically open in your browser at `http://localhost:5173` (or a similar port).

## File Structure

recipe-sharing-app/
├── public/
├── src/
│   ├── components/
│   │   ├── AddRecipeForm.jsx
│   │   ├── DeleteRecipeButton.jsx
│   │   ├── EditRecipeForm.jsx
│   │   ├── RecipeDetails.jsx
│   │   ├── RecipeList.jsx
│   │   └── recipeStore.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js


## Author
[Yeabsira Zewdu]
