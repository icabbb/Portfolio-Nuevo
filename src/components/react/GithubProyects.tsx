// biome-ignore lint/style/useImportType: <explanation>
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchGitHubProjects } from '@/utils/api';
import GithubProjectCard from './GithubProjectCard';
import type { Repository, GithubProjectsProps } from '@/types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const GithubProjects: React.FC<GithubProjectsProps> = ({ username }) => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setIsLoading(true);
        const data = await fetchGitHubProjects(username);
        setRepos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, [username]);

  if (isLoading) return <div className="text-white text-center py-8">Loading projects...</div>;
  if (error) return <div className="text-red-500 text-center py-8">Error: {error}</div>;

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {repos.map((repo) => (
        <motion.div key={repo.id} variants={itemVariants}>
          <GithubProjectCard repo={repo} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GithubProjects;