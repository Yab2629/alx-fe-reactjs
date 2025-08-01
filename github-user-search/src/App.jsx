import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import { fetchUserData } from './services/githubService';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (username) => {
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub User Search</h1>
      </header>
      <main>
        <SearchBar onSearch={handleSearch} />
        <SearchResults user={user} loading={loading} error={error} />
      </main>
    </div>
  );
}

export default App;