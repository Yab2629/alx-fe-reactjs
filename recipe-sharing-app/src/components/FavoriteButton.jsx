import React from 'react';
import useRecipeStore from './recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);
  
  const isFavorite = favorites.includes(recipeId);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <button
      onClick={handleToggleFavorite}
      style={{
        backgroundColor: isFavorite ? '#dc3545' : '#17a2b8',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease'
      }}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = isFavorite ? '#c82333' : '#138496'}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = isFavorite ? '#dc3545' : '#17a2b8'}
    >
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;
