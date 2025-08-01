import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList'; 
import RecommendationsList from './components/RecommendationsList'; 

function App() {
  const Home = () => (
    <>
      <AddRecipeForm />
      <SearchBar />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </>
  );

  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '40px auto', padding: '20px', backgroundColor: '#f0f2f5', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <header style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ color: '#333', fontSize: '2.5em', marginBottom: '10px' }}>
            My Recipe Book
          </h1>
          <nav>
            <Link to="/" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>
              Go to Home
            </Link>
          </nav>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
            <Route path="/recipe/:recipeId/edit" element={<EditRecipeForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
