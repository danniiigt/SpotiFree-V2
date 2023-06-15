import { useRouter } from "next/router";
import { getSongsByTitle } from "../../../helpers/getSongsByTitle";
import { useEffect, useState } from "react";
import { SearchInput } from "../../../components/SearchInput";
import { SearchContent } from "../../../components/SearchContent";

const BuscarPage = () => {
  const [songs, setSongs] = useState([]);
  const router = useRouter();
  const { title } = router.query;

  useEffect(() => {
    if (title) {
      const fetchSongs = async () => {
        const songs = await getSongsByTitle(title);
        setSongs(songs);
      };

      fetchSongs();
    } else {
      setSongs([]);
    }
  }, [title]);

  console.log(songs);

  return (
    <>
      <h1 className="text-4xl font-bold">Buscar canción</h1>
      <div className="mt-6 space-y-4">
        <SearchInput />
        <SearchContent songs={songs} />
      </div>
    </>
  );
};

export default BuscarPage;
