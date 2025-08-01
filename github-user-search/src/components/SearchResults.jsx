import React from 'react';

const SearchResults = ({ user, loading, error }) => {
  if (loading) {
    return <div><p>Loading...</p></div>;
  }

  if (error) {
    return <div><p>Looks like we can't find the user.</p></div>;
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

  return (
    <div>
      <p>Your search results will appear here.</p>
    </div>
  );
};

export default SearchResults;
