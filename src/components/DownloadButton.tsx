interface Props {
  username    : string;
  handleExport: () => void;
}

const DownloadButton = ({ username, handleExport }: Props) => {
  return (
    <button
      onClick={handleExport}
      className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all shadow-lg text-white bg-linear-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 cursor-pointer"
      aria-label={`Descargar imagen del perfil de GitHub de ${username}`}
      title="Exportar perfil completo como imagen PNG"
      type="button"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      <span>Descargar</span>
    </button>
  );
};

export default DownloadButton;
