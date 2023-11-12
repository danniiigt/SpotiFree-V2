import { supabase } from "../supabase/client";

export const getLikedSongs = async (userId) => {
  if (!userId) throw new Error("User ID is required");

  // inner join liked_songs with table "songs"
  const { data, error } = await supabase
    .from("liked_songs")
    .select("songs(*)")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error.message);
  }

  return data || [];
};
