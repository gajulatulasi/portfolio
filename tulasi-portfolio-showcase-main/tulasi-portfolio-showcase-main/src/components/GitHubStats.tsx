
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Star, GitFork, Eye } from 'lucide-react';

interface Repository {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  html_url: string;
  language: string;
}

export function GitHubStats({ username = 'gajulatulasi' }: { username?: string }) {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalStars, setTotalStars] = useState(0);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=6`);
        const data = await response.json();
        
        if (Array.isArray(data)) {
          setRepos(data);
          const stars = data.reduce((acc, repo) => acc + repo.stargazers_count, 0);
          setTotalStars(stars);
        }
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
        <p className="text-gray-400 mt-2">Loading GitHub stats...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-white mb-4">GitHub Activity</h3>
        <div className="inline-flex items-center space-x-2 text-yellow-400">
          <Star className="h-5 w-5" />
          <span className="text-lg font-semibold">{totalStars} Total Stars</span>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <Card 
            key={repo.name}
            className="p-4 glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-white text-sm truncate">{repo.name}</h4>
                <p className="text-gray-400 text-xs line-clamp-2">{repo.description || 'No description'}</p>
              </div>
              
              <div className="flex items-center justify-between text-xs">
                <span className="text-blue-400">{repo.language || 'Unknown'}</span>
                <div className="flex items-center space-x-3 text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <GitFork className="h-3 w-3" />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>
              </div>
              
              <a 
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-xs"
              >
                View Repository →
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
