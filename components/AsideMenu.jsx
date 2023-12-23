import { usePlayer } from "../hooks/usePlayer";
import { Library } from "./Library";
import { Menu } from "./Menu";

export const AsideMenu = () => {
  const { activeId } = usePlayer();

  return (
    <section
      className={`flex-col w-1/3 gap-y-2 max-w-[280px] hidden md:flex ${
        activeId ? "max-h-[calc(100dvh-91px)]" : "max-h-screen"
      }`}
    >
      <Menu />
      <Library />
    </section>
  );
};
