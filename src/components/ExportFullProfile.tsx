"use client";

import { toPng } from "html-to-image";
import { useState } from "react";
import ShareButton from "./ShareButton";
import { UserStats } from "@/types/github.types";

interface ExportFullProfileProps {
  username           : string;
  userStats?         : UserStats | null;
  totalContributions?: number;
}

const ExportFullProfile = ({ username, userStats, totalContributions }: ExportFullProfileProps) => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);

    try {
      document.body.style.overflow = "hidden";
      
      const overlay = document.createElement("div");
      overlay.style.cssText = `
        position       : fixed;
        inset          : 0;
        background     : #0D0716;
        z-index        : 9999;
        display        : flex;
        align-items    : center;
        justify-content: center;
        overflow       : hidden;
      `;
      overlay.innerHTML = `
        <div style="color: #10b981; display: flex; gap: 12px; align-items: center;">
          <svg class="animate-spin" width="24" height="24" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" opacity="0.25"/>
            <path fill="currentColor" opacity="0.75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
          </svg>
          <span>Generando imagen...</span>
        </div>
      `;
      document.body.appendChild(overlay);

      await new Promise((resolve) => setTimeout(resolve, 100));

      document.body.classList.add("export-desktop");
      
      const element = document.getElementById("full-profile-container");
      if (!element) throw new Error("Contenedor no encontrado");

      const customizer = document.getElementById("contribution-customizer");
      const footer     = document.getElementById("export-only-footer");

      if (customizer) customizer.style.display = "none";
      if (footer) {
        footer.classList.remove("hidden");
        footer.style.display = "block";
      }

      await new Promise((resolve) => setTimeout(resolve, 200));

      const dataUrl = await toPng(element, {
        quality        : 1.0,
        pixelRatio     : 3,
        backgroundColor: "#0D0716",
        cacheBust      : true,
      });

      if (customizer) customizer.style.display = "";

      if (footer) {
        footer.style.display = "none";
        footer.classList.add("hidden");
      }

      const link          = document.createElement("a");
            link.href     = dataUrl;
            link.download = `${username}-vizgit-profile-${Date.now()}.png`;
            link.click();

      await new Promise((resolve) => setTimeout(resolve, 300));
      
      document.body.removeChild(overlay);

    } catch (error) {
      console.error("Error al exportar:", error);
      
      const overlay = document.querySelector('div[style*="z-index: 9999"]');
      if (overlay) document.body.removeChild(overlay);
      
      alert("Error al exportar la imagen. Inténtalo de nuevo.");
    } finally {
      document.body.style.overflow = "";
      document.body.classList.remove("export-desktop");
      setIsExporting(false);
    }
  };

  return (
    <section
      id="export-button-container"
      className="h-12 flex items-center justify-end"
      aria-label="Exportar perfil como imagen"
    >
      {isExporting ? (
        <div 
          className="flex items-center gap-3 px-6 py-3 text-emerald-400 animate-pulse"
          role="status"
          aria-live="polite"
        >
          <svg 
            className="animate-spin h-5 w-5" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span className="text-sm font-medium">Generando imagen...</span>
        </div>
      ) : (
        <div className="flex items-center justify-end gap-5">
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all shadow-lg text-white bg-linear-to-r from-emerald-600 to-emerald-700 animate-fade-in cursor-pointer"
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
            <span>Descargar Imagen</span>
          </button>

          <ShareButton 
            username={username} 
            stats={{
              totalCommits: totalContributions,
              totalRepos: userStats?.totalRepositories,
              stars: userStats?.totalStars,
            }}
          />
        </div>
      )}
    </section>
  );
};

export default ExportFullProfile;
