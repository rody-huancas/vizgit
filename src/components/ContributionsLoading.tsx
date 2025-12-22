import { memo } from "react";

const ContributionsLoading = () => {
  return (
    <div 
      className="min-h-[calc(100vh-250px)] flex items-center justify-center p-4"
      role="status"
      aria-live="polite"
      aria-label="Cargando contribuciones de GitHub"
    >
      <div className="text-center max-w-4xl w-full">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div 
              className="text-6xl animate-bounce"
              role="img"
              aria-label="Icono de planta creciendo"
            >
              🌱
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="flex gap-1" aria-hidden="true">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-2">
          Analizando tus contribuciones
        </h2>
        <p className="text-white/60 mb-8">
          Estamos procesando tu actividad en GitHub...
        </p>

        <div 
          className="inline-block bg-gray-900/50 rounded-xl p-6 border border-white/10"
          aria-hidden="true"
        >
          <div className="grid grid-cols-12 gap-1">
            {Array.from({ length: 84 }).map((_, idx) => {
              const delay = (idx % 12) * 50;
              return (
                <div
                  key={idx}
                  className="w-3 h-3 bg-emerald-500/30 rounded-sm animate-pulse"
                  style={{
                    animationDelay: `${delay}ms`,
                    animationDuration: "1.5s",
                  }}
                />
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-8 text-sm" aria-hidden="true">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            <span className="text-white/70">Repositorios</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500/50 rounded-full"></div>
            <span className="text-white/50">Lenguajes</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500/50 rounded-full"></div>
            <span className="text-white/50">Estadísticas</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ContributionsLoading);
