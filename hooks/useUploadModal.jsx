import { create } from "zustand";

const useUploadModal = create((set) => ({
  isOpen: false,
  selectedOption: null, // "file" | "youtube" | "null"
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false, selectedOption: null }),
  onSelectedOption: (option) => set({ selectedOption: option }),
}));

export default useUploadModal;
