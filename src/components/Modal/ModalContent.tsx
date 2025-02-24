import { useState } from "react";
import { listContact } from "../../services/staticData";
import { UserInfo } from "../UI/UserInfo";
import { cn } from "../../utils/clsx";

// Cách để khởi tạo initial state là 1 array với phần tử  là các object 
type Avatar = {
  id: string;
  avatar: string;
};

const ModalContent = ({
  closeModal,
}: {
  closeModal: () => void;
}) => {
  const [addedContact, setAddedContact] = useState(
    listContact.map((contact) => ({
      id: contact.id,
      name: contact.name,
      avatar: contact.avatar,
      email: contact.email,
      isAdded: false,
    }))
  );

  const [addedAvatar, setAddedAvatar] = useState([] as Avatar[]);

  const toggleAddToThread = (contactId: string) => {
    setAddedContact((prevState) => {
      return prevState.map((contact) => {
        if (contact.id === contactId) {
          return { ...contact, isAdded: !contact.isAdded };
        }
        return contact;
      });
    });
  };

  const handleAvatarThread = (contactId: string, isAdding: boolean) => {
    setAddedAvatar((prevState) => {
      if (isAdding) {
        const contact = listContact.find((contact) => contact.id === contactId);
        return contact
          ? [...prevState, { id: contactId, avatar: contact.avatar }]
          : prevState;
      } else {
        return prevState.filter((item) => item.id !== contactId);
      }
    });
  };

  const filterListContact = (contactName: string) => {
    const lowerCaseName = contactName.toLowerCase();
    setAddedContact(() =>
      listContact
        .map((contact) => ({
          id: contact.id,
          name: contact.name,
          avatar: contact.avatar,
          email: contact.email,
          isAdded: false,
        }))
        .filter((item) => item.name.toLowerCase().includes(lowerCaseName))
    );
  };

  return (
    <>
      <div className="modal-divider"></div>
      <div className="space-x-2 flex my-2">
        <img
          src="src/assets/magnifying-glass.png"
          alt=""
          className="w-6 opacity-30"
        />
        <input
          type="text"
          placeholder="Search user..."
          className="focus:outline-0 text-sm w-full"
          onChange={(e) => filterListContact(e.target.value)}
        />
      </div>
      <div className="modal-divider"></div>

      {addedContact.map((item) => {
        const isAdded = addedContact.find(
          (contact) => contact.id === item.id
        )?.isAdded;
        return (
          <div
            key={item.id}
            // CSS: 'select-none': Khiến toàn bộ context không thể bị bôi đen (text, image...)
            className="relative select-none"
            onClick={() => {
              toggleAddToThread(item.id);
              handleAvatarThread(item.id, !isAdded);
            }}
          >
            <UserInfo
              className="hover:bg-slate-200/50 rounded-xl flex space-x-4 hover:cursor-default my-1 p-2"
              contactId={item.id}
              src={item.avatar}
              name={item.name}
              email={item.email}
              isAdded={isAdded}
            />

            {/* Find the id from addedContact obj which matches the listContact.id. If found, it takes the isAdded property */}
            {/* Literaly each contact.id will match with corresponding item.id, but writing addedContact.isAdded only is wrong cuz you cannot access a property directly from an array, so "find" method will return the FIRST element that passed, that means every key-value is passed*/}
            {addedContact.find((contact) => contact.id === item.id)
              ?.isAdded && (
              <img
                src="src/assets/check.png"
                alt=""
                className="absolute top-4 right-3 w-4 h-4"
              />
            )}
          </div>
        );
      })}

      <div className="modal-divider"></div>

      <div className="flex justify-between mt-4 mb-2 mx-2">
        <div className="flex items-center w-full mx-2">
          {addedAvatar.map((item) => {
            return (
              <img
                src={item.avatar}
                alt=""
                className="w-9 h-9 rounded-full -mx-2"
              />
            );
          })}
          {/* '&&': AND operator: If left is true, display right */}
          {addedAvatar.length === 0 && (
            <span>Select users to add to this thread</span>
          )}
        </div>

        <button
          className={cn(
            "bg-black opacity-50 text-white rounded-md text-sm px-4 py-2 ",
            {
              "hover:cursor-pointer hover:opacity-90 !opacity-100": addedAvatar.length >= 2,
            }
          )}
          onClick={closeModal}
          disabled={addedAvatar.length < 2}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default ModalContent;
