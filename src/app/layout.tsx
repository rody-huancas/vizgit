import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { cn } from "@/utils/helper.utils";
import "@/styles/globals.css";

const roboto = Roboto({
  subsets :  ["latin"],
  weight  :  ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto",
  display : "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vizgit.novtiq.com"),
  title: {
    default : "vizgit - Visualiza tus contribuciones de GitHub",
    template:  "%s | vizgit"
  },
  description: "Visualiza tus contribuciones de GitHub de una manera única y atractiva. Analiza tu actividad, estadísticas, lenguajes más usados y tendencias de commits con hermosos heatmaps personalizables.",
  keywords   : [
    "GitHub",
    "contribuciones",
    "estadísticas",
    "visualización",
    "commits",
    "desarrollador",
    "heatmap",
    "github stats",
    "github contributions",
    "developer stats",
    "código abierto",
    "open source",
    "análisis de código",
    "actividad github",
    "lenguajes programación"
  ],
  authors    :  [{ name: "Rody Huancas", url: "https://github.com/rody-huancas" }],
  creator    : "Rody Huancas",
  publisher  : "Rody Huancas",
  openGraph  : {
    type       : "website",
    locale     : "es_ES",
    url        : "https://vizgit.novtiq.com",
    title      : "vizgit - Visualiza tus contribuciones de GitHub",
    description: "Visualiza tus contribuciones de GitHub de una manera única y atractiva.  Analiza tu actividad y estadísticas con hermosos heatmaps.",
    siteName   : "vizgit",
    images     : [
      {
        url   : "/logo-vizgit.webp",
        width : 1200,
        height: 630,
        alt   : "vizgit - Visualización de Contribuciones GitHub",
      },
    ],
  },
  twitter: {
    card       : "summary_large_image",
    title      : "vizgit - Visualiza tus contribuciones de GitHub",
    description: "Visualiza tus contribuciones de GitHub de una manera única y atractiva.",
    creator    : "@rodyhuancas",
    images     : ["/logo-vizgit.webp"],
  },
  robots: {
    index    : true,
    follow   : true,
    googleBot:  {
      index              : true,
      follow             : true,
      "max-video-preview":  -1,
      "max-image-preview": "large",
      "max-snippet"      :  -1,
    },
  },
  viewport: {
    width       : "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon     : "/favicon.ico",
    shortcut : "/logo-vizgit.webp",
    apple    : "/logo-vizgit.webp",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://vizgit.novtiq.com",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={cn("antialiased font-roboto", roboto.variable)}>
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
