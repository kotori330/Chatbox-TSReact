import InputField from "../UI/InputField";
import SendButton from "../Button/SendButton";
import { dialogue } from "../../services/messageData";
import { useState } from "react";

const Footer = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    dialogue.push({ message, sentMessage: true });
    setMessage("");
  };

  const handleChange = (message: string) => {
    setMessage(message);
  };


    

  return (
    <>
      <div className="flex space-x-3 mt-6">
        <InputField
          value={message}
          handleChange={(e) => {
            handleChange(e.target.value);
          }}
        />
        <SendButton disabled={!message} handleClick={handleSendMessage} />
      </div>
    </>
  );
};

export default Footer;
