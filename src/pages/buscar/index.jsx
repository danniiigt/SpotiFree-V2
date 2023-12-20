import { useRouter } from "next/router";
import { getSongsByTitle } from "../../../helpers/getSongsByTitle";
import { useEffect, useState } from "react";
import { SearchInput } from "../../../components/SearchInput";
import { SearchContent } from "../../../components/SearchContent";
import Head from "next/head";

const BuscarPage = () => {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { query } = useRouter();
  const { title } = query;

  const fetchSongs = async () => {
    setIsLoading(true);
    const songs = await getSongsByTitle(String(title).trim());
    setSongs(songs);
    setIsLoading(false);
  };

  useEffect(() => {
    if (title) {
      fetchSongs();
    } else {
      setSongs([]);
    }
  }, [title]);

  return (
    <>
      <Head>
        <title>Spotifree</title>
      </Head>
      <div className="pt-4 text-gray-200">
        <h1 className="hidden md:block text-4xl font-bold">Buscar canción</h1>
        <h1 className="md:hidden text-3xl font-bold">Buscar canción</h1>
      </div>
      <div className="mt-6 space-y-4">
        <SearchInput />
        <SearchContent songs={songs} isLoadingSearch={isLoading} />
      </div>
    </>
  );
};

export default BuscarPage;
