import { usePlayer } from "../hooks/usePlayer";
import { Icons } from "./Icons";
import { ReproducerTimeLine } from "./ReproducerTimeLine";

export const ReproducerButtons = ({ onChangeProgress }) => {
  const { isPlaying, onPlay, onPause, loading } = usePlayer();

  return (
    <div className="flex flex-col w-full gap-2 col-span-2 sm:col-span-1">
      <div className="flex gap-x-4 items-center flex-grow justify-center ml-auto sm:ml-0">
        <button className="hidden sm:block text-neutral-500 hover:text-neutral-200">
          <Icons.skipBack className="w-6 h-6" />
        </button>

        {loading ? (
          <button className="bg-green-500/50 w-fit p-1.5 shadow-lg shadow-neutral-950 text-neutral-900 rounded-full transition-all duration-200 hover:scale-110 active:scale-100">
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
              className="animate-spin"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
          </button>
        ) : isPlaying ? (
          <button
            className="bg-green-500 w-fit p-1.5 shadow-lg shadow-neutral-950 text-neutral-900 rounded-full transition-all duration-200 hover:scale-110 active:scale-100"
            onClick={onPause}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        ) : (
          <button
            className="bg-green-500 w-fit p-1.5 shadow-lg shadow-neutral-950 text-neutral-900 rounded-full transition-all duration-200 hover:scale-110 active:scale-100"
            onClick={() => {
              onPlay();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}

        <button className="hidden sm:block text-neutral-500 hover:text-neutral-200">
          <Icons.skipForward className="w-6 h-6" />
        </button>
      </div>
      <div className="hidden sm:block">
        <ReproducerTimeLine onChangeProgress={onChangeProgress} />
      </div>
    </div>
  );
};
