import ReactPlayer from "react-player";
import { useGetSongById } from "../hooks/useGetSongById";
import { useLoadSongUrl } from "../hooks/useLoadSongUrl";
import { usePlayer } from "../hooks/usePlayer";
import { ReproducerButtons } from "./ReproducerButtons";
import { ReproducerSong } from "./ReproducerSong";
import { ReproducerVolume } from "./ReproducerVolume";
import { useRef } from "react";

export const Reproducer = () => {
  const {
    activeId,
    isPlaying,
    volume,
    onPause,
    setSongDuration,
    setCurrentSongTime,
    setSongProgress,
  } = usePlayer();
  const { song } = useGetSongById(activeId);
  const songUrl = useLoadSongUrl(song);
  const reactPlayerRef = useRef();

  const onChangeProgress = (seconds) => {
    setCurrentSongTime(seconds);
    reactPlayerRef.current?.seekTo(seconds, "seconds");
  };

  const onSongEnded = () => {
    onPause();
    setCurrentSongTime(0);
    setSongProgress(0);
  };

  if (!song && !songUrl) {
    return null;
  }

  return (
    <footer className="bg-neutral-950 h-24 rounded p-6 flex justify-between items-center">
      <ReproducerSong song={song} />
      <ReproducerButtons onChangeProgress={onChangeProgress} />
      <ReproducerVolume />

      <div className="hidden">
        <ReactPlayer
          ref={reactPlayerRef}
          onDuration={(duration) => setSongDuration(duration)}
          onProgress={(progress) => {
            if (isPlaying) {
              setCurrentSongTime(Math.floor(progress.playedSeconds + 1));
              setSongProgress(progress.played);
            }
          }}
          onEnded={onSongEnded}
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
