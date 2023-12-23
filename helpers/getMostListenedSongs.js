import { supabase } from "../supabase/client";

export const getMostListenedSongs = async () => {
  const { data, error } = await supabase
    .from("songs")
    .select("*")
    .order("played_times", { ascending: false })
    .limit(50);

  const { data: likedData, error: likedError } = await supabase
    .from("liked_songs")
    .select("*");

  for (const likedSong of likedData) {
    for (const song of data) {
      if (likedSong.song_id === song.id) {
        song.likesCount ? song.likesCount++ : (song.likesCount = 1);
      }
    }
  }

  if (error) {
    console.log(error.message);
  }

  return data || [];
};
