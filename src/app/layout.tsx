import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { cn } from "@/utils/helper.utils";
import "@/styles/globals.css";

const roboto = Roboto({
  subsets : ["latin"],
  weight  : ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto",
  display : "swap",
});

export const metadata: Metadata = {
  title: {
    default : "vizgit - Visualiza tus contribuciones de GitHub",
    template: "%s | vizgit"
  },
  description: "Visualiza tus contribuciones de GitHub de una manera única y atractiva. Analiza tu actividad, estadísticas y tendencias de commits.",
  keywords   : ["GitHub", "contribuciones", "estadísticas", "visualización", "commits", "desarrollador"],
  authors    : [{ name: "rody-huancas" }],
  creator    : "rody-huancas",
  openGraph  : {
    type       : "website",
    locale     : "es_ES",
    url        : "https://vizgit.novtiq.com",
    title      : "vizgit - Visualiza tus contribuciones de GitHub",
    description: "Visualiza tus contribuciones de GitHub de una manera única y atractiva.",
    siteName   : "vizgit",
  },
  twitter: {
    card       : "summary_large_image",
    title      : "vizgit - Visualiza tus contribuciones de GitHub",
    description: "Visualiza tus contribuciones de GitHub de una manera única y atractiva.",
  },
  robots: {
    index    : true,
    follow   : true,
    googleBot: {
      index              : true,
      follow             : true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet"      : -1,
    },
  },
  viewport: {
    width       : "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href="https://vizgit.novtiq.com" />
      </head>
      <body
        className={cn("antialiased font-roboto", roboto.variable)}
      >
        <div className="fixed inset-0 h-full w-full bg-slate-950 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-size-[20px_20px]"></div>
          
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#06155a,transparent)]"></div>
        </div>

        <div className="relative z-10 grid min-h-dvh grid-rows-[1fr_auto]">
          {children}
        </div>
      </body>
    </html>
  );
}
