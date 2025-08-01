import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);

  useEffect(() => {
    generateRecommendations();
  }, [recipes, favorites, generateRecommendations]);
  
  return (
    <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#333', fontSize: '1.8em', marginBottom: '15px' }}>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p style={{ color: '#666' }}>Add some recipes or favorites to get recommendations!</p>
      ) : (
        <div style={{ display: 'grid', gap: '10px' }}>
          {recommendations.map(recipe => (
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

export default RecommendationsList;
