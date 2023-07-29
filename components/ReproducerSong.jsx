import Image from "next/image";
import { useLoadImage } from "../hooks/useLoadImage";

export const ReproducerSong = ({ song }) => {
  const imageUrl = useLoadImage(song.image_path);

  return (
    <div className="flex gap-x-4 items-center w-fit lg:w-1/4">
      <Image
        src={imageUrl}
        alt="song-image"
        height={55}
        width={55}
        priority
        quality={60}
        className="rounded h-[45px] w-[45px] md:w-[55px] md:h-[55px]"
      />
      <div className="hidden sm:flex flex-col justify-center">
        <h1 className="text-sm md:text-[16px] sm:max-w-[100px] max-w-[180px] truncate">
          {song.title}
        </h1>
        <h1 className="text-xs md:text-sm text-neutral-500">{song.author}</h1>
      </div>
      <div className="flex items-center">
        <button className="hidden sm:block text-neutral-500 hover:text-neutral-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
