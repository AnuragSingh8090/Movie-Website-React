import React from 'react';
import SkeletonCard from './SkeletonCard';

const SkeletonLoader = ({ count = 20 }) => {
  // Return skeleton cards directly without wrapper
  // They will be placed in the existing card-container
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <SkeletonCard key={index} />
      ))}
    </>
  );
};

export default SkeletonLoader;