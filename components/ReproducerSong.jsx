import Image from "next/image";
import { useLoadImage } from "../hooks/useLoadImage";
import { useUser } from "../hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { mutate } from "swr";
import toast from "react-hot-toast";

export const ReproducerSong = ({ song, songFavUsers }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isSongLiked, setIsSongLiked] = useState(false);
  const imageUrl = useLoadImage(song.image_path);
  const { user } = useUser();
  const supabaseClient = useSupabaseClient();

  const handleLike = async (songId) => {
    await supabaseClient.from("liked_songs").insert([
      {
        user_id: user.id,
        song_id: songId,
      },
    ]);
    toast.success("Canción añadida a favoritos");
    mutate(user.id);
  };

  const handleDislike = async (songId) => {
    await supabaseClient
      .from("liked_songs")
      .delete()
      .match({ user_id: user.id, song_id: songId });

    toast.success("Canción eliminada de favoritos");
    mutate(user.id);
  };

  const printMediaSession = () => {
    if (!("mediaSession" in navigator)) return;

    navigator.mediaSession.metadata = new MediaMetadata({
      title: song.title,
      artist: song.author,
      artwork: [
        {
          src: imageUrl,
          sizes: "768x768",
          type: "image/png",
        },
      ],
    });
  };

  useEffect(() => {
    const isSongLikedByUser = songFavUsers?.some(
      (favUser) => favUser.user_id === user?.id
    );

    setIsSongLiked(isSongLikedByUser);
  }, [song, songFavUsers, user]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (song) printMediaSession();
  }, [song]);

  if (!isMounted) return null;

  return (
    <div className="flex gap-x-4 items-center w-fit col-span-3 sm:col-span-1">
      <Image
        src={imageUrl}
        alt="song-image"
        height={55}
        width={55}
        priority
        quality={60}
        className="rounded h-[55px] w-[55px]"
      />
      <div className="sm:flex flex-col justify-center">
        <h1 className="md:text-[16px] max-w-[180px] sm:max-w-[100px] lg:max-w-[300px] truncate">
          {song.title}
        </h1>
        <h1 className="text-xs md:text-sm text-neutral-500">{song.author}</h1>
      </div>
      <div className="flex items-center">
        {!isSongLiked ? (
          <button
            className="hidden sm:block text-neutral-500 hover:text-neutral-200"
            onClick={() => {
              handleLike(song.id);
              setIsSongLiked(true);
            }}
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        ) : (
          <button
            className="hidden sm:block text-neutral-500 hover:text-neutral-200"
            onClick={() => {
              handleDislike(song.id);
              setIsSongLiked(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};
