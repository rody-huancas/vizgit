import { cn } from "@/utils/helper.utils";
import { UserStats } from "@/types/github.types";
import { ColorTheme } from "@/types/contributions.types";

interface UserStatsCardProps {
  stats: UserStats;
  theme: ColorTheme;
}

const UserStatsCard = ({ stats, theme }: UserStatsCardProps) => {
  const statItems = [
    { label: "Repositorios" , value: stats.totalRepositories, icon: "📦" },
    { label: "Estrellas"    , value: stats.totalStars       , icon: "⭐" },
    { label: "Forks"        , value: stats.totalForks       , icon: "🔱" },
    { label: "Seguidores"   , value: stats.followers        , icon: "👥" },
    { label: "Pull Requests", value: stats.pullRequests     , icon: "🔀" },
    { label: "Issues"       , value: stats.issues           , icon: "📋" },
  ];

  return (
    <div className={cn(theme.bg, "rounded-2xl border border-white/10 p-6")}>
      <div className="flex items-center gap-4 mb-6">
        <img
          src={stats.avatarUrl}
          alt="Avatar"
          className="w-20 h-20 rounded-full border-2 border-emerald-500"
        />
        <div>
          {stats.bio && (
            <p className={cn("text-sm opacity-70 mb-2", theme.text)}>
              {stats.bio}
            </p>
          )}
          <div className="flex gap-3 text-xs opacity-60">
            {stats.location && (
              <span className={theme.text}>📍 {stats.location}</span>
            )}
            {stats.company && (
              <span className={theme.text}>🏢 {stats.company}</span>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {statItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
          >
            <div className="text-2xl mb-1">{item.icon}</div>
            <div className={cn("text-2xl font-bold mb-1", theme.text)}>
              {item.value.toLocaleString()}
            </div>
            <div className={cn("text-xs opacity-60", theme.text)}>
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserStatsCard;
