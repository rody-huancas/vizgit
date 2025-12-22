import { cn } from '@/utils/helper.utils';
import { ColorTheme } from "@/types/contributions.types";
import { WeekdayStats } from "@/types/github.types";

interface WeekdayActivityProps {
  weekdayStats: WeekdayStats[];
  theme       : ColorTheme;
}

const WeekdayActivity = ({ weekdayStats, theme }: WeekdayActivityProps) => {
  const reordered = [
    weekdayStats[1], // Lun
    weekdayStats[2], // Mar
    weekdayStats[3], // Mié
    weekdayStats[4], // Jue
    weekdayStats[5], // Vie
    weekdayStats[6], // Sáb
    weekdayStats[0], // Dom
  ];

  return (
    <div className={cn(theme.bg, "rounded-2xl border border-white/10 p-6")}>
      <h2 className={cn("text-xl font-bold mb-2", theme.text)}>
        📅 Días más activos
      </h2>
      <p className={cn("text-sm opacity-60 mb-6", theme.text)}>
        Tu actividad distribuida por día de la semana
      </p>

      <div className="space-y-3">
        {reordered.map((day, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className={cn("text-sm font-medium w-10", theme.text)}>
              {day.day}
            </span>

            <div className="flex-1 bg-white/5 rounded-full h-8 overflow-hidden relative">
              <div
                className="h-full rounded-full transition-all duration-500 flex items-center justify-end px-3"
                style={{
                  width: `${day.percentage}%`,
                  background: `linear-gradient(90deg, ${theme.colors.level2}, ${theme.colors.level4})`,
                }}
              >
                {day.percentage > 20 && (
                  <span className="text-xs font-bold text-white">
                    {day.contributions.toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            {day.percentage <= 20 && (
              <span
                className={cn("text-xs opacity-60 w-16 text-right", theme.text)}
              >
                {day.contributions.toLocaleString()}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekdayActivity;
