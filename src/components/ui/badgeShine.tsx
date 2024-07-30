import React from 'react';

interface BadgeShineProps {
  children: React.ReactNode;
}

const BadgeShine: React.FC<BadgeShineProps> = ({ children }) => {
  return (
    <span className='inline-flex h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-[linear-gradient(110deg,#f0f0f0,45%,#10b981,55%,#f0f0f0)] dark:bg-[linear-gradient(110deg,#000,45%,#3b82f6,55%,#000)] bg-[length:250%_100%] px-3 py-1 text-xs font-medium text-gray-800 dark:text-gray-200 '>
      {children}
    </span>
  );
};

export default BadgeShine;