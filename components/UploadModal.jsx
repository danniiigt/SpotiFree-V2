import React from "react";
import { Modal } from "./Modal";
import useUploadModal from "../hooks/useUploadModal";
import { UploadOptions } from "./UploadOptions";
import { UploadFile } from "./UploadFile";

export const UploadModal = () => {
  const { isOpen, onClose, selectedOption } = useUploadModal();

  return (
    <Modal
      title="Subir canción"
      description="Selecciona una canción para subir a tu biblioteca"
      isOpen={isOpen}
      onChange={onClose}
    >
      {!selectedOption && <UploadOptions />}

      {selectedOption == "file" && <UploadFile />}
    </Modal>
  );
};
