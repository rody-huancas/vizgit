import { cn } from '@/utils/helper.utils';
import { formatDate } from '@/utils/date.utils';
import { ContributionWeek, ColorTheme } from '@/types/contributions.types';

interface Props {
  contributions     : ContributionWeek[];
  totalContributions: number;
  theme             : ColorTheme;
  squareSize        : number;
  squareGap         : number;
  squareRadius      : number;
  username          : string;
}

const ContributionHeatmap = (props: Props) => {

  const { contributions, totalContributions, theme, squareSize, squareGap, squareRadius, username } = props;

  const getColor = (count: number) => {
    if (count === 0) return theme.colors.empty;
    if (count <   3) return theme.colors.level1;
    if (count <   6) return theme.colors.level2;
    if (count <   9) return theme.colors.level3;
    return theme.colors.level4;
  };

  const getMonthLabels = () => {
    const months: { name: string; x: number }[] = [];
    let lastMonth = -1;

    contributions.forEach((week, weekIndex) => {
      const firstDay = week.contributionDays[0];
      
      if (firstDay) {
        const date  = new Date(firstDay.date);
        const month = date.getMonth();

        if (month !== lastMonth) {
          months.push({
            name: date.toLocaleDateString('es-ES', { month: 'short' }).replace('.', ''),
            x   : weekIndex * (squareSize + squareGap),
          });
          lastMonth = month;
        }
      }
    });
    return months;
  };

  const monthLabels = getMonthLabels();

  return (
    <article 
      className={cn(theme.bg, "rounded-2xl border border-white/10 p-4 sm:p-8")}
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className='w-full flex flex-col items-center justify-center'>
        <header className="mb-6 text-center w-full">
          <h1 className={cn("text-2xl sm:text-3xl font-bold mb-2", theme.text)}>
            Contribuciones de <span itemProp="name">@{username}</span>
          </h1>
          <p className={cn("text-sm sm:text-base opacity-70", theme.text)}>
            <strong itemProp="contributionCount">{totalContributions}</strong> contribuciones en el último año
          </p>
        </header>
        
        <figure 
          className="w-full overflow-x-auto overflow-y-hidden pb-4 scroll-contribution"
          aria-label={`Mapa de calor de contribuciones de GitHub de ${username}`}
        >
          <div className="inline-flex justify-center min-w-full">
            <div>
              <div className="relative h-6 mb-1" style={{ marginLeft: '32px' }} role="navigation" aria-label="Meses del año">
                {monthLabels.map((month, idx) => (
                  <span
                    key={idx}
                    className={cn("absolute text-xs font-medium opacity-70", theme.text)}
                    style={{ left: `${month.x}px` }}
                    aria-label={`Mes de ${month.name}`}
                  >
                    {month.name}
                  </span>
                ))}
              </div>
          
              <div className="flex" style={{ gap: `${squareGap}px` }}>
                <div
                  className="flex flex-col justify-around text-[10px] sm:text-xs pr-2 select-none shrink-0"
                  style={{ color: theme.text }}
                  role="list"
                  aria-label="Días de la semana"
                >
                  <span style={{ height: `${squareSize}px`, lineHeight: `${squareSize}px` }} role="listitem">
                    Lun
                  </span>
                  <span style={{ height: `${squareSize}px`, lineHeight: `${squareSize}px` }} role="listitem">
                    Mié
                  </span>
                  <span style={{ height: `${squareSize}px`, lineHeight: `${squareSize}px` }} role="listitem">
                    Vie
                  </span>
                </div>
          
                <div
                  className="grid"
                  style={{
                    gap: `${squareGap}px`,
                    gridTemplateColumns: `repeat(${contributions.length}, ${squareSize}px)`,
                    gridAutoFlow: 'column',
                  }}
                  role="grid"
                  aria-label="Calendario de contribuciones"
                >
                  {contributions.map((week, weekIndex) =>
                    week.contributionDays.map((day, dayIndex) => {
                      const date          = new Date(day.date);
                      const formattedDate = formatDate(date);
          
                      return (
                        <div
                          key={`${weekIndex}-${dayIndex}`}
                          className={cn(
                            getColor(day.contributionCount),
                            "hover:ring-2 hover:ring-gray-400 cursor-pointer transition-all hover:scale-110"
                          )}
                          title={`${day.contributionCount} contribuciones - ${formattedDate}`}
                          aria-label={`${day.contributionCount} contribuciones el ${formattedDate}`}
                          role="gridcell"
                          style={{
                            width          : `${squareSize}px`,
                            height         : `${squareSize}px`,
                            borderRadius   : `${squareRadius}px`,
                            gridColumnStart: weekIndex + 1,
                            gridRowStart   : dayIndex + 1,
                          }}
                        />
                      );
                    })
                  )}
                </div>
              </div>
          
              <figcaption className={cn("flex items-center justify-center sm:justify-end gap-2 mt-4 text-xs sm:text-sm opacity-70", theme.text)}>
                <span>Menos</span>
                <div className="flex" style={{ gap: `${squareGap}px` }} role="legend" aria-label="Leyenda de niveles de contribución">
                  {Object.values(theme.colors).map((color, i) => (
                    <div
                      key={i}
                      className={color}
                      aria-label={`Nivel ${i}`}
                      style={{
                        width       : `${squareSize}px`,
                        height      : `${squareSize}px`,
                        borderRadius: `${squareRadius}px`,
                      }}
                    />
                  ))}
                </div>
                <span>Más</span>
              </figcaption>
            </div>
          </div>
        </figure>
        
        <aside className={cn("sm:hidden mt-4 text-xs text-center opacity-50", theme.text)} role="note">
          ← Desliza para ver todo el año →
        </aside>
      </div>
    </article>
  );
};

export default ContributionHeatmap;