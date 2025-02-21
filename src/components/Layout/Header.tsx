import MainUserInfo from "../UI/UserInfo";
import OpenModalButton from "../Button/OpenModalButton";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false)
  }

  return (
    <>
      <div className="flex justify-between">
        <div>
          <MainUserInfo />
        </div>
        <div>
          <OpenModalButton openModal={handleOpenModal} />
        </div>
      </div>
      {openModal ? <Modal open={openModal} closeModal={closeModal}/> : <></>}
      {/* <Modal /> */}
    </>
  );
};

export default Header;
