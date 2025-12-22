import { cn } from "@/utils/helper.utils";
import { UserStats } from "@/types/github.types";
import { ColorTheme } from "@/types/contributions.types";

interface UserStatsCardProps {
  stats    : UserStats;
  theme    : ColorTheme;
  username?: string;
}

const UserStatsCard = ({ stats, theme, username = "" }: UserStatsCardProps) => {
  const statItems = [
    { label: "Repositorios" , value: stats.totalRepositories, icon: "📦", ariaLabel: "Total de repositorios"  },
    { label: "Estrellas"    , value: stats.totalStars       , icon: "⭐", ariaLabel: "Total de estrellas"     },
    { label: "Forks"        , value: stats.totalForks       , icon: "🔱", ariaLabel: "Total de forks"         },
    { label: "Seguidores"   , value: stats.followers        , icon: "👥", ariaLabel: "Número de seguidores"   },
    { label: "Pull Requests", value: stats.pullRequests     , icon: "🔀", ariaLabel: "Total de pull requests" },
    { label: "Issues"       , value: stats.issues           , icon: "📋", ariaLabel: "Total de issues"        },
  ];

  return (
    <article 
      className={cn(theme.bg, "rounded-2xl border border-white/10 p-6")}
      itemScope
      itemType="https://schema.org/Person"
    >
      <header className="flex items-center gap-4 mb-6">
        <img
          src={stats.avatarUrl}
          alt={`Avatar de perfil de ${ username || 'usuario' }`}
          className="w-20 h-20 rounded-full border-2 border-emerald-500"
          itemProp="image"
          loading="lazy"
          width="80"
          height="80"
        />
        <div>
          {username && (
            <h2 className={cn("text-lg font-semibold mb-1", theme.text)} itemProp="name">
              {username}
            </h2>
          )}
          {stats.bio && (
            <p className={cn("text-sm opacity-70 mb-2", theme.text)} itemProp="description">
              {stats.bio}
            </p>
          )}
          <div className="flex gap-3 text-xs opacity-60">
            {stats.location && (
              <span className={theme.text} itemProp="address">
                <span aria-label="Ubicación">📍</span> {stats.location}
              </span>
            )}
            {stats.company && (
              <span className={theme.text} itemProp="worksFor">
                <span aria-label="Empresa">🏢</span> {stats.company}
              </span>
            )}
          </div>
        </div>
      </header>

      <section 
        className="grid grid-cols-2 sm:grid-cols-3 gap-4"
        aria-label="Estadísticas del perfil de GitHub"
      >
        {statItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
            role="group"
            aria-label={item.ariaLabel}
          >
            <div className="text-2xl mb-1" aria-hidden="true">{item.icon}</div>
            <div className={cn("text-2xl font-bold mb-1", theme.text)}>
              {item.value.toLocaleString()}
            </div>
            <div className={cn("text-xs opacity-60", theme.text)}>
              {item.label}
            </div>
          </div>
        ))}
      </section>
    </article>
  );
};

export default UserStatsCard;
