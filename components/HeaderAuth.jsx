import React from "react";
import useAuthModal from "../hooks/useAuthModal";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useUser } from "../hooks/useUser";
import { Toaster, toast } from "react-hot-toast";

export const HeaderAuth = () => {
  const { onOpen } = useAuthModal();
  const { session } = useSessionContext();
  const { signOut } = useUser();

  const onSignOut = () => {
    signOut();
    toast.success("Sesión cerrada correctamente", {
      duration: 2000,
      position: "top-center",
    });
  };

  if (!session) {
    return (
      <div className="flex gap-4">
        <button
          onClick={onOpen}
          className="bg-green-700 hover:bg-green-800 rounded-3xl py-2 px-4 flex items-center gap-2 transition-all duration-200"
        >
          <span className="hidden sm:block">Acceder</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex gap-4">
        <button
          onClick={onSignOut}
          className="bg-green-700 hover:bg-green-800 rounded-full p-2 aspect-square sm:aspect-auto sm:py-2 sm:px-4 flex items-center gap-2 transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
          <span className="hidden sm:block">Cerrar Sesión</span>
        </button>
      </div>
    );
  }
};
