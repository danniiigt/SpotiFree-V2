import { Header } from "../components/Header";
import { AsideMenu } from "../components/AsideMenu";
import { Reproducer } from "../components/Reproducer";
import { usePlayer } from "../hooks/usePlayer";

export const MainLayout = ({ children }) => {
  const { activeId } = usePlayer();

  return (
    <div
      className={`flex flex-col gap-2 h-screen sm:h-[calc(100vh-20px)] w-screen sm:w-[calc(100vw-20px)]`}
    >
      <main className="flex h-full sm:h-[calc(100%-104px)] gap-2">
        <AsideMenu />
        <section
          className={`bg-gradient-to-b from-green-900/60 from-5% via-neutral-950 via-30% to-neutral-950 to-90% w-full flex-grow rounded-b sm:rounded overflow-y-auto custom-scrollbar transition-colors duration-500 ${
            activeId
              ? "max-h-[calc(100vh-96px)] lg:max-h-[calc(100vh-91px)]"
              : "max-h-screen"
          }`}
        >
          {/* <Header /> */}
          <div className="p-4 lg:p-6">{children}</div>
        </section>
      </main>
      <Reproducer />
    </div>
  );
};
