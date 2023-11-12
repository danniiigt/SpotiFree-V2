import { useUser } from "../hooks/useUser";
import { getLikedSongs } from "../helpers/getLikedSongs";
import { MediaItem } from "./MediaItem";
import useSWR from "swr";

export const LikedSongs = () => {
  const { user } = useUser();
  const { data: likedSongs } = useSWR(user ? user.id : null, getLikedSongs);

  return (
    <div>
      {likedSongs?.length > 0 &&
        likedSongs?.map((song) => (
          <MediaItem key={song.songs.id} song={song.songs} />
        ))}
    </div>
  );
};
