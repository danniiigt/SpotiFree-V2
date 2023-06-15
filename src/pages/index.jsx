import { HorizontalCard } from "../../components/HorizontalCard";
import { Songs } from "../../components/Songs";

const Home = () => {
  return (
    <>
      <h1 className="text-4xl font-bold">Bienvenido de nuevo</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <HorizontalCard url="/liked" />
        <HorizontalCard
          image="/images/top-50-spain.jpg"
          text="Top 50: España"
        />
        <HorizontalCard
          image="/images/top-50-global.jpg"
          text="Top 50: Global"
        />
      </div>

      <h1 className="text-2xl font-bold mt-8">Novedades</h1>
      <h1 className="font-light text-sm">Basadas en tus gustos</h1>

      <Songs />
    </>
  );
};

export default Home;
