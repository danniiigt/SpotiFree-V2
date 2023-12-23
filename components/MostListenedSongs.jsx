import { MediaItem } from "./MediaItem";
import { getMostListenedSongs } from "../helpers/getMostListenedSongs";
import useSWR from "swr";

export const MostListenedSongs = () => {
  const { data: mostListenedSongs } = useSWR(
    "most-listened-songs",
    getMostListenedSongs
  );

  return (
    <div>
      {mostListenedSongs?.length > 0 &&
        mostListenedSongs?.map((song, index) => (
          <div className="flex items-center space-x-2" key={song.id}>
            <span>{index + 1}</span>
            <MediaItem song={song} showPlayedCount showLikedCount />
          </div>
        ))}
    </div>
  );
};
