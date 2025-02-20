import { dialogue } from "../../services/messageData";

const SendButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <>
      <div className="bg-gray-400 rounded-2xl">
        <button onClick={handleClick}>
          <img src="/src/assets/send.png" alt="Send button" className="w-6 h-6"/>
        </button>
      </div>
    </>
  );
};

export default SendButton;
