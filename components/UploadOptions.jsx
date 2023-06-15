import Image from "next/image";
import useUploadModal from "../hooks/useUploadModal";
import { toast } from "react-hot-toast";

export const UploadOptions = () => {
  const { onSelectedOption } = useUploadModal();

  const handleSelectedOption = (option) => {
    onSelectedOption(option);
  };

  const handleSelectFutureOption = () => {
    toast("Esta opción estará disponible en futuras actualizaciones", {
      icon: "⏰",
    });
  };

  return (
    <div className="flex flex-col gap-4 p-2">
      <button
        onClick={() => handleSelectedOption("file")}
        className="bg-neutral-900/80 hover:bg-neutral-900/50 transition-all duration-200 border border-neutral-700 p-10 rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          />
        </svg>
        <h1 className="text-center mt-4">Subir archivo</h1>
      </button>
      <button
        onClick={handleSelectFutureOption}
        className="bg-neutral-900/80 hover:bg-neutral-900/50 transition-all duration-200 border border-neutral-700 p-10 rounded"
      >
        <Image
          src="/images/youtube-logo.svg"
          alt="YouTube Logo"
          width={64}
          height={64}
          className="mx-auto"
        />
        <h1 className="text-center mt-4">Seleccionar desde YouTube</h1>
      </button>
    </div>
  );
};
