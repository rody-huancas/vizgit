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
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-white">Personalizar Diseño</h2>
        <button
          onClick={() => setShowCustomize(!showCustomize)}
          className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm"
        >
          {showCustomize ? 'Ocultar opciones' : 'Mostrar opciones'}
        </button>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3 text-white/70">Temas</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {THEMES.map((theme, index) => (
            <button
              key={index}
              onClick={() => setSelectedTheme(index)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedTheme === index ? 'border-emerald-600 shadow-lg shadow-emerald-500/20' : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div className="text-sm font-medium mb-2 text-white">{theme.name}</div>
              <div className="flex gap-1 justify-center">
                {Object.values(theme.colors).map((color, i) => (
                  <div key={i} className={`w-4 h-4 rounded-sm ${color}`} />
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {showCustomize && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
          <div>
            <label className="block text-sm font-medium mb-2 text-white/70">
              Tamaño de cuadros: {squareSize}px
            </label>
            <input
              type="range"
              min="8"
              max="16"
              value={squareSize}
              onChange={(e) => setSquareSize(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-white/70">
              Espaciado: {squareGap}px
            </label>
            <input
              type="range"
              min="1"
              max="6"
              value={squareGap}
              onChange={(e) => setSquareGap(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-white/70">
              Bordes redondeados: {squareRadius}px
            </label>
            <input
              type="range"
              min="0"
              max="6"
              value={squareRadius}
              onChange={(e) => setSquareRadius(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContributionCustomizer;
