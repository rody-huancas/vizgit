import Head from "next/head";

const ContributionError = ({ error }: { error: string | null }) => {
  return (
    <>
      <Head>
        <title>Error al cargar datos - VizGit</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta 
          name="description" 
          content="Ha ocurrido un error al cargar los datos de contribuciones de GitHub. Por favor, intenta nuevamente." 
        />
      </Head>
      <div className="min-h-[calc(100vh-250px)] flex items-center justify-center">
        <div className="text-center max-w-md" role="alert" aria-live="assertive">
          <div className="text-6xl mb-4" aria-hidden="true">⚠️</div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Error al cargar datos
          </h1>
          <p className="text-white/60 mb-4">{error || "Ha ocurrido un error inesperado"}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
            aria-label="Recargar página para reintentar"
          >
            Reintentar
          </button>
        </div>
      </div>
    </>
  );
};

export default ContributionError;
