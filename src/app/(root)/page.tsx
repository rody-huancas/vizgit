import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HeroInput from "@/components/HeroInput";

export const metadata: Metadata = {
  title      : "VizGit - Visualiza tus Contribuciones de GitHub",
  description: "Analiza y visualiza tus estadísticas de GitHub de forma interactiva. Descubre tus lenguajes más usados, actividad semanal y métricas de contribución.",
  keywords   : ["GitHub", "estadísticas", "contribuciones", "desarrollo", "programación", "visualización"],
  authors    : [{ name: "Rody Huancas" }],
  openGraph  : {
    title      : "VizGit - Visualiza tus Contribuciones de GitHub",
    description: "Analiza y visualiza tus estadísticas de GitHub de forma interactiva",
    type       : "website",
    locale     : "es_ES",
  },
  twitter: {
    card       : "summary_large_image",
    title      : "VizGit - Visualiza tus Contribuciones de GitHub",
    description: "Analiza y visualiza tus estadísticas de GitHub de forma interactiva",
  },
};

const HomePage = () => {
  return (
    <section className="relative h-[calc(100dvh-250px)] flex items-center justify-center px-0 sm:px-6 lg:px-8 py-12 sm:pt-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[20%] left-[15%] w-1.5 h-1.5 bg-emerald-400/20 rounded-full animate-ping"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute top-[35%] right-[25%] w-1 h-1 bg-blue-400/20 rounded-full animate-ping"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-[30%] left-[30%] w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-ping"
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-[25%] right-[20%] w-1 h-1 bg-emerald-400/20 rounded-full animate-ping"
          style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-[60%] left-[70%] w-1 h-1 bg-blue-400/20 rounded-full animate-ping"
          style={{ animationDuration: "4.5s", animationDelay: "1.5s" }}
        />
      </div>

      <div className="relative w-full flex flex-col items-center">
        <Hero />
        <HeroInput />
      </div>
    </section>
  );
};

export default HomePage;
