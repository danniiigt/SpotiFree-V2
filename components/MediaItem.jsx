import { useLoadImage } from "../hooks/useLoadImage";
import { useOnPlay } from "../hooks/useOnPlay";
import { usePlayer } from "../hooks/usePlayer";
import Image from "next/image";

export const MediaItem = ({ song }) => {
  const imageUrl = useLoadImage(song.image_path);
  const { onPlay } = useOnPlay(song);
  const { activeId } = usePlayer();
  const isPlaying = activeId === song.id;

  return (
    <div
      onClick={() => onPlay(song.id)}
      className={`
        flex 
        items-center 
        gap-x-3 
        cursor-pointer 
        hover:bg-neutral-800/50 
        transition-all
        duration-150
        w-full 
        p-2 
        rounded-md
        ${isPlaying ? "bg-neutral-800/50" : ""}
      `}
    >
      <div
        className="
          relative 
          rounded-md 
          min-h-[48px] 
          min-w-[48px] 
          overflow-hidden
        "
      >
        <Image
          fill
          src={imageUrl || "/images/music-placeholder.png"}
          alt="MediaItem"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col overflow-hidden">
        <p className="text-white truncate">{song.title}</p>
        <p className="text-neutral-400 text-sm truncate">{song.author}</p>
      </div>
    </div>
  );
};
