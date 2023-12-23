import React from "react";
import { Icons } from "./Icons";
import { cn } from "../lib/utils";

export const MostListenedImage = ({ className, iconSize = "small" }) => {
  return (
    <div
      className={cn(
        "h-16 w-16 rounded aspect-square bg-gradient-to-br from-[#355e70] to-[#919fa8] via-30% via-[#2b75a3] flex items-center justify-center text-gray-200",
        className
      )}
    >
      <Icons.music
        strokeWidth={1}
        className={iconSize === "small" ? "w-8 h-8" : iconSize}
      />
    </div>
  );
};
