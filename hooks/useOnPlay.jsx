import useAuthModal from "./useAuthModal";
import { usePlayer } from "./usePlayer";
import { useUser } from "./useUser";

export const useOnPlay = (song) => {
  const { setId, onPlay: setPlay } = usePlayer();
  const authModal = useAuthModal();
  const { user } = useUser();

  const onPlay = (id) => {
    if (!user) {
      authModal.onOpen();
      return;
    }
    setId(id);
    setPlay(true);
  };

  return { onPlay };
};
