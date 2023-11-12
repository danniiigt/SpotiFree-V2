import Head from "next/head";
import { HorizontalCard } from "../../components/HorizontalCard";
import { Songs } from "../../components/Songs";
import { HeaderAuth } from "../../components/HeaderAuth";
import { RandomImage } from "../../components/RandomImage";

const Home = () => {
  return (
    <>
      <Head>
        <title>Spotifree</title>
      </Head>
      <div className="flex items-center justify-between py-4">
        <h1 className="text-4xl font-bold">Bienvenido de nuevo</h1>
        <HeaderAuth />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <HorizontalCard image="/images/liked.png" url="/liked" />
        <HorizontalCard
          customImage={<RandomImage />}
          text="Canciónes aleatorias"
          url="/random"
        />
        <HorizontalCard
          image="/images/top-50-global.jpg"
          text="Top 50: Global"
        />
      </div>

      <h1 className="text-2xl font-bold mt-8">Novedades</h1>
      <h1 className="font-light text-sm">Las temazos más recientes</h1>

      <Songs />
    </>
  );
};

export default Home;
