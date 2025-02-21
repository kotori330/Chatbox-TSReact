import { cn } from "../../utils/clsx";

type Message = {
  message: string;
  sentMessage: boolean;
}

const Content = ({message} : {message: Message[] }) => {
  const chatClass = (sentMessage: boolean) =>
    cn({
      "sent-chat": sentMessage,
      "received-chat": !sentMessage,
    });

  return (
    <>
      <div className="grid auto-rows-auto mt-6">
        {message.map((item, index) => {
          return (
            <>
              <div className="my-2 max-w-[22.5rem]">
                <div className={chatClass(item.sentMessage)} key={index}>
                  <span className="chat">{item.message}</span>
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
