import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '40px auto', padding: '20px', backgroundColor: '#f0f2f5', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#333', fontSize: '2.5em', marginBottom: '30px' }}>
        My Recipe Book
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px' }}>
        {/* Add Recipe Form */}
        <AddRecipeForm />

        {/* Recipe List */}
        <RecipeList />
      </div>
    </div>
  );
}

export default App;
