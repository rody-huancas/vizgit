import { cn } from "@/utils/helper.utils";
import { ColorTheme } from "@/types/contributions.types";
import { LanguageStats } from "@/types/github.types";

interface LanguagesCardProps {
  languages: LanguageStats[];
  theme    : ColorTheme;
}

const LanguagesCard = ({ languages, theme }: LanguagesCardProps) => {
  return (
    <div className={cn(theme.bg, "rounded-2xl border border-white/10 p-6")}>
      <h2 className={cn("text-xl font-bold mb-4", theme.text)}>
        💻 Lenguajes más usados
      </h2>

      <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden mb-6 flex">
        {languages.map((lang, idx) => (
          <div
            key={idx}
            style={{
              width: `${lang.percentage}%`,
              backgroundColor: lang.color,
            }}
            className="h-full transition-all hover:opacity-80"
            title={`${lang.name}: ${lang.percentage.toFixed(1)}%`}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {languages.map((lang, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors"
          >
            <div
              className="w-4 h-4 rounded-full shrink-0"
              style={{ backgroundColor: lang.color }}
            />
            <div className="flex-1 min-w-0">
              <div className={cn("font-medium truncate", theme.text)}>
                {lang.name}
              </div>
              <div className={cn("text-xs opacity-60", theme.text)}>
                {lang.percentage.toFixed(1)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagesCard;
