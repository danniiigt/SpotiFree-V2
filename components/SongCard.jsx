import Image from "next/image";
import React from "react";
import { useLoadImage } from "../hooks/useLoadImage";
import { useOnPlay } from "../hooks/useOnPlay";

export const SongCard = ({ song }) => {
  const songImageUrl = useLoadImage(song.image_path);
  const { onPlay } = useOnPlay(song);

  return (
    <div className="bg-neutral-900/50 rounded-md shadow p-4 group hover:bg-neutral-800/60 transition-all duration-150 cursor-pointer relative min-h-[185px] h-full flex flex-col justify-between animate__animated animate__fadeIn">
      <Image
        src={songImageUrl}
        alt="song-image"
        height={100}
        width={150}
        className="rounded w-full object-cover h-full max-h-[180px]"
      />

      <div className="mt-4">
        <h1 className="text-lg truncate">{song.title}</h1>
        <h2 className="font-extralight text-sm mt-[-3px] text-gray-400 truncate">
          {song.author}
        </h2>
      </div>

      <button
        onClick={() => onPlay(song.id)}
        className="absolute bg-green-500 w-fit p-2.5 shadow-lg shadow-neutral-950 text-neutral-900 rounded-full transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100
          group-hover:bottom-12 bottom-10 transform -translate-y-1/2 right-5
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};
