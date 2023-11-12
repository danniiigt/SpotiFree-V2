import { useSessionContext } from "@supabase/auth-helpers-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";

export const useGetSongById = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [song, setSong] = useState(null);
  const [songFavUsers, setSongFavUsers] = useState(null);
  const { supabaseClient } = useSessionContext();

  useEffect(() => {
    if (!id) {
      return;
    }

    setIsLoading(true);

    const fetchSong = async () => {
      const { data, error } = await supabaseClient
        .from("songs")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.log(error);
        toast.error("Error al obtener la canción");
        return;
      }

      setSong(data);
    };

    const fetchSongFavUsers = async () => {
      const { data, error } = await supabaseClient
        .from("liked_songs")
        .select("user_id")
        .eq("song_id", id);

      if (error) {
        console.log(error);
        toast.error("Error al obtener los usuarios que le han dado like");
        return;
      }

      setSongFavUsers(data);
    };

    fetchSong();
    fetchSongFavUsers();
    setIsLoading(false);
  }, [id, supabaseClient]);

  return useMemo(
    () => ({
      isLoading,
      song,
      songFavUsers,
    }),
    [isLoading, song, songFavUsers]
  );
};
