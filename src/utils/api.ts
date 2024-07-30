import { Octokit } from '@octokit/rest';
import type { Repository } from '@/types';

const octokit = new Octokit({ auth: import.meta.env.PUBLIC_GITHUB_TOKEN });

export const fetchGitHubProjects = async (username: string): Promise<Repository[]> => {
  try {
    const response = await octokit.repos.listForUser({
      username,
      sort: 'updated',
      per_page: 6
    });

    const repositories: Repository[] = response.data.map(repo => ({
      id: repo.id,
      name: repo.name,
      full_name: repo.full_name,
      description: repo.description,
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count ?? 0,
      language: repo.language,  // Esto puede ser string, null, o undefined
      owner: {
        login: repo.owner.login,
        avatar_url: repo.owner.avatar_url
      }
    }));

    return repositories;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('401')) {
        throw new Error('GitHub authentication failed. Please check your token.');
      }
      throw new Error(`Failed to fetch GitHub projects: ${error.message}`);
    }
    throw new Error('An unknown error occurred');
  }
};