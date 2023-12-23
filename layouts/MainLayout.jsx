import { AsideMenu } from "../components/AsideMenu";
import { Reproducer } from "../components/Reproducer";
import { usePlayer } from "../hooks/usePlayer";
import { MobileMenu } from "../components/MobileMenu";
import { MobileSong } from "../components/MobileSong";
import { cn } from "../lib/utils";
import { Metatags } from "../components/Metatags";

export const MainLayout = ({ children }) => {
  const { activeId } = usePlayer();

  return (
    <>
      <Metatags />
      <div className="min-w-full min-h-screen relative">
        <div
          className={cn(
            "flex flex-col gap-2 h-[calc(100dvh-80px)] sm:h-[calc(100dvh-20px)] w-screen sm:w-[calc(100vw-20px)]",
            activeId && "h-[calc(100dvh-136px)]"
          )}
        >
          <main className="flex h-full sm:h-[calc(100%-104px)] gap-2">
            <AsideMenu />
            <section
              className={`bg-gradient-to-b from-green-900/60 from-5% via-neutral-950 via-30% to-neutral-950 to-90% w-full flex-grow rounded-b sm:rounded overflow-y-auto custom-scrollbar transition-colors duration-500 ${
                activeId
                  ? "max-h-[calc(100dvh-80px)] sm:max-h-[calc(100dvh-96px)] lg:max-h-[calc(100dvh-91px)]"
                  : "max-h-screen"
              }`}
            >
              {/* <Header /> */}
              <div className="p-4 lg:p-6 ">{children}</div>
            </section>
          </main>
          <Reproducer />
        </div>

        <MobileSong />
        <MobileMenu />
      </div>
    </>
  );
};
