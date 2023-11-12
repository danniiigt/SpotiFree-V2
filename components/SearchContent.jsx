import React from "react";
import { MediaItem } from "./MediaItem";
import { useRouter } from "next/router";
import useSWR from "swr";
import { getSongs } from "../helpers/getSongs";

export const SearchContent = ({ songs, isLoadingSearch }) => {
  const router = useRouter();
  const { title } = router.query;
  const { data: allSongs, isLoading } = useSWR("songs", getSongs, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  });

  if (songs.length == 0 && title?.length > 0 && !isLoadingSearch) {
    return (
      <div>
        <h1>No se han encontrado canciones</h1>
      </div>
    );
  } else if (songs.length == 0 && title?.length == 0) {
    return (
      <div>
        {!isLoading && (
          <div className="space-y-2">
            {allSongs.map((song) => (
              <MediaItem key={song.id} song={song} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      {songs?.length > 0 &&
        songs?.map((song) => <MediaItem key={song.id} song={song} />)}
    </div>
  );
};
