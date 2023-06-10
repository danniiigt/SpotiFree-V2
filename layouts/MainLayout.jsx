import { Header } from "../components/Header";
import { LayoutMenu } from "../components/LayoutMenu";
import { LayoutReproducer } from "../components/LayoutReproducer";
import React, { useState } from "react";
import UserProvider from "../providers/UserProvider";
import { Toaster } from "react-hot-toast";
import ToasterProvider from "../providers/ToasterProvider";

export const MainLayout = ({ children }) => {
  const [musicPlaying, setMusicPlaying] = useState(false);

  return (
    <div className="flex flex-col gap-2 h-[calc(100vh-20px)] w-[calc(100vw-20px)]">
      <main className="flex h-full gap-2">
        <LayoutMenu />
        <section
          className="bg-gradient-to-b from-emerald-900/60 from-5% via-neutral-950 via-30% to-neutral-950 to-90% w-full flex-grow rounded overflow-y-auto max-h-[calc(100vh-91px)] custom-scrollbar transition-colors duration-500 
        "
        >
          <Header />
          <div className="p-6 pt-0">{children}</div>
        </section>
      </main>
      <LayoutReproducer />
    </div>
  );
};
