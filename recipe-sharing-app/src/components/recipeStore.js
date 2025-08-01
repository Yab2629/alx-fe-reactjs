import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [], 
  recommendations: [], 
  
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

  addFavorite: (recipeId) => set(state => {
    const newFavorites = [...state.favorites, recipeId];
    return { favorites: newFavorites, ...generateRecommendations(state, newFavorites) };
  }),
  removeFavorite: (recipeId) => set(state => {
    const newFavorites = state.favorites.filter(id => id !== recipeId);
    return { favorites: newFavorites, ...generateRecommendations(state, newFavorites) };
  }),
  
  generateRecommendations: () => set(state => generateRecommendations(state, state.favorites)),

  addRecipe: (newRecipe) => set(state => {
    const updatedRecipes = [...state.recipes, newRecipe];
    const newFilteredRecipes = updatedRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: newFilteredRecipes,
      ...generateRecommendations(state, state.favorites)
    };
  }),
  deleteRecipe: (id) => set(state => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== id);
    const updatedFavorites = state.favorites.filter(favoriteId => favoriteId !== id);
    const newFilteredRecipes = updatedRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: newFilteredRecipes,
      favorites: updatedFavorites,
      ...generateRecommendations({ ...state, recipes: updatedRecipes, favorites: updatedFavorites }, updatedFavorites)
    };
  }),
  updateRecipe: (updatedRecipe) => set(state => {
    const updatedRecipes = state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    const newFilteredRecipes = updatedRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: newFilteredRecipes,
      ...generateRecommendations({ ...state, recipes: updatedRecipes }, state.favorites)
    };
  }),
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes })
}));

const generateRecommendations = (state, favorites) => {
  if (favorites.length === 0) {
    const shuffled = [...state.recipes].sort(() => 0.5 - Math.random());
    return { recommendations: shuffled.slice(0, 3) };
  } else {
    const recommended = state.recipes.filter(recipe =>
      !favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended.slice(0, 3) };
  }
};

export default useRecipeStore;