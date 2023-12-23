import Image from "next/image";

export const PlaylistBanner = ({ title, subtitle, image, customImage }) => {
  return (
    <header className="flex items-center gap-4">
      {image && (
        <Image
          src={image}
          width={150}
          height={150}
          priority
          quality={70}
          className="rounded"
          alt="banner-image"
        />
      )}

      {customImage && <div>{customImage}</div>}

      <div>
        <h3 className="hidden sm:block">Playlist</h3>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold">
          {title}
        </h1>
        <p className="text-neutral-500 text-sm sm:text-base">{subtitle}</p>
      </div>
    </header>
  );
};
