import { useState } from "react";
import { listContact } from "../../services/staticData";
import { UserInfo } from "../UI/UserInfo";

const ModalContent = ({
  closeModal,
  filterListContact,
}: {
  closeModal: () => void;
  filterListContact: (searchValue: string) => void;
}) => {
  const [addedContact, setAddedContact] = useState(
    listContact.map((contact) => ({
      id: contact.id,
      avatar: contact.avatar,
      isAdded: false,
    }))
  );

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

      {listContact.map((item) => {
        return (
          <div className="relative" onClick={() => toggleAddToThread(item.id)}>
            <UserInfo
              className="hover:bg-slate-200/50 rounded-xl flex space-x-4 hover:cursor-default my-1 p-2"
              contactId={item.id}
              src={item.avatar}
              name={item.name}
              email={item.email}
              isAdded={item.isAdded}
            />

            {/* Find the id from addedContact obj which matches the listContact.id. If found, it takes the isAdded property*/}
            {/* Literaly each contact.id will match with corresponding item.id, but writing addedContact.isAdded only is wrong cuz you cannot access a property directly from an array, so "find" method will return the FIRST element that passed, that means every key-value is passed*/}
            {addedContact.find((contact) => contact.id === item.id)?.isAdded ? (
              <img
                src="src/assets/check.png"
                alt=""
                className="absolute top-4 right-3 w-4 h-4"
              />
            ) : (
              <></>
            )}
          </div>
        );
      })}

      <div className="modal-divider"></div>

      <div
        className="flex justify-between mt-4 mb-2 mx-2"
        // onChange={displayAddedContacts}
      >
        {listContact.map((item) => {
          return (
            <>
              {addedContact.find((contact) => contact.id === item.id)
                ?.isAdded ? (
                <img
                  src={
                    addedContact.find((contact) => contact.id === item.id)
                      ?.avatar
                  }
                  alt=""
                  className="w-10 h-10 rounded-full -mx-2"
                />
              ) : (
                <span>Select users to add to this thread</span>
              )}
            </>
          );
        })}
        <button
          className="bg-black text-white rounded-md text-sm px-4 py-2 hover:cursor-pointer hover:opacity-90"
          onClick={closeModal}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default ModalContent;
