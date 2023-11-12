import React from "react";
import useSWR from "swr";
import { getRandomSongs } from "../helpers/getRandomSongs";
import { MediaItem } from "./MediaItem";

export const RandomSongs = () => {
  const { data: randomSongs } = useSWR("randomSongs", getRandomSongs);

  return (
    <div>
      {randomSongs?.length > 0 &&
        randomSongs?.map((song) => <MediaItem key={song.id} song={song} />)}
    </div>
  );
};
