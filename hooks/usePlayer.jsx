import { create } from "zustand";

export const usePlayer = create((set) => ({
  ids: [],
  activeId: null,
  volume: 0.5,
  isPlaying: true,
  songDuration: null,
  currentSongTime: null,
  songProgress: null,
  onPlay: () => set((state) => ({ isPlaying: true })),
  onPause: () => set((state) => ({ isPlaying: false })),
  setVolume: (volume) => {
    if (volume > 0.1) {
      localStorage.setItem("volume", volume);
      set((state) => ({ volume: volume }));
    } else {
      set((state) => ({ volume: volume }));
    }
  },

  setId: (id) => set((state) => ({ activeId: id })),
  setIds: (ids) => set((state) => ({ ids: ids })),
  reset: () => set((state) => ({ ids: [], activeId: null })),
  setSongDuration: (duration) => set((state) => ({ songDuration: duration })),
  setCurrentSongTime: (time) => set((state) => ({ currentSongTime: time })),
  setSongProgress: (progress) => set((state) => ({ songProgress: progress })),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));
