import ReactPlayer from "react-player";
import { useGetSongById } from "../hooks/useGetSongById";
import { useLoadSongUrl } from "../hooks/useLoadSongUrl";
import { usePlayer } from "../hooks/usePlayer";
import { ReproducerButtons } from "./ReproducerButtons";
import { ReproducerSong } from "./ReproducerSong";
import { ReproducerVolume } from "./ReproducerVolume";

export const Reproducer = () => {
  const { activeId, isPlaying, volume } = usePlayer();
  const { song } = useGetSongById(activeId);
  const songUrl = useLoadSongUrl(song);

  if (!song && !songUrl) {
    return null;
  }

  return (
    <footer className="bg-neutral-950 h-24 rounded p-6 flex justify-between items-center">
      <ReproducerSong song={song} />
      <ReproducerButtons />
      <ReproducerVolume />

      <div className="hidden">
        <ReactPlayer
          onEnded={() => console.log("end")}
          url={songUrl.publicUrl}
          playing={isPlaying}
          volume={volume}
          controls
          config={{
            youtube: {
              playerVars: {
                controls: 0,
                modestbranding: 1,
                fs: 0,
                playsinline: 1,
              },
            },
          }}
        />
      </div>
    </footer>
  );
};
