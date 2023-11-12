import { supabase } from "../supabase/client";

export const getSongsByUserId = async (userId) => {
  let userIdFormatted = userId[1];

  const { data, error } = await supabase
    .from("songs")
    .select("*")
    .eq("user_id", userIdFormatted)
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error.message);
  }

  return data || [];
};
