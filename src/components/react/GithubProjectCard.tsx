'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { Repository } from '@/types';
import BadgeShine from '../ui/badgeShine';

interface GithubProjectCardProps {
  repo: Repository;
}

const GithubProjectCard: React.FC<GithubProjectCardProps> = ({ repo }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const handleClick = () => {
    window.open(repo.html_url, '_blank');
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className='relative flex w-full flex-col items-start justify-between overflow-hidden rounded-xl border border-emerald-600 dark:border-gray-800 bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 p-6 shadow-lg dark:shadow-2xl cursor-pointer'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        className='pointer-events-none absolute -inset-px opacity-0 transition duration-300'
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(120,119,198,.1), transparent 40%)`,
        }}
      />
      <div className="z-10 flex flex-col items-start w-full">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{repo.name}</h3>
        {repo.language && (
          <BadgeShine>{repo.language}</BadgeShine>
        )}
      </div>
      <div className="z-10 flex justify-between items-center w-full mt-4">
        <span className="text-sm text-yellow-600 dark:text-yellow-400">⭐ {repo.stargazers_count}</span>
        <i className="fa-solid fa-arrow-up-right-from-square text-gray-600 dark:text-gray-300" />
      </div>
    </motion.div>
  );
};

export default GithubProjectCard;