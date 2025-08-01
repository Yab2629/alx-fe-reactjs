import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';
export const searchUsers = async ({ username, location, min_repos, page = 1 }) => {
  try {
    let queryString = username ? `${username}` : '';
    if (location) {
      queryString += ` location:${location}`;
    }
    if (min_repos) {
      queryString += ` repos:>=${min_repos}`;
    }
    
    if (!queryString.trim()) {
      return null;
    }

    const response = await axios.get(`${GITHUB_API_URL}/search/users`, {
      params: {
        q: queryString.trim(),
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
