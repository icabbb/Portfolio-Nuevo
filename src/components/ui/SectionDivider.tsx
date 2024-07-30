import React from 'react';

const SectionDivider: React.FC = () => (
  <div className="w-full h-24 flex items-center justify-center overflow-hidden">
    <svg 
      width="100%" 
      height="100" 
      viewBox="0 0 800 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="transition-colors duration-300"
    >
      <path 
        d="M 0,50 C 150,100 350,0 500,50 C 650,100 850,0 1000,50" 
        className="stroke-[#10b981] dark:stroke-[rgba(59,130,246,0.5)]"
        strokeWidth="2" 
        fill="none" 
      />
    </svg>
  </div>
);

export default SectionDivider;