import { cn } from "../../utils/clsx";

const SendButton = ({
  handleSendMessage,
  disabled,
}: {
  handleSendMessage: () => void;
  disabled: boolean;
}) => {
  return (
    <>
      <div className="">
        <button
          onClick={handleSendMessage}
          className={cn("bg-gray-700", "rounded-xl", "p-3", {
            "hover:opacity-70 !bg-gray-400": !disabled,
          })}
        >
          <img
            src="/src/assets/send.png"
            alt="Send button"
            className="w-6 h-5 "
          />
        </button>
      </div>
    </>
  );
};

export default SendButton;
