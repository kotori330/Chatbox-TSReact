import { cn } from "../../utils/clsx";
import { dialogue } from "../../services/messageData";

const Content = () => {
  let isSend = false;

  const chatClass = cn("chat", {
    "send-chat": isSend,
    "received-chat": !isSend,
  });

  return (
    <>
      <div className="grid auto-rows-auto mt-6">
        {dialogue.map((item, index) => {
          return (
            <>
              <div className="flex">
              {item.sentMessage ? (
                <div className="message-padding"></div>
              ) : (
                <></>
              )}

              <div className={chatClass} key={index}>
                <span>{item.message}</span>
              </div>

              {item.sentMessage ? (
                <></>
              ) : (
                <div className="message-padding"></div>
              )}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Content;
