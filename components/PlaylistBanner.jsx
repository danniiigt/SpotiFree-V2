import Image from "next/image";
import { useUser } from "../hooks/useUser";

export const PlaylistBanner = ({ title, image }) => {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={image}
        width={150}
        height={150}
        priority
        quality={70}
        className="rounded"
        alt="banner-image"
      />

      <div>
        <h1>Playlist</h1>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold">
          {title}
        </h1>
      </div>
    </div>
  );
};
