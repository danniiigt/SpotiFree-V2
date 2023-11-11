import Head from "next/head";
import { PlaylistBanner } from "../../../components/PlaylistBanner";

const LikedSongs = () => {
  return (
    <>
      <Head>
        <title>Spotifree</title>
      </Head>
      <div>
        <PlaylistBanner
          title="Canciones que te gustan"
          image="/images/liked.png"
        />
      </div>
    </>
  );
};

export default LikedSongs;
