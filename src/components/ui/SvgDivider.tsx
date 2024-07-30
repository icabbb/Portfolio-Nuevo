import React from 'react';

const SvgDivider: React.FC = () => (
  <div className="w-full h-24 flex items-center justify-center">
    {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
<svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 50 H80" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 10"/>
      <circle cx="50" cy="50" r="5" fill="rgba(255,255,255,0.2)"/>
    </svg>
  </div>
);

export default SvgDivider;