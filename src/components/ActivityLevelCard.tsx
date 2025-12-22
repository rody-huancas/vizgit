import { cn } from '@/utils/helper.utils';
import { ColorTheme } from "@/types/contributions.types";
import { ActivityLevel } from "@/types/github.types";

interface ActivityLevelCardProps {
  activityLevel     : ActivityLevel;
  totalContributions: number;
  theme             : ColorTheme;
}

const ActivityLevelCard = ({ activityLevel, totalContributions, theme }: ActivityLevelCardProps) => {
  const avgDaily = (totalContributions / 365).toFixed(1);

  return (
    <div 
      className={cn(theme.bg, "rounded-2xl border border-white/10 p-6 relative overflow-hidden")}
    >
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at top right, ${activityLevel.color}, transparent)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className={cn("text-xl font-bold mb-1", theme.text)}>
              ⚡ Nivel de Actividad
            </h2>
            <p className={cn("text-sm opacity-60", theme.text)}>
              {activityLevel.description}
            </p>
          </div>
          <div className="text-4xl">
            {activityLevel.icon}
          </div>
        </div>

        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{ 
            backgroundColor: `${activityLevel.color}20`,
            border: `2px solid ${activityLevel.color}`,
          }}
        >
          <span 
            className="text-2xl font-black"
            style={{ color: activityLevel.color }}
          >
            {activityLevel.level}
          </span>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className={cn("opacity-60", theme.text)}>Progreso</span>
            <span className={cn("font-bold", theme.text)}>{activityLevel.score}/100</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{
                width: `${activityLevel.score}%`,
                backgroundColor: activityLevel.color,
                boxShadow: `0 0 10px ${activityLevel.color}50`,
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-lg p-3">
            <div className={cn("text-2xl font-bold", theme.text)}>
              {totalContributions.toLocaleString()}
            </div>
            <div className={cn("text-xs opacity-60", theme.text)}>
              Total anual
            </div>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <div className={cn("text-2xl font-bold", theme.text)}>
              {avgDaily}
            </div>
            <div className={cn("text-xs opacity-60", theme.text)}>
              Promedio diario
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityLevelCard;
