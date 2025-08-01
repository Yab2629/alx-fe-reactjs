import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes, recipes]);

  return (
    <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: '#333', fontSize: '1.8em', marginBottom: '15px' }}>Available Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p style={{ color: '#666' }}>
          {searchTerm ? `No recipes found for "${searchTerm}".` : 'No recipes added yet. Add some below!'}
        </p>
      ) : (
        <div style={{ display: 'grid', gap: '10px' }}>
          {filteredRecipes.map(recipe => (
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

export default RecipeList;
