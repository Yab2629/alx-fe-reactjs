import axios from 'axios';
export const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  try {

    let queryString = username ? `${username}` : '';
    if (location) {
      queryString += ` location:${location}`;
    }
    if (minRepos) {
      queryString += ` repos:>=${minRepos}`;
    }

    if (!queryString.trim()) {
      return null;
    }

    const apiUrl = `https://api.github.com/search/users?q=${encodeURIComponent(queryString.trim())}`;
    
    const response = await axios.get(apiUrl, {
      params: {
        page,
        per_page: 20
      }
    });

    return response.data;
  } catch (error) {
    console.error(`Error fetching user data: ${error.message}`);
    return null;
  }
};