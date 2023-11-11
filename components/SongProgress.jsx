import { usePlayer } from "../hooks/usePlayer";

export const SongProgress = ({ onChangeProgress }) => {
  const { songDuration, currentSongTime } = usePlayer();
  const minutes = Math.floor(songDuration / 60);
  const seconds = Math.floor(songDuration % 60);
  const minutesPlayed = Math.floor(currentSongTime / 60);
  const secondsPlayed = Math.floor(currentSongTime % 60);

  return (
    <>
      <input
        type="range"
        min="0"
        max={songDuration}
        className="w-full absolute bottom-0 z-10 appearance-none h-1 bg-green-500/30 rounded-full accent-green-500 sm:hidden"
        value={currentSongTime || 0}
        onChange={(e) => onChangeProgress(e.target.value)}
      />
      <div className="w-1/2 absolute bottom-0 z-50 appearance-none h-1 bg-36 accent-green-500 sm:hidden"></div>
    </>
  );
};
