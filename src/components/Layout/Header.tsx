import UserInfo from "../UI/UserInfo";
import OpenModalButton from "../Button/OpenModalButton";
import { useState } from "react";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      <div className="flex justify-between">
        <div>
          <UserInfo />
        </div>
        <div>
          <OpenModalButton openModal={handleOpenModal} />
        </div>
      </div>
      {openModal ? <Modal /> : <></>}
    </>
  );
};

export default Header;
