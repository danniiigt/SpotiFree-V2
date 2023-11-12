import ReactPlayer from "react-player";
import { useGetSongById } from "../hooks/useGetSongById";
import { useLoadSongUrl } from "../hooks/useLoadSongUrl";
import { usePlayer } from "../hooks/usePlayer";
import { ReproducerButtons } from "./ReproducerButtons";
import { ReproducerSong } from "./ReproducerSong";
import { ReproducerVolume } from "./ReproducerVolume";
import { useRef } from "react";
import { SongProgress } from "./SongProgress";

export const Reproducer = () => {
  const {
    activeId,
    isPlaying,
    volume,
    onPause,
    onPlay,
    setSongDuration,
    setCurrentSongTime,
    setSongProgress,
    setLoading,
    loading,
  } = usePlayer();
  const { song, songFavUsers } = useGetSongById(activeId);
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
    return (
      <footer className="bg-neutral-950 h-24 rounded p-6 flex justify-between items-center"></footer>
    );
  }

  return (
    <footer className="bg-neutral-950 h-24 rounded p-4 sm:p-6 grid grid-cols-5 sm:grid-cols-3 content-center relative">
      <ReproducerSong song={song} songFavUsers={songFavUsers} />
      <ReproducerButtons onChangeProgress={onChangeProgress} />
      <ReproducerVolume />
      <SongProgress onChangeProgress={onChangeProgress} />

      <div className="hidden">
        <ReactPlayer
          playsinline
          ref={reactPlayerRef}
          onReady={() => {
            setLoading(false);
          }}
          onDuration={(duration) => setSongDuration(duration)}
          onProgress={(progress) => {
            if (isPlaying && !loading) {
              setCurrentSongTime(Math.floor(progress.playedSeconds + 1));
              setSongProgress(progress.played);
            }
          }}
          onPlay={() => {
            onPlay();
          }}
          onEnded={onSongEnded}
          url={songUrl.publicUrl}
          playing={!loading && isPlaying}
          volume={Number(volume)}
          controls={true}
          width="100%"
          height="auto"
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
