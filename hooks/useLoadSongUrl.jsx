import { useSupabaseClient } from "@supabase/auth-helpers-react";

export const useLoadSongUrl = (song) => {
  const supabaseClient = useSupabaseClient();

  if (!song) {
    return "";
  }

  const { data: songData, error } = supabaseClient.storage
    .from("songs")
    .getPublicUrl(song.song_path);

  if (error) {
    console.log(error);
    return "";
  }

  return songData;
};
