import { cn } from '@/utils/helper.utils';
import { THEMES } from '@/types/contributions.types';

interface Props {
  selectedTheme   : number;
  setSelectedTheme: (index: number) => void;
  squareSize      : number;
  setSquareSize   : (size: number) => void;
  squareGap       : number;
  setSquareGap    : (gap: number) => void;
  squareRadius    : number;
  setSquareRadius : (radius: number) => void;
  showCustomize   : boolean;
  setShowCustomize: (show: boolean) => void;
}

const ContributionCustomizer = (props: Props) => {
  const { selectedTheme, setSelectedTheme, squareSize, setSquareSize, squareGap, setSquareGap, squareRadius, setSquareRadius, showCustomize, setShowCustomize } = props;

  return (
    <section 
      className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6"
      aria-label="Personalización de gráfico de contribuciones"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-white">Personalizar Diseño</h2>
        <button
          onClick={() => setShowCustomize(!showCustomize)}
          className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm"
          aria-expanded={showCustomize}
          aria-controls="customization-options"
          aria-label={showCustomize ? 'Ocultar opciones de personalización' : 'Mostrar opciones de personalización'}
        >
          {showCustomize ? 'Ocultar opciones' : 'Mostrar opciones'}
        </button>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3 text-white/70">Temas</h3>
        <div 
          className="grid grid-cols-2 md:grid-cols-5 gap-3"
          role="group"
          aria-label="Selección de temas de color"
        >
          {THEMES.map((theme, index) => (
            <button
              key={index}
              onClick={() => setSelectedTheme(index)}
              className={cn(
                'p-4 rounded-lg border-2 transition-all',
                selectedTheme === index ? 'border-emerald-600 shadow-lg shadow-emerald-500/20' : 'border-white/10 hover:border-white/20'
              )}
              aria-label={`Tema ${theme.name}`}
              aria-pressed={selectedTheme === index}
              title={`Seleccionar tema ${theme.name}`}
            >
              <div className="text-sm font-medium mb-2 text-white">{theme.name}</div>
              <div className="flex gap-1 justify-center" aria-hidden="true">
                {Object.values(theme.colors).map((color, i) => (
                  <div key={i} className={cn('w-4 h-4 rounded-sm', color)} />
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {showCustomize && (
        <div 
          id="customization-options"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10"
        >
          <div>
            <label 
              htmlFor="square-size"
              className="block text-sm font-medium mb-2 text-white/70"
            >
              Tamaño de cuadros: {squareSize}px
            </label>
            <input
              id="square-size"
              type="range"
              min="8"
              max="16"
              value={squareSize}
              onChange={(e) => setSquareSize(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
              aria-valuemin={8}
              aria-valuemax={16}
              aria-valuenow={squareSize}
              aria-label={`Ajustar tamaño de cuadros: ${squareSize} píxeles`}
            />
          </div>
          <div>
            <label 
              htmlFor="square-gap"
              className="block text-sm font-medium mb-2 text-white/70"
            >
              Espaciado: {squareGap}px
            </label>
            <input
              id="square-gap"
              type="range"
              min="1"
              max="6"
              value={squareGap}
              onChange={(e) => setSquareGap(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
              aria-valuemin={1}
              aria-valuemax={6}
              aria-valuenow={squareGap}
              aria-label={`Ajustar espaciado: ${squareGap} píxeles`}
            />
          </div>
          <div>
            <label 
              htmlFor="square-radius"
              className="block text-sm font-medium mb-2 text-white/70"
            >
              Bordes redondeados: {squareRadius}px
            </label>
            <input
              id="square-radius"
              type="range"
              min="0"
              max="6"
              value={squareRadius}
              onChange={(e) => setSquareRadius(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
              aria-valuemin={0}
              aria-valuemax={6}
              aria-valuenow={squareRadius}
              aria-label={`Ajustar bordes redondeados: ${squareRadius} píxeles`}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ContributionCustomizer;
