import Head from "next/head";
import { PlaylistBanner } from "../../../components/PlaylistBanner";
import { LikedSongs } from "../../../components/LikedSongs";
import { LoveImage } from "../../../components/LoveImage";

const LikedSongsPage = () => {
  return (
    <>
      <Head>
        <title>Spotifree</title>
      </Head>
      <PlaylistBanner
        customImage={<LoveImage className="h-36 w-36" iconSize="h-12 w-12" />}
        title="Canciónes que te gustan"
      />
      <div className="mt-8">
        <LikedSongs />
      </div>
    </>
  );
};

export default LikedSongsPage;
