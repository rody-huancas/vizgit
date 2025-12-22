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
    if (count === 0) return theme.colors. empty;
    if (count <   3) return theme.colors. level1;
    if (count <   6) return theme.colors.level2;
    if (count <   9) return theme.colors.level3;
    return theme.colors.level4;
  };

  const getMonthLabels = () => {
    const months: { name: string; x: number }[] = [];
    let lastMonth = -1;

    contributions.forEach((week, weekIndex) => {
      const firstDay = week. contributionDays[0];
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
    <div className={`${theme.bg} rounded-2xl border border-white/10 p-4 sm:p-8`}>
      <div className='w-full flex flex-col items-center justify-center'>
        <div className="mb-6 text-center w-full">
          <h1 className={`text-2xl sm:text-3xl font-bold mb-2 ${theme. text}`}>
            Contribuciones de @{username}
          </h1>
          <p className={`text-sm sm:text-base ${theme.text} opacity-70`}>
            {totalContributions} contribuciones en el último año
          </p>
        </div>
        
        <div className="w-full overflow-x-auto overflow-y-hidden pb-4 scroll-contribution">
          <div className="inline-flex justify-center min-w-full">
            <div>
              <div className="relative h-6 mb-1" style={{ marginLeft: '32px' }}>
                {monthLabels.map((month, idx) => (
                  <span
                    key={idx}
                    className={`absolute text-xs font-medium ${theme.text} opacity-70`}
                    style={{ left: `${month.x}px` }}
                  >
                    {month.name}
                  </span>
                ))}
              </div>
          
              <div className="flex" style={{ gap: `${squareGap}px` }}>
                <div
                  className="flex flex-col justify-around text-[10px] sm:text-xs pr-2 select-none shrink-0"
                  style={{ color: theme.text }}
                >
                  <span style={{ height: `${squareSize}px`, lineHeight: `${squareSize}px` }}>
                    Lun
                  </span>
                  <span style={{ height: `${squareSize}px`, lineHeight: `${squareSize}px` }}>
                    Mié
                  </span>
                  <span style={{ height: `${squareSize}px`, lineHeight: `${squareSize}px` }}>
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
                >
                  {contributions.map((week, weekIndex) =>
                    week.contributionDays.map((day, dayIndex) => {
                      const date          = new Date(day.date);
                      const formattedDate = formatDate(date);
          
                      return (
                        <div
                          key={`${weekIndex}-${dayIndex}`}
                          className={`${getColor(day.contributionCount)} 
                            hover:ring-2 hover:ring-gray-400 cursor-pointer transition-all
                            hover:scale-110`}
                          title={`${day.contributionCount} contribuciones - ${formattedDate}`}
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
          
              <div className={`flex items-center justify-center sm:justify-end gap-2 mt-4 text-xs sm:text-sm ${theme.text} opacity-70`}>
                <span>Menos</span>
                <div className="flex" style={{ gap: `${squareGap}px` }}>
                  {Object.values(theme.colors).map((color, i) => (
                    <div
                      key={i}
                      className={color}
                      style={{
                        width       : `${squareSize}px`,
                        height      : `${squareSize}px`,
                        borderRadius: `${squareRadius}px`,
                      }}
                    />
                  ))}
                </div>
                <span>Más</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`sm:hidden mt-4 text-xs text-center ${theme.text} opacity-50`}>
          ← Desliza para ver todo el año →
        </div>
      </div>
    </div>
  );
};

export default ContributionHeatmap;