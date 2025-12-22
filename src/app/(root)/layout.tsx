"use client";

import { ProgressProvider } from "@bprogress/next/app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DATA_ITEM_MENU } from "@/data/menu-item.data";

const AppLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ProgressProvider
      height="4px"
      color="#00D492"
      options={{ showSpinner: false }}
      shallowRouting
    >
      <Header items={DATA_ITEM_MENU} ease="power3.out" />

      <main className="container mx-auto pt-28 py-5 sm:px-0 text-white overflow-hidden">
        {children}
      </main>

      <Footer />
    </ProgressProvider>
  );
};

export default AppLayout;
