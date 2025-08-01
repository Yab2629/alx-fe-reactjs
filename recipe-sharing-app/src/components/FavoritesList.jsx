import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);
  const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));

  return (
    <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#333', fontSize: '1.8em', marginBottom: '15px' }}>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p style={{ color: '#666' }}>You have no favorite recipes yet.</p>
      ) : (
        <div style={{ display: 'grid', gap: '10px' }}>
          {favoriteRecipes.map(recipe => (
            <div key={recipe.id} style={{ borderBottom: '1px dashed #eee', paddingBottom: '10px', marginBottom: '10px' }}>
              <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: '#007bff' }}>
                <h3 style={{ fontSize: '1.2em', marginBottom: '5px' }}>{recipe.title}</h3>
              </Link>
              <p style={{ color: '#555', fontSize: '0.9em' }}>{recipe.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
