import { useState } from "react";
import Content from "./components/Layout/Content";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import { dialogue } from "./services/messageData";

const App = () => {
  const [messages, setMessages] = useState(dialogue)

  const onSendMessage = (message: string) => {
    setMessages([...messages, { message, sentMessage: true}])
  }
  return (
    <>
      <div className="w-[22%]  border-1 border-slate-200 absolute top-40 left-180 rounded-2xl p-6 shadow-md">
        <div id="Header">
          <Header />
        </div>
        <div id="Content">
          <Content message={messages}/>
        </div>
        <div id="footer">
          <Footer onSendMessage={onSendMessage}/>
        </div>
      </div>
    </>
  );
};

export default App;
