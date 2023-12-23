import { usePlayer } from "./usePlayer";
import { useUser } from "./useUser";
import { supabase } from "../supabase/client";
import useAuthModal from "./useAuthModal";

export const useOnPlay = (song) => {
  const {
    setId,
    onPlay: setPlay,
    setSongProgress,
    setCurrentSongTime,
    activeId,
    loading,
    setLoading,
  } = usePlayer();
  const authModal = useAuthModal();
  const { user } = useUser();

  const onPlay = async (id) => {
    if (!user) {
      authModal.onOpen();
      return;
    }

    if (id === activeId) {
      return;
    }

    await supabase
      .from("songs")
      .update({ played_times: song.played_times + 1 })
      .eq("id", id);

    setLoading(true);
    setCurrentSongTime(0);
    setSongProgress(0);
    setId(id);
    setPlay(true);
  };

  return { onPlay };
};
