import { useState, useEffect } from 'react';
import { ContributionWeek, LanguageStats, UserStats, WeekdayStats, ActivityLevel, UseGitHubContributionsReturn, GitHubRepository, GitHubWeek } from '@/types/github.types';


export const useGitHubContributions = (username: string): UseGitHubContributionsReturn => {
  const [contributions     , setContributions     ] = useState<ContributionWeek[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [languages         , setLanguages         ] = useState<LanguageStats[]>([]);
  const [userStats         , setUserStats         ] = useState<UserStats | null>(null);
  const [weekdayStats      , setWeekdayStats      ] = useState<WeekdayStats[]>([]);
  const [activityLevel     , setActivityLevel     ] = useState<ActivityLevel | null>(null);
  const [loading           , setLoading           ] = useState<boolean>(true);
  const [error             , setError             ] = useState<string | null>(null);

  useEffect(() => {
    if (! username) return;

    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError(null);

        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
        
        const query = `
          query {
            user(login: "${username}") {
              avatarUrl
              bio
              location
              company
              followers {
                totalCount
              }
              following {
                totalCount
              }
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
                totalPullRequestContributions
                totalIssueContributions
              }
              repositories(first: 100, ownerAffiliations: OWNER, orderBy: {field: UPDATED_AT, direction: DESC}) {
                totalCount
                nodes {
                  stargazerCount
                  forkCount
                  languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
                    edges {
                      size
                      node {
                        name
                        color
                      }
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
          body: JSON.stringify({ query }),
        });

        const data = await response.json();

        if (data.errors) {
          throw new Error(data.errors[0].message);
        }

        const user = data.data.user;
        const calendar = user.contributionsCollection.contributionCalendar;
        
        // Contribuciones
        setContributions(calendar.weeks);
        setTotalContributions(calendar.totalContributions);

        // Estadísticas del usuario
        const totalStars = user.repositories.nodes.reduce(
          (acc: number, repo: GitHubRepository) => acc + repo.stargazerCount, 
          0
        );
        const totalForks = user.repositories.nodes.reduce(
          (acc: number, repo: GitHubRepository) => acc + repo.forkCount, 
          0
        );

        setUserStats({
          totalRepositories: user.repositories.totalCount,
          totalStars,
          totalForks,
          followers   : user.followers.totalCount,
          following   : user.following.totalCount,
          pullRequests: user.contributionsCollection.totalPullRequestContributions,
          issues      : user.contributionsCollection.totalIssueContributions,
          avatarUrl   : user.avatarUrl,
          bio         : user.bio,
          location    : user.location,
          company     : user.company,
        });

        // Procesar lenguajes
        const languageMap = new Map<string, { size: number; color: string }>();
        
        user.repositories.nodes.forEach((repo: GitHubRepository) => {
          repo.languages.edges.forEach((edge) => {
            const { name, color } = edge.node;
            const size = edge.size;
            
            if (languageMap.has(name)) {
              const existing = languageMap.get(name)!;
              languageMap.set(name, { 
                size: existing.size + size, 
                color 
              });
            } else {
              languageMap.set(name, { size, color });
            }
          });
        });

        const totalSize = Array.from(languageMap.values()).reduce(
          (acc, lang) => acc + lang.size, 
          0
        );

        const languageStats: LanguageStats[] = Array.from(languageMap.entries())
          .map(([name, { size, color }]) => ({
            name,
            color: color || '#858585',
            size,
            percentage: (size / totalSize) * 100,
          }))
          .sort((a, b) => b.size - a.size)
          .slice(0, 8);

        setLanguages(languageStats);

        // Días más activos de la semana
        const weekdayContributions = [0, 0, 0, 0, 0, 0, 0]; // Dom-Sáb
        const weekdayNames         = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

        calendar.weeks.forEach((week: GitHubWeek) => {
          week.contributionDays.forEach((day) => {
            const date      = new Date(day.date);
            const dayOfWeek = date.getDay(); // 0 = Domingo
            weekdayContributions[dayOfWeek] += day.contributionCount;
          });
        });

        const maxWeekdayContributions = Math.max(...weekdayContributions);
        const weekdayStatsData: WeekdayStats[] = weekdayContributions.map((count, index) => ({
          day          : weekdayNames[index],
          contributions: count,
          percentage   : maxWeekdayContributions > 0 ? (count / maxWeekdayContributions) * 100: 0,
        }));

        setWeekdayStats(weekdayStatsData);

        // Nivel de actividad
        const avgDaily = calendar.totalContributions / 365;
        let level: ActivityLevel;

        if (avgDaily >= 10) {
          level = {
            level      : 'Leyenda',
            color      : '#FFD700',
            icon       : '👑',
            description: '¡Increíble! Eres una máquina de código',
            score      : 100,
          };
        } else if (avgDaily >= 5) {
          level = {
            level      : 'Experto',
            color      : '#9333EA',
            icon       : '🔥',
            description: 'Excelente consistencia y dedicación',
            score      : 80,
          };
        } else if (avgDaily >= 2) {
          level = {
            level      : 'Avanzado',
            color      : '#3B82F6',
            icon       : '⚡',
            description: 'Muy buen ritmo de contribuciones',
            score      : 60,
          };
        } else if (avgDaily >= 1) {
          level = {
            level      : 'Intermedio',
            color      : '#10B981',
            icon       : '🌱',
            description: 'Constante y en crecimiento',
            score      : 40,
          };
        } else if (avgDaily >= 0.5) {
          level = {
            level      : 'Principiante',
            color      : '#F59E0B',
            icon       : '🌟',
            description: 'Buen comienzo, sigue así',
            score      : 20,
          };
        } else {
          level = {
            level      : 'Novato',
            color      : '#6B7280',
            icon       : '🎯',
            description: 'Cada contribución cuenta',
            score      : 10,
          };
        }

        setActivityLevel(level);

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar datos');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  return { 
    contributions, 
    totalContributions, 
    languages, 
    userStats, 
    weekdayStats,
    activityLevel,
    loading, 
    error 
  };
};
