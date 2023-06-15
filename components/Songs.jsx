import { getSongs } from "../helpers/getSongs";
import { SongCard } from "./SongCard";
import { SongsWrapper } from "./SongsWrapper";
import { SongsSkeleton } from "./SongsSkeleton";
import useSWR from "swr";

export const Songs = () => {
  const { data: songs, isLoading } = useSWR("songs", getSongs);

  return (
    <SongsWrapper>
      {isLoading && <SongsSkeleton />}
      {!isLoading &&
        songs.map((song) => <SongCard song={song} key={song.id} />)}
    </SongsWrapper>
  );
};
