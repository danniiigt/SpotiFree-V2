import { Header } from "../components/Header";
import { AsideMenu } from "../components/AsideMenu";
import { Reproducer } from "../components/Reproducer";
import { usePlayer } from "../hooks/usePlayer";

export const MainLayout = ({ children }) => {
  const { activeId } = usePlayer();

  return (
    <div
      className={`flex flex-col gap-2 h-[calc(100vh-20px)] w-[calc(100vw-20px)]`}
    >
      <main className="flex h-[calc(100%-104px)] gap-2">
        <AsideMenu />
        <section
          className={`bg-gradient-to-b from-green-900/60 from-5% via-neutral-950 via-30% to-neutral-950 to-90% w-full flex-grow rounded overflow-y-auto custom-scrollbar transition-colors duration-500 ${
            activeId
              ? "max-h-[calc(100vh-126px)] lg:max-h-[calc(100vh-91px)]"
              : "max-h-screen"
          }`}
        >
          <Header />
          <div className="p-6 pt-0">{children}</div>
        </section>
      </main>
      <Reproducer />
    </div>
  );
};
