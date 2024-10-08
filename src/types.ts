export interface Repository {
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    language: string | null | undefined;
    owner: {
        login: string;
        avatar_url: string;
    };
}

export interface GithubProjectsProps {
    username: string;
}