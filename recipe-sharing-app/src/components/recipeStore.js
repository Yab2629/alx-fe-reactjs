import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [], 
  
  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () => set(state => {
    if (state.searchTerm === '') {
      return { filteredRecipes: state.recipes };
    }
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return { filteredRecipes: filtered };
  }),

  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.recipes, newRecipe].filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  deleteRecipe: (id) => set(state => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== id);
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),
  updateRecipe: (updatedRecipe) => set(state => {
    const updatedRecipes = state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;
