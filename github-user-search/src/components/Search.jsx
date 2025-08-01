import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(false);
    setUser(null);

    const userData = await fetchUserData(username);

    if (userData) {
      setUser(userData);
    } else {
      setError(true);
    }
    setLoading(false);
  };

  const renderResults = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
  
      return <p>Looks like we cant find the user.</p>;
    }

    if (user) {
      return (
        <div className="user-profile">
          <img src={user.avatar_url} alt={`${user.name}'s avatar`} width="100" />
          <h2>{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile on GitHub
          </a>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter a GitHub username"
          aria-label="GitHub username search"
        />
        <button type="submit">Search</button>
      </form>
      <div className="results-container">
        {renderResults()}
      </div>
    </>
  );
};

export default Search