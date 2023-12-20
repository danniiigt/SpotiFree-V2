import { usePlayer } from "./usePlayer";
import { useUser } from "./useUser";
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

  const onPlay = (id) => {
    if (!user) {
      authModal.onOpen();
      return;
    }

    if (id === activeId) {
      return;
    }

    setLoading(true);
    setCurrentSongTime(0);
    setSongProgress(0);
    setId(id);
    setPlay(true);
  };

  return { onPlay };
};
