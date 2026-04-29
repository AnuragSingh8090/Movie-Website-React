import React from 'react';
import './NoResults.css';

const NoResults = ({ 
  title = "No Results Found", 
  message = "We couldn't find any movies matching your search. Try different keywords or browse our categories.",
  showSuggestions = true,
  showActions = true 
}) => {
  return (
    <div className="no-results-container">
      <div className="no-results-content">
        <div className="no-results-icon">
          <i className="fa-solid fa-film"></i>
        </div>
        <h2 className="no-results-title">{title}</h2>
        <p className="no-results-message">{message}</p>
        
        {showSuggestions && (
          <div className="no-results-suggestions">
            <h3>Try these suggestions:</h3>
            <ul>
              <li>Check your spelling</li>
              <li>Use different keywords</li>
              <li>Try more general terms</li>
              <li>Browse our popular categories</li>
            </ul>
          </div>
        )}
        
        {showActions && (
          <div className="no-results-actions">
            <button 
              className="btn-primary" 
              onClick={() => window.location.href = '/'}
            >
              Browse Popular Movies
            </button>
            <button 
              className="btn-secondary" 
              onClick={() => window.location.href = '/movie'}
            >
              All Movies
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoResults;