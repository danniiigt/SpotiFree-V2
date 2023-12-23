import React from "react";
import { cn } from "../lib/utils";
import { Icons } from "./Icons";

export const LoveImage = ({ className, iconSize = "small" }) => {
  return (
    <div
      className={cn(
        "h-16 w-16 rounded aspect-square bg-gradient-to-br from-[#723D46] to-[#c47c88] via-30% via-[#723D46] flex items-center justify-center text-gray-200",
        className
      )}
    >
      <Icons.heart
        strokeWidth={1}
        className={iconSize === "small" ? "w-7 h-7" : iconSize}
      />
    </div>
  );
};
