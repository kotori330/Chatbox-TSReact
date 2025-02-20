import { cn } from "../../utils/clsx";
import { dialogue } from "../../services/messageData";

const Content = () => {

  const chatClass = (sentMessage: boolean) => cn({
    "sent-chat": sentMessage,
    "received-chat": !sentMessage,
  });

  return (
    <>
      <div className="grid auto-rows-auto mt-6">
        {dialogue.map((item, index) => {
          return (
            <>
              
            <div className="chat">
              <div className={chatClass(item.sentMessage)} key={index}>
                <span className="">{item.message}</span>
              </div>

            </div>

              
              
            </>
          );
        })}
      </div>
    </>
  );
};

export default Content;
