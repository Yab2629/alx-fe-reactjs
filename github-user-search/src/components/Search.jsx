import React, { useState } from 'react';
import { searchUsers, fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSearch = async (isNewSearch = true) => {
    if (isNewSearch) {
      setLoading(true);
      setError(false);
      setUsers([]);
      setPage(1);
      setHasMore(false);
    }

    const currentPage = isNewSearch ? 1 : page;

    try {
      const userData = await searchUsers({
        username,
        location,
        minRepos,
        page: currentPage
      });

      if (userData && userData.items) {
        setUsers(prevUsers => isNewSearch ? userData.items : [...prevUsers, ...userData.items]);
        setHasMore(userData.items.length === 20); 
      } else {
        setUsers([]);
        setError(true);
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username && !location && !minRepos) {
      return;
    }
    handleSearch(true);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    handleSearch(false);
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Advanced Search</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location (e.g., 'Lagos')"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Min Repos"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-400 text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">Looks like we cant find the user.</p>}

      {users.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {users.map(user => (
              <div key={user.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                <img
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                  className="w-24 h-24 rounded-full mb-4 border-2 border-gray-200"
                />
                <h3 className="text-xl font-semibold text-gray-800">{user.login}</h3>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-blue-500 hover:text-blue-700 transition-colors duration-200"
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>
          {hasMore && (
            <div className="text-center mt-6">
              <button
                onClick={handleLoadMore}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}

      {!loading && !error && users.length === 0 && <p className="text-gray-500 text-center">Start your search above to see results.</p>}
    </div>
  );
};

export default Search;