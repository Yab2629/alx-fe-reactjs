# Recipe Sharing Application

## Project Overview
This project is an enhanced Recipe Sharing Application built with React, Zustand for state management, and React Router for navigation. It allows users to add, view, edit, and delete recipes.

## Task 3: Implementing User Favorites and Personalized Recipe Recommendations
This task introduces user-specific features, allowing users to save their favorite recipes and receive personalized recommendations. This makes the application more interactive and tailored to individual preferences.

## Features
- Add new recipes (title and description)
- Display a list of all added recipes
- View detailed information for individual recipes
- Edit existing recipes
- Delete recipes
- State management using Zustand
- Routing using React Router
- Advanced Search and Filtering: Search recipes by title or description.
- **User Favorites:** Users can mark recipes as favorites.
- **Personalized Recommendations:** The app suggests recipes based on user favorites.

## Technologies Used
- React (with Vite)
- Zustand (for state management)
- react-router-dom (for routing)

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
│   │   ├── FavoriteButton.jsx
│   │   ├── FavoritesList.jsx
│   │   ├── RecommendationsList.jsx
│   │   ├── RecipeDetails.jsx
│   │   ├── RecipeList.jsx
│   │   ├── SearchBar.jsx
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
[Your Name]

## Author
[Yeabsira Zewdu]
