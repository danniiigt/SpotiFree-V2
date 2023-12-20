import Head from "next/head";
import { PlaylistBanner } from "../../../components/PlaylistBanner";
import { RandomImage } from "../../../components/RandomImage";
import { RandomSongs } from "../../../components/RandomSongs";

const RandomSongsPage = () => {
  return (
    <>
      <Head>
        <title>Canciones Aleatorias - Spotifree</title>
      </Head>
      <PlaylistBanner
        title="Canciones aleatorias"
        customImage={<RandomImage className="h-36 w-36" iconSize="h-12 w-12" />}
      />
      <div className="mt-8">
        <RandomSongs />
      </div>
    </>
  );
};

export default RandomSongsPage;
