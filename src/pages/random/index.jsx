import Head from "next/head";
import { PlaylistBanner } from "../../../components/PlaylistBanner";
import { RandomImage } from "../../../components/RandomImage";
import { RandomSongs } from "../../../components/RandomSongs";

const RandomSongsPage = () => {
  return (
    <>
      <Head>
        <title>Spotifree</title>
      </Head>
      <PlaylistBanner
        title="Canciones aleatorias"
        customImage={<RandomImage iconSize="h-12 w-12" />}
      />
      <div className="mt-8">
        <RandomSongs />
      </div>
    </>
  );
};

export default RandomSongsPage;
