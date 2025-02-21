const ModalHeader = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <>
      <div className="flex justify-between relative m-2">
        <div className="grid auto-rows-auto">
          <span className="font-bold">New message</span>
          <span className="text-slate-400 text-sm">
            Invite a user to this thread. This will create a new group message.
          </span>
        </div>
        <div className="absolute -top-1 right-0 text-2xl font-extralight">
          <span
            className="hover:font-medium hover:cursor-pointer"
            onClick={closeModal}
          >
            &times;
          </span>
        </div>
      </div>
    </>
  );
};

export default ModalHeader;
