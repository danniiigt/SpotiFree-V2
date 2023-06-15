import { useSupabaseClient } from "@supabase/auth-helpers-react";

export const useLoadImage = (imagePath) => {
  const supabaseClient = useSupabaseClient();

  if (!imagePath) return null;
  if (imagePath.toString().startsWith("/")) return imagePath;

  const { data: imageData } = supabaseClient.storage
    .from("images")
    .getPublicUrl(imagePath);

  return imageData.publicUrl;
};
