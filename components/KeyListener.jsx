// components/KeyListener.js
import { useEffect } from "react";
import { usePlayer } from "../hooks/usePlayer";

export const KeyListener = () => {
  const { isPlaying, onPlay, onPause, loading } = usePlayer();

  const onSpacePress = (event) => {
    event.preventDefault();
    if (loading) return;
    if (isPlaying) onPause();
    if (!isPlaying) onPlay();
  };

  const handleKeyPress = (event) => {
    if (event.key === "MediaPlayPause") {
      onSpacePress(event);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isPlaying]);

  return null; // El componente no renderiza nada en el DOM
};
