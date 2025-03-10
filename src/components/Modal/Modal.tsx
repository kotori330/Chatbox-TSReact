import { useEffect, useRef } from "react";
import ModalHeader from "./ModalHeader";
import ModalContent from "./ModalContent";

const Modal = ({
  open,
  closeModal,
}: {
  open: boolean;
  closeModal: () => void;
}) => {
  // Handle click outside the modal
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };

  }, [open, closeModal]);

  return (
    <>
      <div className="modal-background fixed bg-slate-500/50 top-0 left-0 w-full h-full flex justify-center items-center z-100">
        {/* CSS: 'max-w-[rem]': Responsive padding */}
        <div
          className="bg-white p-2 max-w-[32rem] w-144 rounded-xl"
          ref={modalRef}
        >
          <ModalHeader closeModal={closeModal} />
          <ModalContent closeModal={closeModal} />
        </div>
      </div>
    </>
  );
};

export default Modal;
