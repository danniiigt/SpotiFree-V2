import Link from "next/link";
import React from "react";
import { Icons } from "./Icons";
import { useRouter } from "next/router";
import { cn } from "../lib/utils";

const paths = [
  {
    path: "/",
    icon: <Icons.house className="h-6" />,
    altIcon: <Icons.houseSolid className="h-6" />,
    text: "Inicio",
  },
  {
    path: "/buscar",
    icon: <Icons.search strokeWidth={1.25} className="h-6" />,
    altIcon: <Icons.search strokeWidth={2.5} className="h-6" />,
    text: "Buscar",
  },
  {
    path: "/biblioteca",
    icon: <Icons.biblio strokeWidth={1.25} className="h-6" />,
    altIcon: <Icons.biblio strokeWidth={2.5} className="h-6" />,
    text: "Biblioteca",
  },
];

export const MobileMenu = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="sticky bottom-0 bg-black/80 backdrop-blur-lg h-20 w-full z-50 grid grid-cols-3  place-items-center sm:hidden">
      {paths.map(({ path, icon, text, altIcon }) => (
        <Link
          key={path}
          href={path}
          className={cn(
            "h-fit w-fit flex flex-col items-center text-gray-500",
            {
              "text-gray-200": pathname === path,
            }
          )}
        >
          {pathname !== path && icon}
          {pathname === path && altIcon && altIcon}
          <p className="text-xs">{text}</p>
        </Link>
      ))}
    </div>
  );
};
