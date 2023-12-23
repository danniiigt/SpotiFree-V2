import { useLoadImage } from "../hooks/useLoadImage";
import { useOnPlay } from "../hooks/useOnPlay";
import { usePlayer } from "../hooks/usePlayer";
import { Icons } from "./Icons";

export const MediaItem = ({
  song,
  showPlayedCount = false,
  showLikedCount = false,
}) => {
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
        sm:hover:bg-neutral-800/50 
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
        <img
          fill
          src={imageUrl || "/images/music-placeholder.png"}
          alt="MediaItem"
          loading="lazy"
          className="object-fill max-h-[48px] aspect-square"
          quality={65}
        />
      </div>
      <div className="flex flex-col w-full max-w-[50%] overflow-hidden">
        <p className="text-white max-w-[200px] sm:max-w-full truncate">
          {song.title}
        </p>
        <p className="text-neutral-400 text-sm max-w-[200px] sm:max-w-full truncate">
          {song.author}
        </p>
      </div>
      <div className="flex flex-col flex-grow items-end space-y-1">
        {showPlayedCount && (
          <span className="text-neutral-400 text-sm truncate flex items-center">
            {song.played_times}
            <Icons.headPhones className="h-3 w-3 text-neutral-500 ml-2" />
          </span>
        )}

        {showLikedCount && (
          <span className="text-neutral-400 text-sm truncate flex items-center">
            {song.likesCount ?? 0}
            <Icons.heart className="h-3 w-3 text-neutral-500 ml-2" />
          </span>
        )}
      </div>
    </div>
  );
};
