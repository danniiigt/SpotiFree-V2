import React from "react";

export const SongSkeletonItem = () => {
  return (
    <div className="bg-neutral-900/50 rounded-md shadow p-4 group transition-all duration-150 cursor-pointer relative min-h-[275px] h-full flex flex-col justify-between animate__animated animate__fadeIn animate__fadeOut">
      <div className="bg-neutral-800/60 rounded w-full h-[180px] mb-4 animate-pulse"></div>

      <div className="space-y-2">
        <div className="bg-neutral-800/60 rounded w-28 max-w-full h-3 animate-pulse"></div>
        <div className="bg-neutral-800/60 rounded w-48 max-w-full h-2 animate-pulse"></div>
        <div className="bg-neutral-800/60 rounded w-24 max-w-full h-1.5 animate-pulse"></div>
      </div>
    </div>
  );
};
