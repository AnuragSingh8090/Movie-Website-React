import React from 'react';
import SkeletonCard from './SkeletonCard';
import './RecommendSkeleton.css';

const RecommendSkeleton = ({ title = "Loading..." }) => {
  return (
    <div className="recommend-container">
      <div className="skeleton-recommend-title"></div>
      <section className="scroll-container">
        <div className="skeleton-recommend-grid">
          {Array.from({ length: 6 }, (_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RecommendSkeleton;