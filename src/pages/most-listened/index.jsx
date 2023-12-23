import { PlaylistBanner } from "../../../components/PlaylistBanner";
import { MostListenedImage } from "../../../components/MostListenedImage";
import { MostListenedSongs } from "../../../components/MostListenedSongs";
import Head from "next/head";

const MostListenedPage = () => {
  return (
    <>
      <Head>
        <title>Canciones más escuchadas - Spotifree</title>
      </Head>
      <PlaylistBanner
        customImage={
          <MostListenedImage
            className="sm:h-36 sm:w-36 h-28 w-28"
            iconSize="h-12 w-12"
          />
        }
        title="Canciónes más escuchadas"
        subtitle="Las 50 canciones más escuchadas de Spotifree"
      />
      <div className="mt-8">
        <MostListenedSongs />
      </div>
    </>
  );
};

export default MostListenedPage;
