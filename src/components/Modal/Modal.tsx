import { useEffect, useState, useRef } from "react";
import ModalHeader from "./ModalHeader";
import ModalContent from "./ModalContent";
import { listContact } from "../../services/staticData";

const Modal = ({
  open,
  closeModal,
}: {
  open: boolean;
  closeModal: () => void;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal();
      }

      if (open) {
        document.addEventListener("mousedown", handleClickOutside);
        document.body.style.overflow = "hidden";
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.body.style.overflow = "unset";
      };
    };
  }, [open, closeModal]);

  const filterListContact = (searchValue: string) => {
    listContact.filter((item) => {
      if (searchValue !== "") {
        item.name.toLowerCase().includes(searchValue);
      }
    });
  };

  const displayAddedContacts = () => {};

  return (
    <>
      <div className="modal-background fixed bg-slate-500/50 top-0 left-0 w-full h-full flex justify-center items-center z-100">
        <div className="bg-white p-2 w-[28%] rounded-xl" ref={modalRef}>
          <ModalHeader closeModal={closeModal} />

          <ModalContent
            filterListContact={filterListContact}
            closeModal={closeModal}
          />
          {/* <ModalFooter
            closeModal={closeModal}
            displayAddedContacts={displayAddedContacts}
          /> */}
        </div>
      </div>
    </>
  );
};

export default Modal;
