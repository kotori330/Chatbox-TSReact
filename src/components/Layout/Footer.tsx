import InputField from "../UI/InputField";
import SendButton from "../Button/SendButton";
import { useState } from "react";

const Footer = ({onSendMessage} : {onSendMessage: (message: string) => void}) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    onSendMessage(message);
    setMessage("")
  };

  return (
    <>
      <div className="flex space-x-3 mt-6">
        <InputField
          value={message}
          handleChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <SendButton disabled={!message} handleSendMessage={handleSendMessage} />
      </div>
    </>
  );
};

export default Footer;
