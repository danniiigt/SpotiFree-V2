import Image from "next/image";
import React from "react";
import { Icons } from "./Icons";
import { usePlayer } from "../hooks/usePlayer";
import { useGetSongById } from "../hooks/useGetSongById";
import { useLoadImage } from "../hooks/useLoadImage";

export const MobileSong = () => {
  const { activeId, onPlay, onPause, isPlaying, songProgress } = usePlayer();
  const { song } = useGetSongById(activeId);
  const imageUrl = useLoadImage(song?.image_path);
  if (!song) return null;

  return (
    <div className="w-[calc(100%-24px)] rounded-md mx-auto sticky bottom-[80px] bg-green-900 h-14 z-50 sm:hidden">
      <div className="w-full h-full p-2 gap-x-2 flex items-center">
        <Image
          width={40}
          height={40}
          quality={50}
          src={imageUrl}
          alt="Imagen de la canción"
          className="rounded-md h-full aspect-square object-contain"
        />

        <div>
          <h1 className="leading-5 text-white">{song.title}</h1>
          <p className="text-xs">{song.author}</p>
        </div>

        <div className="flex-auto"></div>

        {!isPlaying && (
          <button onClick={onPlay} className="mr-2">
            <Icons.play className="h-6 w-6 text-white" strokeWidth={1} />
          </button>
        )}

        {isPlaying && (
          <button onClick={onPause} className="mr-2">
            <Icons.pause className="h-6 w-6 text-white" strokeWidth={1} />
          </button>
        )}
      </div>

      <div
        className="h-[2px] mx-2 bg-gray-200 rounded absolute bottom-0"
        style={{
          width: `${(songProgress * 100).toFixed(2)}%`,
        }}
      ></div>
    </div>
  );
};
