import Image from "next/image";
import React from "react";
import { useLoadImage } from "../hooks/useLoadImage";
import { useOnPlay } from "../hooks/useOnPlay";
import { usePlayer } from "../hooks/usePlayer";

export const SongCard = ({ song }) => {
  const songImageUrl = useLoadImage(song.image_path);
  const { onPlay } = useOnPlay(song);
  const {
    loading,
    activeId,
    isPlaying,
    onPlay: playPlayer,
    onPause: pausePlayer,
  } = usePlayer();

  const isSongSelected = song.id === activeId;

  return (
    <div className="bg-neutral-900/50 rounded-md shadow p-4 group hover:bg-neutral-800/60 transition-all duration-150 cursor-pointer relative min-h-[185px] h-full flex flex-col justify-between animate__animated animate__fadeIn">
      <div className="w-fit h-fit relative">
        <Image
          src={songImageUrl}
          alt="song-image"
          height={100}
          width={150}
          priority
          quality={60}
          className="rounded w-full object-cover h-full max-h-[180px] relative"
        />
        {isSongSelected && isPlaying && (
          <img
            src="/images/animated-equalizer.gif"
            width={50}
            height={50}
            alt="equalizer"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg"
          />
        )}
      </div>

      <div className="mt-4">
        <h1 className="text-lg truncate">{song.title}</h1>
        <h2 className="font-extralight text-sm mt-[-3px] text-gray-400 truncate">
          {song.author}
        </h2>
      </div>

      {isSongSelected && isPlaying && (
        <button
          onClick={() => pausePlayer()}
          disabled={loading}
          className="absolute bg-green-500 disabled:bg-green-500/50 w-fit p-2.5 shadow-lg shadow-neutral-950 text-neutral-900 rounded-full transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100
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
              d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}

      {isSongSelected && !isPlaying && (
        <button
          onClick={() => playPlayer()}
          disabled={loading}
          className="absolute bg-green-500 disabled:bg-green-500/50 w-fit p-2.5 shadow-lg shadow-neutral-950 text-neutral-900 rounded-full transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100
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
      )}

      {!isSongSelected && (
        <button
          onClick={() => onPlay(song.id)}
          disabled={loading}
          className="absolute bg-green-500 disabled:bg-green-500/50 w-fit p-2.5 shadow-lg shadow-neutral-950 text-neutral-900 rounded-full transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100
          group-hover:bottom-12 bottom-10 transform -translate-y-1/2 right-5
        "
        >
          {loading ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-spin"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
          ) : (
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
          )}
        </button>
      )}
    </div>
  );
};
