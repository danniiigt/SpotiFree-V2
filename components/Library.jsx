import { useEffect, useState } from "react";
import { getSongsByUserId } from "../helpers/getSongsByUserId";
import useAuthModal from "../hooks/useAuthModal";
import useUploadModal from "../hooks/useUploadModal";
import { useUser } from "../hooks/useUser";
import { LibrarySkeleton } from "./LibrarySkeleton";
import { MediaItem } from "./MediaItem";

export const Library = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [songs, setSongs] = useState([]);
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();

  useEffect(() => {
    if (user) {
      getSongsByUserId(user.id)
        .then(setSongs)
        .finally(() => setLoading(false));
    }
  }, [user]);

  const handleAddSong = () => {
    if (!user) {
      authModal.onOpen();
    } else {
      uploadModal.onOpen();
    }
  };

  return (
    <div className="bg-neutral-950 rounded h-full overflow-scroll custom-scrollbar p-2">
      <div className="flex justify-between p-3">
        <div className="flex items-center gap-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
            />
          </svg>
          <h1>Tu biblioteca</h1>
        </div>
        <button
          onClick={handleAddSong}
          className="p-2 hover:bg-neutral-800/25 rounded-full cursor-pointer transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      <div>
        <div className="p-2 space-y-2">
          {loading && <LibrarySkeleton />}

          {!loading && (
            <>
              {songs.map((song) => (
                <MediaItem key={song.id} song={song} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
