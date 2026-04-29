import React from 'react';
import './MovieDetailSkeleton.css';

const MovieDetailSkeleton = () => {
  return (
    <>
      {/* Poster skeleton - matches exact positioning */}
      <div className="skeleton-poster"></div>
      
      {/* bigCard_wrapper skeleton - matches exact structure and classes */}
      <div className="skeleton-big-card-wrapper flex">
        {/* cDetails skeleton - matches exact dimensions and layout */}
        <div className="skeleton-cdetails">
          {/* Movie name skeleton */}
          <div className="skeleton-movie-name"></div>
          
          {/* Genre skeleton */}
          <div className="skeleton-genre">
            <div className="skeleton-genre-item"></div>
            <div className="skeleton-genre-item"></div>
            <div className="skeleton-genre-item"></div>
          </div>
          
          {/* Release date skeleton */}
          <div className="skeleton-info-row">
            <div className="skeleton-icon"></div>
            <div className="skeleton-text"></div>
          </div>
          
          {/* Duration skeleton */}
          <div className="skeleton-info-row">
            <div className="skeleton-icon"></div>
            <div className="skeleton-text"></div>
          </div>
          
          {/* Rating skeleton */}
          <div className="skeleton-info-row">
            <div className="skeleton-icon"></div>
            <div className="skeleton-text-long"></div>
          </div>
          
          {/* Story skeleton */}
          <div className="skeleton-story">
            <div className="skeleton-story-line"></div>
            <div className="skeleton-story-line"></div>
            <div className="skeleton-story-line"></div>
            <div className="skeleton-story-line short"></div>
          </div>
          
          {/* Button skeleton */}
          <div className="skeleton-buttons">
            <div className="skeleton-button primary"></div>
            <div className="skeleton-button secondary"></div>
          </div>
        </div>
        
        {/* Big card skeleton - matches exact dimensions */}
        <div className="skeleton-big-card"></div>
      </div>
    </>
  );
};

export default MovieDetailSkeleton;