import { supabase } from "../supabase/client";

export const getSongsByTitle = async (title) => {
  if (!title || title === "") return [];

  const { data, error } = await supabase
    .from("songs")
    .select("*")
    .ilike("title", `%${title}%`)
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error.message);
  }

  return data || [];
};
