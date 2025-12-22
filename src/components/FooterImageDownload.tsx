const FooterImageDownload = () => {
  return (
    <footer
      id="export-only-footer"
      className="hidden text-center pt-6 pb-4 border-t border-white/10"
      role="contentinfo"
      aria-label="Información del generador"
    >
      <p className="text-white/50 text-sm">
        Generado con ❤️ por{" "}
        <a
          href="https://github.com/rody-huancas/vizgit"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
          aria-label="VizGit en GitHub"
        >
          VizGit
        </a>
      </p>
      <p className="text-white/30 text-xs mt-1">
        <a
          href="https://github.com/rody-huancas/vizgit"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white/50 transition-colors"
        >
          github.com/rody-huancas/vizgit
        </a>
      </p>
    </footer>
  );
};

export default FooterImageDownload;
