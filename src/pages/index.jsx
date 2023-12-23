import Head from "next/head";
import { HorizontalCard } from "../../components/HorizontalCard";
import { Songs } from "../../components/Songs";
import { HeaderAuth } from "../../components/HeaderAuth";
import { RandomImage } from "../../components/RandomImage";
import { MostListenedImage } from "../../components/MostListenedImage";
import { LoveImage } from "../../components/LoveImage";

const Home = () => {
  return (
    <>
      <Head>
        <title>Spotifree</title>
      </Head>
      <div className="flex items-center justify-between pt-4 lg:py-4 text-gray-200">
        <h1 className="hidden md:block text-4xl font-bold">
          ¡Bienvenido de nuevo!👋
        </h1>
        <h1 className="md:hidden text-3xl font-bold">¡Bienvenido! 👋</h1>
        <HeaderAuth />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <HorizontalCard customImage={<LoveImage />} url="/liked" checkAuth />
        <HorizontalCard
          customImage={<RandomImage className="h-16 w-16" />}
          text="Canciónes aleatorias"
          url="/random"
        />
        <HorizontalCard
          customImage={<MostListenedImage />}
          text="Canciónes más escuchadas"
          url="/most-listened"
        />
      </div>

      <h1 className="text-2xl font-bold mt-8">Novedades</h1>
      <h1 className="font-light text-sm">Los temazos más recientes 🔥</h1>
      <Songs />
    </>
  );
};

export default Home;
