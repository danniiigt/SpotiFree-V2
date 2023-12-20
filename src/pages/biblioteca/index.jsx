import Head from "next/head";
import React from "react";
import { Icons } from "../../../components/Icons";

const BibliotecaPage = () => {
  return (
    <>
      <Head>
        <title>Biblioteca - Spotifree</title>
      </Head>
      <div className="py-52 text-center flex flex-col items-center">
        <Icons.clock strokeWidth={1} className="w-14 h-14" />
        <h1 className="font-bold text-4xl">Próximamente</h1>
        <p className="text-gray-500">
          Esta página estará disponible próximamente
        </p>
      </div>
    </>
  );
};

export default BibliotecaPage;
