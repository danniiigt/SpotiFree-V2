import Head from "next/head";
import { PlaylistBanner } from "../../../components/PlaylistBanner";
import { RandomImage } from "../../../components/RandomImage";
import { RandomSongs } from "../../../components/RandomSongs";
import { Button } from "../../../components/Button";
import { mutate } from "swr";
import { Icons } from "../../../components/Icons";

const RandomSongsPage = () => {
  return (
    <>
      <Head>
        <title>Canciones Aleatorias - Spotifree</title>
      </Head>
      <PlaylistBanner
        title="Canciones aleatorias"
        customImage={
          <RandomImage
            className="sm:h-36 sm:w-36 h-28 w-28"
            iconSize="h-12 w-12"
          />
        }
        subtitle="Un mix de canciónes al azar que seguro te gustarán"
      />
      <Button
        onClick={() => {
          mutate("randomSongs");
        }}
        className="p-1 rounded-md font-medium mt-6 bg-gradient-to-br from-[#21ad4b] to-[#78be9b] via-60% via-[#0d963a] sm:hidden"
      >
        Actualizar
        <Icons.refreshCCW className="w-4 h-4 ml-1" />
      </Button>
      <div className="mt-6">
        <RandomSongs />
      </div>
    </>
  );
};

export default RandomSongsPage;
