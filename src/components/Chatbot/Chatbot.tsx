import { useEffect, useState } from "react";

import ChatAvatar from "./components/ChatAvatar";
import ChatHeader from "./components/ChatHeader";
import ChatContent from "./components/ChatContent";
import { Icon } from "@iconify/react";
import { talentBotReply } from "./talentBotReply";

interface IMessages {
  id: number;
  message: string;
  user?: boolean;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<IMessages[]>([
    {
      id: 0,
      message: "Salam mən Talentbot 👋",
    },
    {
      id: 1,
      message: "Sənin adın nədir?",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [botName] = useState("TalentBot");
  const [tooltip] = useState(`Salam, mən ${botName}`);

  const openChat = () => setIsOpen(true);

  const closeChat = () => setIsOpen(false);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setText(val);
  };

  const sendText = () => {
    const len = messages.length;
    const message: IMessages = {
      id: len,
      message: text,
      user: true,
    };
    if (!text.trim()) return;
    setMessages((prev) => [...prev, message]);
    const reply = talentBotReply(text, messages.filter((m) => m.user).length);
    setText("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { id: prev.length, message: reply }]);
    }, 500);
  };

  return (
    <div className="fixed z-50 w-full max-w-sm bottom-4 right-4">
      {isOpen ? (
        <div className="w-full h-[500px] shadow-sm border rounded-xl bg-gray-50 px-5">
          <ChatHeader name={botName} closeChat={closeChat} />
          <div className="h-[390px] mt-1 pt-1 overflow-y-auto relative">
            <ChatContent name={botName} />
            <div className="space-y-2 pt-2">
              {messages?.map(({ id, message, user }) =>
                user ? (
                  <div key={id} className="chat-bubble-r">
                    {message}
                  </div>
                ) : (
                  <div key={id} className="chat-bubble-l">
                    {message}
                  </div>
                )
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 py-1 w-full">
            <input
              type="text"
              className=" outline-0 border-0"
              placeholder="Yaz..."
              value={text}
              onChange={handleUserInput}
              onKeyDown={(e) => e.key === "Enter" && sendText()}
            />

            <Icon
              icon="ant-design:send-outlined"
              className="w-6 h-6 cursor-pointer text-qss-secondary"
              onClick={sendText}
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-end w-full" onClick={openChat}>
          <ChatAvatar tooltip={tooltip} />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
