import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/utils/helper.utils";
import { DATA_ITEM_MENU } from "@/data/menu-item.data";
import "@/styles/globals.css";

const roboto = Roboto({
  subsets : ["latin"],
  weight  : ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto",
  display : "swap",
});

export const metadata: Metadata = {
  title      : "VizGit",
  description: "Vizualiza tus contribuciones de GitHub de una manera única y atractiva.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={cn("antialiased font-roboto", roboto.variable)}
      >
        <div className="fixed inset-0 h-full w-full bg-slate-950 z-0">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
        </div>

        <div className="relative z-10 grid min-h-dvh grid-rows-[1fr_auto]">
          <Header items={DATA_ITEM_MENU} ease="power3.out" />
          
          <main className="container mx-auto pt-28 p-5 px-5 sm:px-0 text-white">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
