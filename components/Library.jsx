import { getSongsByUserId } from "../helpers/getSongsByUserId";
import { useUser } from "../hooks/useUser";
import { MediaItem } from "./MediaItem";
import useAuthModal from "../hooks/useAuthModal";
import useUploadModal from "../hooks/useUploadModal";
import useSWR from "swr";

export const Library = () => {
  const { user } = useUser();
  const { data: songs } = useSWR(
    user ? ["songsByUser", user?.id] : null,
    getSongsByUserId
  );

  const authModal = useAuthModal();
  const uploadModal = useUploadModal();

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
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m16 6 4 14" />
            <path d="M12 6v14" />
            <path d="M8 8v12" />
            <path d="M4 4v16" />
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
          {songs?.map((song) => (
            <MediaItem key={song.id} song={song} />
          ))}
        </div>
      </div>
    </div>
  );
};
