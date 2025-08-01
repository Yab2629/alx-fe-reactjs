import React from 'react';
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: '#333', fontSize: '1.8em', marginBottom: '15px' }}>Available Recipes</h2>
      {recipes.length === 0 ? (
        <p style={{ color: '#666' }}>No recipes added yet. Add some below!</p>
      ) : (
        <div style={{ display: 'grid', gap: '10px' }}>
          {recipes.map(recipe => (
            <div key={recipe.id} style={{ borderBottom: '1px dashed #eee', paddingBottom: '10px', marginBottom: '10px' }}>
              <h3 style={{ color: '#007bff', fontSize: '1.2em', marginBottom: '5px' }}>{recipe.title}</h3>
              <p style={{ color: '#555', fontSize: '0.9em' }}>{recipe.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;