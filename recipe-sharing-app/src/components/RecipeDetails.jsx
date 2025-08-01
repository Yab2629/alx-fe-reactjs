import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';
import FavoriteButton from './FavoriteButton'; 

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === parseInt(recipeId))
  );

  if (!recipe) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', color: '#dc3545' }}>
        Recipe not found!
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h1 style={{ color: '#007bff', fontSize: '2em', marginBottom: '10px' }}>{recipe.title}</h1>
      <p style={{ color: '#555', fontSize: '1.1em', marginBottom: '20px' }}>{recipe.description}</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Link
          to={`/recipe/${recipe.id}/edit`}
          style={{
            backgroundColor: '#ffc107',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e0a800'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ffc107'}
        >
          Edit Recipe
        </Link>
        <DeleteRecipeButton recipeId={recipe.id} />
        {
          
        }
        <FavoriteButton recipeId={recipe.id} />
      </div>
    </div>
  );
};

export default RecipeDetails;
