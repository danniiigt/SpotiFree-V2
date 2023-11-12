import Head from "next/head";
import { PlaylistBanner } from "../../../components/PlaylistBanner";
import { LikedSongs } from "../../../components/LikedSongs";

const LikedSongsPage = () => {
  return (
    <>
      <Head>
        <title>Spotifree</title>
      </Head>
      <PlaylistBanner
        title="Canciones que te gustan"
        image="/images/liked.png"
      />
      <div className="mt-8">
        <LikedSongs />
      </div>
    </>
  );
};

export default LikedSongsPage;
