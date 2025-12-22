import { useState, useEffect } from 'react';

interface ContributionDay {
  date             : string;
  contributionCount: number;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface UseGitHubContributionsReturn {
  contributions     : ContributionWeek[];
  totalContributions: number;
  loading           : boolean;
  error             : string | null;
}

export const useGitHubContributions = (username: string): UseGitHubContributionsReturn => {
  const [contributions     , setContributions     ] = useState<ContributionWeek[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [loading           , setLoading           ] = useState<boolean>(true);
  const [error             , setError             ] = useState<string | null>(null);

  useEffect(() => {
    if (!username) return;

    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError(null);

        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
        
        const contributionsQuery = `
          query {
            user(login: "${username}") {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      date
                      contributionCount
                    }
                  }
                }
              }
            }
          }
        `;

        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ query: contributionsQuery }),
        });

        const data = await response.json();

        if (data.errors) {
          throw new Error(data.errors[0].message);
        }

        const calendar = data.data.user.contributionsCollection.contributionCalendar;
        
        setContributions(calendar.weeks);
        setTotalContributions(calendar.totalContributions);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar contribuciones');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  return { contributions, totalContributions, loading, error };
};
