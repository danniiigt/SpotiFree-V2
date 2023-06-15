import { create } from "zustand";

export const usePlayer = create((set) => ({
  ids: [],
  activeId: null,
  volume: 0.5,
  isPlaying: true,
  onPlay: () => set((state) => ({ isPlaying: true })),
  onPause: () => set((state) => ({ isPlaying: false })),
  setVolume: (volume) => set((state) => ({ volume: volume })),
  setId: (id) => set((state) => ({ activeId: id })),
  setIds: (ids) => set((state) => ({ ids: ids })),
  reset: () => set((state) => ({ ids: [], activeId: null })),
}));
