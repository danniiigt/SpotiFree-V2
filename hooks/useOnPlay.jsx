import useAuthModal from "./useAuthModal";
import { usePlayer } from "./usePlayer";
import { useUser } from "./useUser";

export const useOnPlay = (song) => {
  const {
    setId,
    onPlay: setPlay,
    setSongProgress,
    setCurrentSongTime,
    activeId,
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

    setId(id);
    setPlay(true);
    setSongProgress(0);
    setCurrentSongTime(0);
  };

  return { onPlay };
};
