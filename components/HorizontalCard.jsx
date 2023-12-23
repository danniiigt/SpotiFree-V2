import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useLoadImage } from "../hooks/useLoadImage";
import { useUser } from "../hooks/useUser";
import useAuthModal from "../hooks/useAuthModal";

export const HorizontalCard = ({
  image,
  customImage,
  text = "Canciónes que te gustan",
  small,
  url = "/",
  checkAuth,
}) => {
  const imageUrl = useLoadImage(image);
  const authModal = useAuthModal();
  const { user } = useUser();

  const handleAuth = (e) => {
    if (!user && checkAuth) {
      e.preventDefault();
      authModal.onOpen();
    }
  };

  return (
    <Link
      onClick={handleAuth}
      href={url}
      className={` ${
        small ? "bg-neutral-600/10" : "bg-neutral-100/10"
      } flex rounded items-center gap-2 hover:bg-neutral-400/10 cursor-pointer transition-all duration-200 group relative animate__animated animate__fadeIn`}
    >
      {image && (
        <Image
          src={imageUrl}
          alt="like"
          width={small ? 40 : 64}
          height={small ? 40 : 64}
          priority
          quality={100}
          className="rounded h-full object-cover"
        />
      )}
      {customImage && customImage}

      <div className="p-2">
        <h1 className={small ? "text-sm truncate text-zinc-400" : "font-bold"}>
          {text}
        </h1>
      </div>

      <div
        className={`absolute bg-green-500 w-fit ${
          small ? "p-1" : "p-2"
        } text-neutral-900 rounded-full transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100
          group-hover:top-1/2 top-3/4 transform -translate-y-1/2 right-4
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={small ? "w-4 h-4" : "w-5 h-5"}
        >
          <path
            fillRule="evenodd"
            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </Link>
  );
};
