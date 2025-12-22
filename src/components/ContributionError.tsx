const ContributionError = ({ error }: { error: string | null }) => {
  return (
    <div className="min-h-[calc(100vh-250px)] flex items-center justify-center">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Error al cargar datos
        </h2>
        <p className="text-white/60 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
        >
          Reintentar
        </button>
      </div>
    </div>
  );
};

export default ContributionError;
