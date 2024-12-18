import { useEffect, useRef } from "react";
import StarRating from "./StarRating";

const Modal = ({ isOpen, onClose ,children}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    isOpen ? modalRef.current.showModal() : modalRef.current?.close();
  }, [isOpen]);

  return (
    <dialog
      ref={modalRef}
      className="modal"
      onClick={(e) => e.target === modalRef.current && onClose()}
    >
      <div className="modal-box text-center bg-[#242429]">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
