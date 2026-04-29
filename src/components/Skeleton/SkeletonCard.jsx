import React from 'react';
import './SkeletonCard.css';

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-year"></div>
        <div className="skeleton-type"></div>
        <div className="skeleton-language"></div>
        <div className="skeleton-button"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;