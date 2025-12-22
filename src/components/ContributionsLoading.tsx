const ContributionsLoading = () => {
  return (
    <div className="min-h-[calc(100vh-250px)] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-xl text-white/70">Cargando contribuciones...</p>
      </div>
    </div>
  );
};

export default ContributionsLoading;
