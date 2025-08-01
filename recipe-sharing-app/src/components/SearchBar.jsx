import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  
  return (
    <input
      type="text"
      placeholder="Search recipes by title or description..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        width: '100%',
        padding: '12px',
        fontSize: '1em',
        border: '1px solid #ccc',
        borderRadius: '8px',
        marginBottom: '20px',
        boxSizing: 'border-box'
      }}
    />
  );
};

export default SearchBar;