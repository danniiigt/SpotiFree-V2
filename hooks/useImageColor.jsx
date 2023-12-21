import { create } from "zustand";

export const useImageColor = create((set) => ({
  color: null,
  setColor: (color) => set((state) => ({ color: color })),
  reset: () => set((state) => ({ color: null })),
}));
