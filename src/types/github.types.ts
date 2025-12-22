export interface ContributionDay {
  date             : string;
  contributionCount: number;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface LanguageStats {
  name      : string;
  color     : string;
  size      : number;
  percentage: number;
}

export interface UserStats {
  totalRepositories: number;
  totalStars       : number;
  totalForks       : number;
  followers        : number;
  following        : number;
  pullRequests     : number;
  issues           : number;
  avatarUrl        : string;
  bio              : string | null;
  location         : string | null;
  company          : string | null;
}

export interface WeekdayStats {
  day          : string;
  contributions: number;
  percentage   : number;
}


export interface ActivityLevel {
  level      : string;
  color      : string;
  icon       : string;
  description: string;
  score      : number;
}

export interface UseGitHubContributionsReturn {
  contributions     : ContributionWeek[];
  totalContributions: number;
  languages         : LanguageStats[];
  userStats         : UserStats | null;
  weekdayStats      : WeekdayStats[];
  activityLevel     : ActivityLevel | null;
  loading           : boolean;
  error             : string | null;
}

export interface GitHubRepository {
  stargazerCount: number;
  forkCount     : number;
  languages     : {
    edges: Array<{
      size: number;
      node: {
        name : string;
        color: string;
      };
    }>;
  };
}

export interface GitHubWeek {
  contributionDays: Array<{
    date             : string;
    contributionCount: number;
  }>;
}
