import { useUser } from "@supabase/auth-helpers-react";
import { HorizontalCard } from "../../components/HorizontalCard";
import { SongCard } from "../../components/SongCard";
import { MainLayout } from "../../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <h1 className="text-4xl font-bold">Bienvenido de nuevo</h1>
      <div className="grid grid-cols-3 gap-4 mt-6">
        <HorizontalCard />
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

      <div className="grid grid-cols-6 gap-5 mt-8">
        <SongCard />
        <SongCard
          title="Los del Espacio"
          image="https://i.scdn.co/image/ab67616d00001e0252c8b9dffa4fcdb36e30eea2"
          authors="Lit Killah, FMK, Big One, Thiago PZK, Maria Becerra"
        />
        <SongCard
          title="El cielo"
          image="https://images.genius.com/629da74b070a30d8ee4aaf726a42bffd.1000x1000x1.png"
          authors="Feid, Myke Towers, Sky Rompiendo"
        />
      </div>
    </MainLayout>
  );
};

export default Home;
