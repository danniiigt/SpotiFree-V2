import { supabase } from "../supabase/client";

export const getRandomSongs = async () => {
  // get random songs (order by random)
  const { data, error } = await supabase.from("random_songs_view").select("*");

  if (error) {
    console.log(error.message);
  }

  return data || [];
};
