import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import useRecipeStore from './recipeStore';

const EditRecipeForm = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const recipes = useRecipeStore(state => state.recipes);
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const recipeToEdit = recipes.find(r => r.id === parseInt(recipeId));
  const [title, setTitle] = useState(recipeToEdit ? recipeToEdit.title : '');
  const [description, setDescription] = useState(recipeToEdit ? recipeToEdit.description : '');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      console.error('Please enter both a title and a description for the recipe.');
      return;
    }

    updateRecipe({ id: parseInt(recipeId), title, description });
    navigate(`/recipe/${recipeId}`); // Redirect back to the recipe details page
  };

  if (!recipeToEdit) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', color: '#dc3545' }}>
        Recipe not found!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '30px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#333', fontSize: '1.8em', marginBottom: '20px' }}>Edit Recipe</h2>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="recipe-title" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>Recipe Title:</label>
        <input
          id="recipe-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g., Grandma's Apple Pie"
          style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box' }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="recipe-description" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>Description:</label>
        <textarea
          id="recipe-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="A classic apple pie recipe, perfect for holidays."
          rows="4"
          style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box' }}
        />
      </div>
      <button
        type="submit"
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '12px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1em',
          fontWeight: 'bold',
          width: '100%',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
      >
        Update Recipe
      </button>
    </form>
  );
};

export default EditRecipeForm;
