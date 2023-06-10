import Image from "next/image";
import React from "react";

export const HorizontalCard = ({
  image = "/images/liked.png",
  text = "Canciones que te gustan",
}) => {
  return (
    <div className="bg-neutral-100/10 flex rounded items-center gap-2 hover:bg-neutral-400/10 cursor-pointer transition-all duration-200 group relative">
      <Image
        src={image}
        alt="like"
        width={70}
        height={70}
        className="rounded"
      />

      <div className="p-2">
        <h1 className="font-bold">{text}</h1>
      </div>

      <div
        className="absolute bg-green-500 w-fit p-2 text-neutral-900 rounded-full transition-all duration-200 hover:scale-110 opacity-0 group-hover:opacity-100
          group-hover:top-1/2 top-3/4 transform -translate-y-1/2 right-4
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};
